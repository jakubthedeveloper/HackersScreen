export default class ArrayTools {
    static randomElement(array) {
        return array[Math.floor(Math.random() * array.length)]
    }
}
