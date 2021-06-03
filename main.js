var $ship = document.querySelector('.fa-space-shuttle');

window.addEventListener('keydown', function (event) {

  if (event.key === 'ArrowRight') {
    $ship.className = 'fas fa-space-shuttle right';
  } else if (event.key === 'ArrowLeft') {
    $ship.className = 'fas fa-space-shuttle left';
  } else if (event.key === 'ArrowUp') {
    $ship.className = 'fas fa-space-shuttle up';
  } else if (event.key === 'ArrowDown') {
    $ship.className = 'fas fa-space-shuttle down';
  }

  if (event.key === ' ') {
    $ship.animate([{
      direction: 'normal'
    }]);
  }
});
