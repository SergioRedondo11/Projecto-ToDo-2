import moonIcon from '../assets/img/icon-moon.svg'
import crossIcon from '../assets/img/icon-cross.svg'
import { ToggleNightMode } from './theme'

const $mode = document.getElementById('mode-button')
const $cross = document.getElementById('icon-cross')

document.getElementById('icon-moon').src = moonIcon
$cross.src = crossIcon

$mode.addEventListener('click', ToggleNightMode)
    
   

