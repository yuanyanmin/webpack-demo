import hello from "./hello-word";
import imgsrc from './assets/img-1.png'
import logoSvg from './assets/webpack-logo.svg'
import exampleTxt from './assets/example.txt'
import jpgMap from './assets/qianfeng-sem.jpg'
import './style.css'
import './style.less'
import './async-module'
import _ from 'lodash'

hello()

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.style.cssText = 'width: 600px; height: 200px'
img2.src = logoSvg
document.body.appendChild(img2)

const block = document.createElement('div')
block.style.cssText = 'width: 200px; height: 200px; background: aliceblue'
block.textContent = exampleTxt
document.body.appendChild(block)

const img3 = document.createElement('img')
img3.style.cssText = 'width: 600px; height: 240px; display: block'
img3.src = jpgMap
document.body.appendChild(img3)

document.body.classList.add('hello')


console.log(_.join(['index', 'module', 'loaded']), ' ');

const button = document.createElement('button')
button.textContent = '加法'
button.addEventListener('click', () => {
    // webpackPreload
    import(/*webpackChunkName: 'math', webpackPrefetch: true*/'./math.js').then(({add}) => {
        console.log(add(4,5))
    })
})

document.body.appendChild(button)
