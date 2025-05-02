import moonIcon from '../assets/img/icon-moon.svg'
import crossIcon from '../assets/img/icon-cross.svg'
import { ToggleNightMode, CreateEliminateToDo } from './functions.js'


const $mode = document.getElementById('mode-button')
const $cross = document.querySelectorAll('.icon-cross')
const $list = document.querySelectorAll('.list')
const $todoForm = document.getElementById('todo-form')

document.getElementById('icon-moon').src = moonIcon

for(let i = 0; i < $list.length; i++){
    $cross[i].src = crossIcon
}

$mode.addEventListener('click', ToggleNightMode)

$todoForm.addEventListener('submit', CreateEliminateToDo)









