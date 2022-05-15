// import '../style.css'
import style from '../style.css'
import './input.js'
import $ from 'jQuery'
const math = require('./math')
class A {
    constructor () {
        this.str = 'hello webpack'
    }

    sayHello() {
        console.log(this.str);
    }
}

const a = new A()
a.sayHello()

// fetch('/api/hello').then(res => res.text()).then(res => {
//     console.log(res);
// })

const button = document.createElement('button')

button.textContent = '添加'

button.addEventListener('click', () => {
    const div = document.createElement('div')
    // div.classList.add('square')
    div.classList.add(style.square)
    document.body.appendChild(div)
})


document.body.appendChild(button)

if (module.hot) {
    module.hot.accept('./input.js', () => {
        
    })
}

console.log('$', $);
console.log(math.add(4, 5));


const worker = new Worker(new URL('./work.js', import.meta.url))

worker.postMessage({
    question: 'hi 今天天气怎么样'
})

worker.onmessage = (message) => {
    console.log(message.data.answer);
}