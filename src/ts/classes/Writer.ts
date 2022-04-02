const timer = (delay: number) => {
    return new Promise((res)=> setTimeout(res, delay))
}

// type WriterConfig = {
//     textContainer: HTMLElement,
//     words: Array<string> | string,

// }

export default class Writer {
    private textContainer: HTMLElement
    private words: Array<string>

    constructor(textContainer: HTMLElement, words: Array<string>) {
        this.textContainer = textContainer
        this.words = words
    }

    async write(word: string) {

        for (let j = 0; j < word.length; j++) {
            const letter = word[j];
            await timer(150)
            this.textContainer.innerHTML += letter
        }

    }

    async writeArray() {
        for (let i = 0; i < this.words.length; i++) {
            const word = this.words[i];
            
            for (let j = 0; j < word.length; j++) {
                const letter = word[j];

                await timer(150)
                this.textContainer.innerHTML += letter
                
                if (j === word.length - 1) {
                    await timer(1000)
                    if (i === (this.words.length - 1)) {
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