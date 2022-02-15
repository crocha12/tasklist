class Task {
    id;
    title;
    description;

    constructor(id, title, description) {
        this.id = id;
        this.title  = title;
        this.description = description;
    }
}

let Tasks = [];
let id = 0;

let title = document.getElementById('title')
let description = document.getElementById('description')
let tasklist = document.getElementById('tasklist') 

atualizaLista = () => {
    html = ''
    if(Tasks != []) {
        Tasks.forEach((value, index) => {
            html += `<div class='task'><span>Title:</span> ${value.title} <br> <span>Description:</span> ${value.description} <button onclick="deletar(${value.id})">Remover</button></div>`;
        })
    }
    tasklist.innerHTML = html
}

adicionar = () => {
    if(title.value && description.value) {
        Tasks.push(new Task(id, title.value, description.value))
        id++;
        atualizaLista()
    }else {
        alert('Necessario preencher todos os campos')
    }
}

deletar = (obj) => {
    console.log(obj)
    Tasks = Tasks.filter((value) => {
        if (value.id != obj) {
            return value
        }
    })
    atualizaLista()
}

atualizaLista()
