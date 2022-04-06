import '../scss/index.scss'
import Writer, {timer} from './classes/Writer'

const words = [
    'Memo',
    'a Designer',
    'a Developer'
]

const words2 = [
    'asfghjkl',
    'a cfsij soidkf sf',
    'a sdfionn pppdcpojden dsdf'
]
const textWrapper = document.getElementById('header-words') as HTMLElement

let mWriter = new Writer(textWrapper)
await mWriter.writeWord('Memo')
await timer(500)
mWriter.speed = 50
await mWriter.writeWord(' ayuda')


const writeRoutine = [
    {
        text: 'Memo',
        speed: 1,
    }
]

console.log(writeRoutine)