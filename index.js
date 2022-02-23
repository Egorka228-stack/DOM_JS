window // глобальный объект браузера

window.document // DOM что бы вызвать в консоле consol.dir(window.document), можно писать просто document без window


/* Главное о DOM 
1.все виде object в доме
1.при взаемадействие с object в браузере происходит событие
*/
const tasBtn = document.querySelector('#addTaskBtn')

const taskList = document.querySelector('#task-list')

const [button] = document.getElementsByTagName('button');
button.addEventListener('click', click);

function click(){
const listItemElem = document.createElement('li')
listItemElem.textContent = `task`;
taskList.append(listItemElem)   
}

