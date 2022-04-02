import '../scss/index.scss'
import Writer from './classes/Writer'

const words = [
    'texto de',
    'prueba',
    'escritura'
]
const textWrapper = document.getElementById('header-words') as HTMLElement


// const typeWriter = async (words: Array<string>) => {

//     for (let i = 0; i < words.length; i++) {
//         const word = words[i];
//         for (let j = 0; j < word.length; j++) {
//             const letter = word[j];
//             await timer(150)
//             textWrapper.innerHTML += letter
//         }

//         await timer(1000)
//         i === words.length - 1 ? textWrapper.innerHTML = '' : 0
//     }
// }

// typeWriter(words)



let mWriter = new Writer(textWrapper, words)
mWriter.writeArray()