import React, { Component } from 'react';
import faker from 'faker';
import ArrayTools from '../services/ArrayTools';

export default class Logs extends Component {
    constructor() {
        super();
        this.state = {lines: []};
        this.colorClasses = ['green', 'red'];
        this.linesNumber = 10;
        this.fakerPatterns = [
            "{{hacker.phrase}}",
        ]

        this.updateInterval = setInterval(this.processLines.bind(this), 1000);
    }

    getRandomString() {
        return faker.fake(ArrayTools.randomElement(this.fakerPatterns));
    }

    processLines() {
        let lines = this.state.lines;
        lines.push({
            text: this.getRandomString(),
            colorClass: ArrayTools.randomElement(this.colorClasses)
        });

        if (lines.length > this.linesNumber) {
            lines.shift();
        }

        this.setState({lines: lines});
    }

    getLines() {
        let lines = [];

        for (let row = 0; row < this.state.lines.length; row++) {
            lines.push(
                <div className={'line ' + this.state.lines[row].colorClass} key={row}>
                    {this.state.lines[row].text}
                </div>
            )
        }

        return lines;
    }

    render() {
        return (
            <div className="logs window">
                {this.getLines()}
            </div>
        )
    }
}
