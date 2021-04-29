window.addEventListener('DOMContentLoaded', event=> {
  const currentPlayerSymbol = 'x';
  const squareValues = ['', '', '', '', '', '', '', '', ''];
  const board = document.getElementById('tic-tac-toe-board');
  board.addEventListener('click', event => {
    const target = event.target.id;
    if(target.includes('square-')) {
      console.log(Number.parseInt(target[target.length - 1]))
    }
  })

  
})