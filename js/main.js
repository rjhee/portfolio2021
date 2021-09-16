let youtube = ['youtube1.png', 'youtube2.png'];
let tetris = ['tetris.png'];
let nike = ['nike.png', 'nike2.png'];

let hackernews = ['hackernews1.png', 'hackernews2.png', 'hackernews3.png'];
let memo = ['memo1.png', 'memo2.png', 'memo3.png'];
let flower = ['flower.png'];
let carrot = ['carrot.png', 'carrot2.png', 'carrot3.png'];
let shopingList = ['shopinglist.png', 'shopinglist2.png'];

let groom = [
  'groom1.png',
  'groom2.png',
  'groom3.png',
  'groom4.png',
  'groom5.png',
];

let oi = ['oi.png', 'oi2.png', 'oi3.png'];
let check = ['check.png', 'check2.png'];
let tommorrow = ['tommorrow.png', 'tommorrow2.png', 'tommorrow3.png'];

let htmlCss = [youtube, tetris, nike];
let javascript = [hackernews, memo, flower, carrot, shopingList];
let jquery = [groom];
let react = [oi, check, tommorrow];

let thumbnail = [
  youtube,
  tetris,
  nike,
  hackernews,
  memo,
  flower,
  carrot,
  shopingList,
  groom,
  oi,
  check,
  tommorrow,
];

const projectContents = document.querySelector('.project-contents');
projectContents.innerHTML = thumbnail.map((item) => display(item[0])).join('');
const projectDetail = document.querySelector('.project-detail-cover');
const closeBtn = document.querySelector('.close-btn');
const projectDetailImg = document.querySelector('.project-img');

window.addEventListener('click', (e) => {
  if (e.target.style.display == 'flex') {
    projectDetail.style.display = 'none';
  }
});

projectContents.addEventListener('click', (e) => {
  if (e.target.tagName == 'DIV' || e.target.tagName == 'LI') {
    projectDetail.style.display = 'flex';
    projectDetailImg.style.backgroundImage = e.target.style.backgroundImage;
  }
});

closeBtn.addEventListener('click', () => {
  projectDetail.style.display = 'none';
});

function display(item) {
  return `
  <li>
  <div class="project-content-img" style="background-image: url(../images/${item});">
  </div>
  </li>
  `;
}

const percentNum = document.querySelectorAll('.percent-num');

let number = -1;
function displayNumbering() {
  number++;
  for (let i = 0; i < percentNum.length; i++) {
    let item = percentNum.item(i);
    switch (item.id) {
      case 'html':
        if (number <= 90) {
          item.innerHTML = `${number}%`;
          // .style.backgroundColor = '#009cff';
        }
        break;
      case 'css':
        if (number <= 90) {
          item.innerHTML = `${number}%`;
        }
        break;
      case 'js':
        if (number <= 89) {
          item.innerHTML = `${number}%`;
        }
        break;
      case 'jquery':
        if (number <= 85) {
          item.innerHTML = `${number}%`;
        }
        break;

      case 'react':
        if (number <= 80) {
          item.innerHTML = `${number}%`;
        }
        break;
      case 'sass':
        if (number <= 80) {
          item.innerHTML = `${number}%`;
        }
        break;
      case 'vue':
        if (number <= 75) {
          item.innerHTML = `${number}%`;
        }
        break;
    }
  }
}

const html2 = document.querySelectorAll('#html2 li');
const css2 = document.querySelectorAll('#css2 li');
const js2 = document.querySelectorAll('#js2 li');
const jquery2 = document.querySelectorAll('#jquery2 li');
const react2 = document.querySelectorAll('#react2 li');
const sass2 = document.querySelectorAll('#sass2 li');
const vue2 = document.querySelectorAll('#vue2 li');

function onGageColor(li) {
  if (li.className == 'on') {
    li.style.backgroundColor = '#0061a8';
  }
}

window.addEventListener('scroll', (e) => {
  let userScrollTop = this.scrollY;
  if (userScrollTop > 800) {
    displayNumbering();
    html2.forEach((li) => onGageColor(li));
    css2.forEach((li) => onGageColor(li));
    js2.forEach((li) => onGageColor(li));
    jquery2.forEach((li) => onGageColor(li));
    react2.forEach((li) => onGageColor(li));
    sass2.forEach((li) => onGageColor(li));
    vue2.forEach((li) => onGageColor(li));
  }
});
