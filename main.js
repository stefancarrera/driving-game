var $picked = document.querySelector('#picked');
var $rocket1 = document.querySelector('#rocket1');
var $rocket3 = document.querySelector('#rocket3');
var left = 0;
var up = 0;
var spaceTapped = 0;
var intervalId = setInterval(drive, 16);
clear();

function drive() {
  if ($picked.className === 'right') {
    left += 5;
    $picked.style.left = left + 'px';
  }

  if ($picked.className === 'left') {
    left -= 5;
    $picked.style.left = left + 'px';
  }

  if ($picked.className === 'up') {
    up -= 5;
    $picked.style.top = up + 'px';
  }

  if ($picked.className === 'down') {
    up += 5;
    $picked.style.top = up + 'px';
  }
}

function clear() {
  clearInterval(intervalId);
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    $picked.className = 'right';
    clear();
  }

  if (event.key === 'ArrowLeft') {
    $picked.className = 'left';
    clear();
  }

  if (event.key === 'ArrowUp') {
    $picked.className = 'up';
    clear();
  }

  if (event.key === 'ArrowDown') {
    $picked.className = 'down';
    clear();
  }

  if (event.key === ' ') {
    spaceTapped++;
  } if (spaceTapped % 2 === 1) {
    intervalId = setInterval(drive, 16);
  } if (spaceTapped % 2 === 0) {
    clear();
  }
});

var changeShipBtn = document.querySelector('.changeShip');
var changeSkyBtn = document.querySelector('.changeSky');
var overlay = document.querySelector('.overlay');
var shipSelect = document.querySelector('.shipSelect');
var skySelect = document.querySelector('.skySelect');
var galaxy1 = document.querySelector('.galaxy1');
var galaxy2 = document.querySelector('.galaxy2');
var $gameWindow = document.querySelector('.gameWindow');

window.addEventListener('click', function (event) {
  if (event.target === changeShipBtn) {
    overlay.className = 'overlay';
    shipSelect.className = 'shipSelect';
  } else if (event.target === changeSkyBtn) {
    overlay.className = 'overlay';
    skySelect.className = 'skySelect';
  }

});

shipSelect.addEventListener('click', function (event) {
  if (event.target === $rocket1) {
    $picked.setAttribute('src', 'images/rocket1.png');
  }
  if (event.target === $rocket3) {
    $picked.setAttribute('src', 'images/rocket3.png');
  }

  overlay.className = 'overlay hidden';
  shipSelect.className = 'shipSelect hidden';
});

skySelect.addEventListener('click', function (event) {
  if (event.target === galaxy1) {
    $gameWindow.style.backgroundImage = "url('images/space.jpg')";
  }

  if (event.target === galaxy2) {
    $gameWindow.style.backgroundImage = "url('images/space2.jpg')";
  }

  overlay.className = 'overlay hidden';
  skySelect.className = 'skySelect hidden';
});
