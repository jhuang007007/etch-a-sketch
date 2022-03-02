//get number of squares for each side from user
function getSquares() {
  let i = 16
  i = prompt('Squares per side (1-100): ', 16);
  while (i > 100 || i < 1) {
    i = prompt('Squares per side (1-100): ', 16);
  }
  document.querySelector('.container').style.gridTemplateColumns=`repeat(${i}, 1fr)`;
  return i;
}

//create 16x16 grid of square divs inside the .container div
function createGrid() {
  let squares = getSquares();
  let squaresSquared = squares**2;
  const container = document.querySelector('.container');
  //removes old divs in container if they exist
  if (container.contains(document.querySelector('.container > div'))) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
  for (let i = 0; i < squaresSquared; i++) {
    container.appendChild(document.createElement('div'));
  }
}

//allows user to draw on in the grid of divs
function draw() {
  const divs = document.querySelectorAll(".container > div");
  divs.forEach((div) => {
    let i = 90;
    div.addEventListener('mouseover', () => {
      div.setAttribute('style', `background-color: hsl(0, 0%, ${i}%)`);
      i -= 10;  
    });
    
  });
  
}

//clear grid when button is clicked, prompts new squares per side for next grid
function clearGrid () {
  const clear = document.querySelector("#clear");
  const divs = document.querySelectorAll(".container > div");
  clear.addEventListener('click', () => {
    divs.forEach((div) => {
      div.setAttribute('style', 'background-color: white');     
    });
    createGrid();
    draw();
  });
}

//call functions
createGrid();
draw();
clearGrid(); 