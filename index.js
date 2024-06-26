// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})







// function shiftLeft() {
// const boxes = document.querySelectorAll(".box");
// const tmpNode = boxes[0];
// boxes[0].className = "box move-out-from-left";

// setTimeout(function() {
//     if (boxes.length > 5) {
//         tmpNode.classList.add("box--hide");
//         boxes[5].className = "box move-to-position5-from-left";
//     }
//     boxes[1].className = "box move-to-position1-from-left";
//     boxes[2].className = "box move-to-position2-from-left";
//     boxes[3].className = "box move-to-position3-from-left";
//     boxes[4].className = "box move-to-position4-from-left";
//     boxes[0].remove();

//     document.querySelector(".cards__container").appendChild(tmpNode);

// }, 500);

// }

function shiftRight() {
  const boxes = document.querySelectorAll(".box");
  boxes[4].className = "box move-out-from-right";
  setTimeout(function() {
      const noOfCards = boxes.length;
      if (noOfCards > 4) {
          boxes[4].className = "box box--hide";
      }
  
      const tmpNode = boxes[noOfCards - 1];
      tmpNode.classList.remove("box--hide");
      boxes[noOfCards - 1].remove();
      let parentObj = document.querySelector(".cards__container");
      parentObj.insertBefore(tmpNode, parentObj.firstChild);
      tmpNode.className = "box move-to-position1-from-right";
      boxes[0].className = "box move-to-position2-from-right";
      boxes[1].className = "box move-to-position3-from-right";
      boxes[2].className = "box move-to-position4-from-right";
      boxes[3].className = "box move-to-position5-from-right";
  }, 500);
  
  }