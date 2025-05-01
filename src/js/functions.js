import sunIcon from '../assets/img/icon-sun.svg'
import moonIcon from '../assets/img/icon-moon.svg'
import crossIcon from '../assets/img/icon-cross.svg'


// Form
const $mode = document.getElementById('mode-button')
const $title = document.getElementById('title')
const $todo = document.getElementById('todo-form')
const $todoButton = document.getElementById('todo-button')
const $todoText = document.getElementById('todo-text')
const $todoForm = document.getElementById('todo-form')



let nightMode = false
export function ToggleNightMode(){
    const $list = document.querySelectorAll('.list')
    const $listButton = document.querySelectorAll('.list-button')
    const $listText = document.querySelectorAll('.list-text')
    const $crossButton = document.querySelectorAll('.cross-button')

    if(!nightMode){
        $title.classList.replace('text-white','text-neutral-700')
        document.body.classList.add('bg-neutral-700')
        $todo.classList.replace('bg-white','bg-neutral-700')
        $todoButton.classList.add('border-white')
        $todoText.classList.add('text-white', 'placeholder-gray-300')
        
        for(let i = 0; i < $list.length; i++){
            $list[i].classList.replace('bg-white','bg-neutral-700')
            $listButton[i].classList.add('border-white')
            $listText[i].classList.add('text-white')
            $crossButton[i].classList.add('bg-gray-300', 'border','border-neurtal-700', 'p-2')
        }
    
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
    $todoButton.classList.remove('border-white')
    $todoText.classList.remove('text-white','placeholder-gray-300')

    for(let i = 0; i < $list.length; i++){
        $list[i].classList.replace('bg-neutral-700','bg-white')
        $listButton[i].classList.remove('border-white')
        $listText[i].classList.remove('text-white')
        $crossButton[i].classList.remove('bg-gray-300', 'border','border-neutral-700', 'p-2')
    }

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

export function CreateToDo(){
    event.preventDefault()
    
    const existingAlert = document.querySelector('.text-red-500')
    
    if ($todoText.value.trim() === '') {
        if (!existingAlert) {
            const alertmsg = document.createElement('p')
            alertmsg.innerText = 'No puedes añadir una tarea sin texto'
            alertmsg.classList.add('text-red-500', 'absolute','left-96', 'border-2')
            $todoForm.insertAdjacentElement('afterend', alertmsg)
        }
        return
    }
    
    if (existingAlert) {
        existingAlert.remove()
    }
    
    const section = document.createElement('section')
    section.innerHTML = `
    <div class="flex justify-center gap-4">
    <button class="list-button rounded-full border w-7 h-7" type="button"></button>
    <p class="list-text leading-8">${$todoText.value}</p>
    </div>
    <button class="cross-button">
    <img class="icon-cross" src="${crossIcon}" alt="Icono de una cruz">
    </button>
    `
    
    section.className = 'list relative z-20 flex justify-between gap-4 m-auto -mt-2 bg-white w-lg p-4 rounded shadow-xl'
    document.body.append(section)
    
    $todoText.value = ''
    
    if (nightMode) {
        section.classList.replace('bg-white', 'bg-neutral-700')
        section.querySelector('.list-button').classList.add('border-white')
        section.querySelector('.list-text').classList.add('text-white')
        section.querySelector('.cross-button').classList.add('bg-gray-300', 'border', 'border-neutral-700', 'p-2')
    }
}

