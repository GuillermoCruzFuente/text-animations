export const timer = (delay: number) => {
    return new Promise((res)=> setTimeout(res, delay))
}

// type WriterConfig = {
//     textContainer: HTMLElement,
//     words: Array<string> | string,

// }

export const SPEED = {
    SLOW: 200,
    NORMAL: 150,
    FAST: 100,
    LUDICROUS: 50
}

// export enum SPEEDS {
//     SLOW = 200,
//     NORMAL = 150,
//     FAST = 100,
//     LUDICROUS = 50
// }

export default class Writer {
    private textContainer: HTMLElement
    private _speed = SPEED.NORMAL

    constructor(textContainer: HTMLElement) {
        this.textContainer = textContainer
    }

    set speed(newSpeed: number) {
        this._speed = newSpeed
    }

    get speed() {
        return this._speed
    }

    /**
     * change the position (left or right) of the cursor
     * @param steps number of characters to move the cursor, negative values advance to left and positive to the right, overflow values will go to the first and last character respectively
     */
    async moveCursor(steps: number) {

    }

    /**
     * Delete the letter before the cursor, make sure to move your cursor to the right place to delete
     */
    async delete() {

    }

    /**
     * Delete all the characters in the container
     * @param isInstantaneous specify if all the character will be deleted without delay (like ctrl+del)
     */
    async deleteAll(isInstantaneous: boolean = false) {
        isInstantaneous ? this.textContainer.innerHTML = '' : console.log('a')
    }

    /**
     * Put the specified character to the left of cursor
     * @param character character to write
     */
    writeChar(character: string = 'a') {
        this.textContainer.innerHTML += character
    }

    async writeWord(word: string) {

        for (let j = 0; j < word.length; j++) {
            const letter = word[j];

            await timer(this.speed)
            this.writeChar(letter)
        }

    }

    async writeArray(words: Array<string>) {
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            
            for (let j = 0; j < word.length; j++) {
                const letter = word[j];

                await timer(150)
                this.textContainer.innerHTML += letter
                
                if (j === word.length - 1) {
                    await timer(1000)
                    if (i === (words.length - 1)) {
                        this.textContainer.innerHTML += '.'

                        await timer(3000)
                        this.deleteLetters(3)
                    } else {
                        this.textContainer.innerHTML = ''
                    }
                }
            }

            await timer(1000)
        }

        console.log('finish')
    }

    async deleteLetters(howMany: number) {
        for (let i = 0; i < howMany; i++) {
            await timer(200);
            this.textContainer.innerHTML = this.textContainer.innerHTML.replace(/(\s+)?.$/, '')
        }
    }

    
}