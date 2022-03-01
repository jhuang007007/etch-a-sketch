//get number of squares for each side from user


//create 16x16 grid of square divs inside the .container div
function createGrid() {
  let squares = 16;
  let squaresSquared = squares**2;
  const container = document.querySelector('.container');
  for (let i = 0; i < squaresSquared; i++) {
    container.appendChild(document.createElement('div'));
  }
}

//allows user to draw on in the grid of divs
function draw() {
  const divs = document.querySelectorAll(".container > div");
  divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.setAttribute('style', 'background-color:black')
    });
  });
}

//clear grid when button
function clearGrid () {
  const clear = document.querySelector("#clear");
  const divs = document.querySelectorAll(".container > div");
  clear.addEventListener('click', () => {
    divs.forEach((div) => {
      div.setAttribute('style', 'background-color: white');
    });
  })
}

//call functions
createGrid();
draw();
clearGrid(); 