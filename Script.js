const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');
console.log(empties);

// LISTENING FOR EVENTS
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Since we have a NodeList we can loop through them
// Need to set separate functions for each Event.
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}


// When holding / dragging pics, border around pic will appear. 
// With no setTimeOut, pic will not disappear when held and drag ????? WHY 
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (
        this.className = 'invisible'
    ), 0);
}


// If let gom, pic will go back to it's original position
function dragEnd () {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    console.log('Over');
}


// When we Append elements still have empty now it has hovered too
function dragEnter(e) {
    e.preventDefault();
    console.log('Enter');
    this.className += ' hovered';
}

// When we leave empty class takes over
function dragLeave() {
    this.className = 'empty';
    console.log('Leave');
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill)
    console.log('Drop');
}
