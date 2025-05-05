import './styles/style.css';

import { nanoid } from 'nanoid';

const allToDos = [
  {
    id: nanoid(5),
    task: 'Ir a clase de inglés 🎌',
    isCompleted: false
  },
  {
    id: nanoid(5),
    task: 'Escribir código 💻',
    isCompleted: true
  },
  {
    id: nanoid(5),
    task: 'Jugar una pachanga 🏐',
    isCompleted: false
  }
];

const toDoList = document.querySelector('.toDo-list');


// Imprimir los todos al cargar la página
printToDos();

// Rellenar el número de items que faltan por completar
countItemsLeft();

// Crear To Do
createToDo();


function printToDos () {

  // Recorro cada tarea de la lista de tareas
  for (const toDo of allToDos) {
  
    // Creo un nuevo "article" por cada uno
    const article = document.createElement('article');
  
    // Le pongo las clases que necesita el article
    article.className = 'bg-white py-2 px-4 first:rounded-t flex items-center gap-3  border-b border-b-gray-300';
  
    // Crear una variable para saber si el input estará checked o no
    const isChecked = toDo.isCompleted ? 'checked' : '';
  
    // Crear una variable para saber si el check icon estará visible o no
    const isCheckIconVisible = toDo.isCompleted ? '' : 'hidden';
  
    // Le pongo lo de dentro
    article.innerHTML = `
    <input aria-label="Complete to-do checkbox" id="${toDo.id}" class="hidden peer" type="checkbox" ${isChecked}>
    <label for="${toDo.id}" class="w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-check-gradient">
      <svg class="${isCheckIconVisible} check-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
    </label>
    <span class="peer-checked:line-through peer-checked:opacity-30">${toDo.task}</span>
    <button aria-label="Delete button" type="button" class="ml-auto text-gray-600 cursor-pointer hover:scale-110 hover:rotate-90 transition-transform">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path fill="currentColor" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
      </svg>
    </button>
    `;

    const checkbox = article.querySelector('input')
    checkbox.addEventListener('change', () => {
    toDo.isCompleted = !toDo.isCompleted
    })
    // Lo meto en el DOM dentro de la sección
    toDoList.append(article);  
    countItemsLeft()
}}


function countItemsLeft () {
  const itemsLeftOutput = document.querySelector('.items-left-output');
  
  let itemsLeftCount = 0;
  for (const toDo of allToDos) {
    if (toDo.isCompleted === false) {
      itemsLeftCount++;
    }
  }
  
  itemsLeftOutput.innerText = itemsLeftCount;
}

function createToDo (){
    const $form = document.querySelector('form')
    $form.addEventListener('submit', (event) =>{
        event.preventDefault()
        const newText = $form.querySelector('input')
        const value = newText.value
        const newToDo ={
            id:nanoid(5),
            task: value,
            isCompleted:false
        }
        toDoList.innerHTML = ''
        allToDos.push(newToDo)
        printToDos()
    })
}
    


