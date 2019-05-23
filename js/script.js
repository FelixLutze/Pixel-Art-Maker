let height = document.querySelector('#inputHeight');
let width = document.querySelector('#inputWidth');
let color = document.querySelector('#colorPicker');

const form = document.querySelector('#sizePicker');
const table = document.querySelector('table');

//the makeGrid function is creating the grid
function makeGrid(height, width) {
  const childElements = table.childElementCount;
  
  //removing the exsiting grid (if true)
  if(childElements > 0) {
    for(let i = 0; i < childElements; i++) {
      table.firstElementChild.remove();
    }
  }
  
  //creates each table row
  for(let i = 0; i < height; i++) {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    
    //creates each table data in the current row
    for(let i = 0; i < width; i++) {
      const td = document.createElement('td');
      tr.appendChild(td);
      td.addEventListener('mousedown', function() {
        this.style.backgroundColor = color.value;
      });
    }
  }
}

//adding the event listener and calling the makeGrid function
form.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid(height.value, width.value);
})
