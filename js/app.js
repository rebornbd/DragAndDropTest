const boxContainer = document.getElementById('box-container');
const columns = document.querySelectorAll('.column');
const boxes = document.querySelectorAll('.box');


// Load the script & set draggable is true
window.addEventListener('load', () => {
  boxes.forEach(box => {
    box.setAttribute('draggable', true);
  })
});


// dragstart & dragend addEventListener
boxContainer.addEventListener('dragstart', (e) => {
  const target = e.target;
  target.id = 'dragging';
})

boxContainer.addEventListener('dragend', (e) => {
  const target = e.target;
  target.removeAttribute('id')
})


// dragover columns addEventListener
columns.forEach((column) => {
  column.addEventListener('dragover', (e) => {
    const currDraggableBox = document.getElementById('dragging');
    const currColumn = column.children;

    let isBoxAdding = true;
    for (const box of currColumn) {
      if (box.classList[1] === currDraggableBox.classList[1]) {
        isBoxAdding = false;
        break;
      }
    }
    
    if (isBoxAdding) {
      e.preventDefault();
      column.appendChild(currDraggableBox);
    }
  })
});
