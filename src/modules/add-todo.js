function createCard(task, deadline){
    const card=document.createElement('div')
    card.setAttribute('class', 'card')

    card.innerHTML=`
    <input type="checkbox" name="done" id="check">
    <p>${task}</p>
    <p>${deadline}</p>
    <button id="remove-task-btn">X</button>
    `

    return card
}

function createPanel(){
    const addTodoPanel= document.createElement('div')
    addTodoPanel.setAttribute('id','addTodoPanel')

    addTodoPanel.innerHTML=`
    <form action="#">

    <label for="task-content">Task: </label>
    <input id="task-content" type="text">

    <label for="task-date">Date: </label>
    <input type="date" name="" id="task-content">

    <label for="Project-selector">Choose a project:</label>
    <select name="project-name" id="project-selector">
        <option value="project-1">Project-1</option>
        <option value="project-2">Project-2</option>
        <option value="project-3">Project-3</option>
    </select>
    <button id="add-todo" onclick="${createCard("aaaaa","sssss")}">Add todo</button>
    </form>
    `
    return addTodoPanel
}



export default createPanel