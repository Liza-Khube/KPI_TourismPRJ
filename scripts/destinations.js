import { getReport, alertAboutAuthor } from './utils.js';

author.addEventListener('click', function () {
  alertAboutAuthor('Khubedzheva', 'Elizabeth');
});
report.onclick = getReport;

const onHoverHeader = (event) => {
  const elem = event.currentTarget;
  elem.style.color = '#c1aa7f';
};

const onLeaveHeader = (event) => {
  const elem = event.currentTarget;
  elem.style.color = '';
};

const mapHeader = document.getElementById('map-name');
mapHeader.onmouseover = onHoverHeader;
mapHeader.onmouseout = onLeaveHeader;

window.onHoverHeader = onHoverHeader;
window.onLeaveHeader = onLeaveHeader;

const locationPicker = document.getElementById('location-picker-link');
locationPicker.addEventListener('click', () => {
  const firstLocation = prompt('Write your first location:', 'Kyiv');
  const secondLocation = prompt('Write your second location:', 'Kyiv');
  console.log(firstLocation, secondLocation);
  if (firstLocation === null || secondLocation === null) {
  } else if (firstLocation.trim() === '' || secondLocation.trim() === '') {
  } else {
    const result = firstLocation.length > secondLocation.length ? firstLocation : secondLocation;
    alert(`You should choose:\n ${result}`);
  }
});

document.querySelectorAll('.more-inf').forEach((link) => {
  link.addEventListener('click', function (event) {
    if (confirm('Go to the site?')) {
      location.href = `https://www.britannica.com/place/${link.getAttribute('name')}`;
    }
  });
});

const changeBgColor = () => {
  document.body.style.background = '#f9f8f3';
  setTimeout(() => (document.body.style.background = ''), 30000);
};

const changeTextColor = (elem) => {
  elem.style.color = '#393732';
};

const findTravelersElem = document.getElementById('find-travelers-link');
findTravelersElem.addEventListener('click', () => {
  changeBgColor();
});
findTravelersElem.addEventListener('click', () => {
  changeTextColor(findTravelersElem);
});
findTravelersElem.removeEventListener('click', () => {
  changeTextColor(findTravelersElem);
});

document.addEventListener('click', (event) => {
  const action = event.target.dataset.action;
  if (action !== 'prev' && action !== 'next') return;
  const card = event.target.closest('.img-card');
  const imgElem = card.querySelector('img');
  const linkElem = imgElem.closest('a');

  const controlsElem = card.querySelector('.controls');
  const imgsArr = controlsElem.dataset.imgs.split(',');
  let currentIndex = Number(imgElem.dataset.index);
  const totalImgs = imgsArr.length;

  if (action == 'next') {
    currentIndex = (currentIndex + 1) % totalImgs;
  } else if (action == 'prev') {
    currentIndex = (currentIndex - 1 + totalImgs) % totalImgs;
  }

  const newImgSrc = imgsArr[currentIndex];
  imgElem.src = newImgSrc;
  imgElem.dataset.index = currentIndex;

  if (linkElem) {
    linkElem.href = newImgSrc;
  }
});
