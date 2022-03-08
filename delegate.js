// const items = document.getElementsByClassName('hand-list');
// for (const item of items){
//      item.addEventListener('click', function(event){
//          event.target.parentNode.removeChild(event.target);
//      })
// }
document.getElementById('add-btn').addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerHTML = 'New item aded';
    const parent = document.getElementById('delwar-er-container');
    parent.appendChild(li);
})

document.getElementById('delwar-er-container').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})