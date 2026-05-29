const card1 = document.querySelector('.my-card-1');

card1.addEventListener('click', () => {
  card1.classList.toggle('rotated');
});


// --------------------------------------
const card2 = document.querySelector('.my-card-2');

card2.addEventListener('click', () => {
  card2.classList.toggle('rotated');
});

// -----------------------------------------
const card3 = document.querySelector('.my-card-3');

card3.addEventListener('click', () => {
  card3.classList.toggle('rotated');
});

// =-------------------------------------
const card4 = document.querySelector('.my-card-4');

card4.addEventListener('click', () => {
  card4.classList.toggle('rotated');
});

// =-------------------------------------
const card5 = document.querySelector('.my-card-5');

card5.addEventListener('click', () => {
  card5.classList.toggle('rotated');
});

// =-------------------------------------
const card6 = document.querySelector('.my-card-6');

card6.addEventListener('click', () => {
  card6.classList.toggle('rotated');
});

// =-------------------------------------
const card7 = document.querySelector('.my-card-7');

card7.addEventListener('click', () => {
  card7.classList.toggle('rotated');
});

// =-------------------------------------
const card8 = document.querySelector('.my-card-8');

card8.addEventListener('click', () => {
  card8.classList.toggle('rotated');
});

// =-------------------------------------
const card9 = document.querySelector('.my-card-9');

card9.addEventListener('click', () => {
  card9.classList.toggle('rotated');
});



// Uncomment the rest of the JS to enable click and drag to rotate.
// It is pretty buggy so I left it disabled to leave focus on the 3D CSS animation.

/*

// isDown is a flag to check if the mouse is down whe running a function
// startX will represent where the mouse was on the card when the drag started
let isDown = false; 
let startX;

// set isDown to true, set value of for where the mouse started
function startRotation(e) {
  isDown = true;
  startX = e.pageX - this.offsetLeft;
}

// function to stop the rotation
function stopRotation(e) {
  isDown = false;
}

function dragRotate(e) {
  if(!isDown) return; // if mouse is not down, exit function 
  e.preventDefault();
  
  // get value for how much the mouse has moved 
  // dividing by two here just to slow it down a bit
  const movement = (e.pageX - this.offsetLeft - startX) / 2;
  
  // set rotation value using template literal
  this.style.transform = `rotateY(${movement}deg)`;
}

// event listeners 
card.addEventListener('click', clickRotate);
card.addEventListener('mousedown', startRotation);
card.addEventListener('mouseleave', stopRotation);
card.addEventListener('mouseup', stopRotation);
card.addEventListener('mousemove', dragRotate);

*/