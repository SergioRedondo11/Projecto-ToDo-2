import sunIcon from '../assets/img/icon-sun.svg'
import moonIcon from '../assets/img/icon-moon.svg'

const $mode = document.getElementById('mode-button')
const $title = document.getElementById('title')
const $todo = document.getElementById('todo-form')
const $list = document.getElementById('list')
const $todoButton = document.getElementById('todo-button')
const $listButton = document.getElementById('list-button')
const $todoText = document.getElementById('todo-text')
const $listText = document.getElementById('list-text')
const $crossButton = document.getElementById('cross-button')

let nightMode = false

export function ToggleNightMode(){
    if(!nightMode){
        $title.classList.replace('text-white','text-neutral-700')
        document.body.classList.add('bg-neutral-700')
        $todo.classList.replace('bg-white','bg-neutral-700')
        $list.classList.replace('bg-white','bg-neutral-700')
        $todoButton.classList.add('border-white')
        $listButton.classList.add('border-white')
        $todoText.classList.add('text-white', 'placeholder-gray-300')
        $listText.classList.add('text-white')
        $crossButton.classList.add('bg-gray-300', 'border','border-neurtal-700', 'p-2')
    
        const $moon = document.getElementById('icon-moon')
        if($moon)
            $moon.remove()
    
        const day = document.createElement("img")
        day.src = sunIcon
        day.alt = 'Icono de un sol'
        day.id = 'icon-sun'
        $mode.appendChild(day)

        nightMode = true
}
else{
    $title.classList.replace('text-neutral-700','text-white')
    document.body.classList.remove('bg-neutral-700')
    $todo.classList.replace('bg-neutral-700','bg-white')
    $list.classList.replace('bg-neutral-700','bg-white')
    $todoButton.classList.remove('border-white')
    $listButton.classList.remove('border-white')
    $todoText.classList.remove('text-white','placeholder-gray-300')
    $listText.classList.remove('text-white')
    $crossButton.classList.remove('bg-gray-300', 'border','border-neutral-700', 'p-2')

    const dayIcon = document.getElementById('icon-sun')
    if(dayIcon)
        dayIcon.remove()

    const moon = document.createElement("img");
    moon.src = moonIcon;
    moon.alt = 'Icono de luna';
    moon.id = 'icon-moon';
    $mode.appendChild(moon);
    nightMode = false
}
}