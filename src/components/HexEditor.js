import React, { Component } from 'react';
import faker from 'faker';
import ArrayTools from '../services/ArrayTools';

export default class HexEditor extends Component {
    constructor() {
        super();
        this.state = {dataString: ''}
        this.lines = 14;
        this.lineLength = 16;
        this.fakerPatterns = [
            "{{hacker.abbreviation}}",
            "{{finance.bitcoinAddress}}",
            "{{system.fileName}}",
            " "
        ]

        this.updateInterval = setInterval(this.processDataString.bind(this), 800);
    }

    getMaxStringLength() {
        return this.lines * this.lineLength
    }

    getRandomString() {
        return faker.fake(ArrayTools.randomElement(this.fakerPatterns));
    }

    updateDataString() {
        this.setState(
            (state) => ({
                dataString: this.getRandomString() + state.dataString
            })
        );
    }

    cutDataString() {
        let maxStringLength = this.getMaxStringLength();

        if (this.state.dataString.length > maxStringLength) {
            this.setState(
                (state) => ({
                    dataString: state.dataString.substr(1, maxStringLength)
                })
            )
        }
    }

    processDataString() {
        while (this.state.dataString.length < this.getMaxStringLength()) {
            this.updateDataString();
        }

        this.updateDataString();
        this.cutDataString();
    }

    getLines() {
        let lines = [];
        for (let row = 0; row < this.lines; row++) {
            let lineString = this.state.dataString.substring(row * this.lineLength, (row + 1) * this.lineLength);

            let hex = [];
            for (let i = 0; i < lineString.length; i++) {
                hex.push(<span key={i}>{lineString.charCodeAt(i).toString(16)}</span>);
            }

            lines.push(
                <div className="line row" key={row}>
                    <div className="hex col col-xs-8">{hex}</div>
                    <div className="alphanum col col-xs-4">{lineString}</div>
                </div>
            )
        }

        return lines;
    }

    render() {
        return (
            <div className="hex-editor window">
                {this.getLines()}
            </div>
        )
    }
}
