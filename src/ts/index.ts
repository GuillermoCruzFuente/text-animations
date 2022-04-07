import '../scss/index.scss'
import Writer, {timer, SPEED} from './classes/Writer'
import Lottie from 'lottie-web'
import menuAnimation from '../static/lottie/logo.json'

const writeRoutine = async () => {
    let mWriter = new Writer(document.getElementById('header-words') as HTMLElement)
    mWriter.speed = SPEED.FAST
    await mWriter.writeWord('I am Memo')
    
    await timer(1000)
    mWriter.speed = SPEED.FAST
    await mWriter.deleteAll(true)
    await mWriter.writeWord('I am a Web Developer')

    await timer(1000)
    mWriter.speed = SPEED.LUDICROUS
    await mWriter.deleteAll(true)
    await timer(500)
    await mWriter.writeWord('I am a UX/UI designer')

    await timer(1000)
    mWriter.speed = SPEED.LUDICROUS
    await mWriter.deleteAll(true)
    await timer(500)
    await mWriter.writeWord('I am Memo')
}

writeRoutine()

Lottie.loadAnimation({
    container: document.getElementById('logo-animation') as HTMLElement,
    animationData: menuAnimation,
    loop: false
})