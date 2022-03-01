//create 16x16 grid of square divs inside the .container div
function createGrid() {
  let squares = 16;
  let squaresSquared = squares**2;
  const container = document.querySelector('.container');
  for (let i = 0; i < squaresSquared; i++) {
    container.appendChild(document.createElement('div'));
  }
}

createGrid();