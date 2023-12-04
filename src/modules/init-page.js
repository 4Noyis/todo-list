
import createPanel from "./add-todo"

function createButton(id, text){
    const button= document.createElement('button')
    button.setAttribute('id',id)
    button.innerText=text
    return button

}

function createCard(){
    const card=document.createElement('div')
    card.setAttribute('class', 'card')

    card.innerHTML=`
    <input type="checkbox" name="done" id="check">
    <p>Task...Lorem ipsum dolor sit amet.</p>
    <p>Deadline</p>
    <button id="remove-task-btn">X</button>
    `

    return card

}

function createHeader(id){
    const header = document.createElement('div')
    header.setAttribute('id', id)  
    
    header.innerHTML=`
        <h1>Todo List</h1>
    `
    return header
}

function createAside(id){
    const aside= document.createElement('div')
    aside.setAttribute('id',id)
    const createProject = document.createElement('div')
    createProject.setAttribute('id', 'create-prj')
    
    createProject.innerHTML=`
    <form action="#">
        <input id="create-project" type="text" placeholder="Project Name" />
        <button id='btn-createProject'>Create Project</button>
    </form>
    `

    const createProjects=document.createElement('div')
    createProjects.setAttribute('id','projects')
    
    createProjects.innerHTML=`
    <div>
        <button class="project" id="project-1">project-1</button>
    </div>
    <div>
        <button class="project" id="project-2">project-2</button>
    </div>
    <div>
        <button class="project" id="proejct-3">project-3</button>
    </div>
    `

    aside.appendChild(createProject)
    aside.appendChild(createProjects)
    return aside
}

function createMain(id){
    const main = document.createElement('div')
    main.setAttribute('id',id)

    let todopanel = createPanel();

    const cards=document.createElement('div')
    cards.setAttribute('id','cards')

    const card = createCard()
    cards.appendChild(card)


    main.appendChild(todopanel)
    main.appendChild(cards)

    return main
}

function createFooter(id){
    const footer=document.createElement('div')
    footer.setAttribute('id',id)

    footer.innerHTML=`
        <p>copyright © 4Noyis</p>
    `
    return footer
}


function loadPage(){
    const container= document.getElementById('container')

    const header = createHeader('header')
    container.appendChild(header)

    const aside=createAside('aside')
    container.appendChild(aside)

    const main = createMain('main')
    container.appendChild(main)

    const footer = createFooter('footer')
    container.appendChild(footer)
}

export default loadPage