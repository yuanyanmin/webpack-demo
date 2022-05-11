import './style.css'
import './input.js'

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
    div.classList.add('square')
    document.body.appendChild(div)
})


document.body.appendChild(button)

if (module.hot) {
    module.hot.accept('./input.js', () => {
        
    })
}