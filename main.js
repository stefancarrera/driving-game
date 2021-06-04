var $ship = document.querySelector('.fa-space-shuttle');
var left = 0;
var spaceTapped = 0;
var intervalId = setInterval(drive, 16);
clear(intervalId);

function drive() {
  if ($ship.className === 'fas fa-space-shuttle right') {
    left += 10;
    $ship.style.left = left + 'px';
  }
}

function clear() {
  clearInterval(intervalId);
}

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
    spaceTapped++;
  } if (spaceTapped % 2 === 1) {
    intervalId = setInterval(drive, 16);
  } else {
    clear(intervalId);
  }
});
