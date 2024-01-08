document.addEventListener("DOMContentLoaded", () => {
const createForm = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');

createForm.addEventListener('submit', function (event){
  event.preventDefault();

  const description=document.querySelector('#new-task-description').value;
  const priority=document.querySelector('#priority').value;
  const user=document.querySelector('#theUser').value;
  const taskDuration =document.querySelector('#taskTime').value;
  const dueDate =document.querySelector('#dueDate').value;
 
  const taskTable =document. querySelector('tr');
  taskTable.innerHTML=`
    <td>${description}</td>
    <td>${priority}</td>
    <td>${user}</td>
    <td>${taskDuration}</td>
    <td>${dueDate}</td>
    <td><button="deleteTask">Delete</button></td>
  `;
  taskList.appendChild(taskTable);
  document.querySelector('#tasks');
  // createForm.reset();
})
});

//declare a function for deleting a task
function deleteATask(button){
  const tasksTable=button.parentNode.parentNode;
  tasksTable.remove();
}