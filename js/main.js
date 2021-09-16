let youtube = {
  title: '반응형으로 만든 유튜브 UI',
  img: ['youtube1.png', 'youtube2.png'],
};
let tetris = { title: '테트리스 게임 UI', img: ['tetris.png'] };
let nike = {
  title: '반응형으로 만든 나이키 웹페이지 UI',
  img: ['nike.png', 'nike2.png'],
};

let hackernews = {
  title: '해커뉴스 API로 만든 댓글 리스트',
  img: ['hackernews1.png', 'hackernews2.png', 'hackernews3.png'],
};

let memo = {
  title: '자바스크립트로 만든 메모앱',
  img: ['memo1.png', 'memo2.png', 'memo3.png'],
};

let flower = {
  title: ' 반응형 플라워레터 : 편지쓰고 이메일로 전송하기',
  img: ['flower.png'],
};

let carrot = {
  title: '당근뽑기 게임',
  img: ['carrot.png', 'carrot2.png', 'carrot3.png'],
};

let shopingList = {
  title: '쇼핑리스트앱',
  img: ['shopinglist.png', 'shopinglist2.png'],
};

let groom = {
  title: '전자제품 쇼핑몰 : 구름전자',
  img: ['groom1.png', 'groom2.png', 'groom3.png', 'groom4.png', 'groom5.png'],
};

let oi = {
  title: '리액트로 만든 중고거래플렛폼 오이마켓',
  img: ['oi.png', 'oi2.png', 'oi3.png'],
};
let check = { title: '습관체크리스트', img: ['check.png', 'check2.png'] };
let tommorrow = {
  title: 'Sass로 오늘의집 클론코딩: 내일의 집',
  img: ['tommorrow.png', 'tommorrow2.png', 'tommorrow3.png'],
};

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

projectContents.innerHTML = thumbnail
  .map((item) => displayImg(item.title, item.img))
  .join('');

const projectDetail = document.querySelector('.project-detail-cover');
const closeBtn = document.querySelector('.close-btn');
const imgCover = document.querySelector('.img-cover');
const projectDetailImg = document.querySelector('.project-img');
const projectDetailTitle = document.querySelector('.project-title');

window.addEventListener('click', (e) => {
  if (e.target.style.display == 'flex') {
    projectDetail.style.display = 'none';
  }
});

projectContents.addEventListener('click', (e) => {
  let list = e.target;
  if (e.target.tagName == 'DIV' || list.tagName == 'LI') {
    projectDetail.style.display = 'flex';
    projectDetailImg.style.backgroundImage = list.style.backgroundImage;
    projectDetailTitle.innerHTML = list.firstElementChild.innerHTML;
    let imgListString = list.lastElementChild.innerHTML;
    let imgList = imgListString.split(',');
    imgList.map((img) => {
      let span = document.createElement('span');
      span.setAttribute('class', 'project-img');
      imgCover.appendChild(span);
      span.style.backgroundImage = `url(./images/${img})`;
      imgCover.removeChild(span.firstChild);
    });
  }
});

closeBtn.addEventListener('click', () => {
  projectDetail.style.display = 'none';
});

function displayImg(title, img) {
  return `
  <li>
    <div class="project-content-img" style="background-image: url(./images/${img[0]});"> 
      <span class="hidden">${title}</span>
      <span class="hidden">${img}</span>
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

function displayPercent() {
  html2.forEach((li) => onGageColor(li));
  css2.forEach((li) => onGageColor(li));
  js2.forEach((li) => onGageColor(li));
  jquery2.forEach((li) => onGageColor(li));
  react2.forEach((li) => onGageColor(li));
  sass2.forEach((li) => onGageColor(li));
  vue2.forEach((li) => onGageColor(li));
}

const nav = document.querySelector('.nav');
window.addEventListener('scroll', (e) => {
  let userScrollTop = this.scrollY;
  if (userScrollTop > 1000) {
    displayNumbering();
    displayPercent();
    navColorChange('#009cff');
  } else {
    navColorChange('#fff');
  }
});

function navColorChange(color) {
  nav.style.color = color;
}

const aboutSection = document.querySelector('.about-me');
const skillSection = document.querySelector('.skill');
const projectSection = document.querySelector('.project');
const cunnectSection = document.querySelector('.cunnect');

nav.addEventListener('click', (e) => {
  const menu = e.target.className;

  switch (menu) {
    case 'nav-about':
      aboutSection.scrollIntoView();
      break;
    case 'nav-skill':
      skillSection.scrollIntoView();
      break;
    case 'nav-project':
      projectSection.scrollIntoView();
      break;
    case 'nav-cunnect':
      cunnectSection.scrollIntoView();
      break;
  }
});
