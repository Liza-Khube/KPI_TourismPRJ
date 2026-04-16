import { getReport, alertAboutAuthor, dragAndDrop } from './utils.js';

author.addEventListener('click', () => {
  alertAboutAuthor('Khubedzheva', 'Elizabeth');
});
report.onclick = getReport;

const sections = document.getElementById('sections');
const allHeaders = Array.from(document.querySelectorAll('h2')).slice(1);
if (allHeaders.length == 0) {
  sections.innerHTML = '<p>No sections yet</p>';
} else {
  allHeaders.forEach((header) => {
    let headerText = header.outerText;
    let headerName = header.children[0].name;
    sections.innerHTML += `<li><a href="#${headerName}">${headerText}</a></li>`;
  });
}

const mythCountriesRiversA = document.querySelector('#myth-reality > dd:last-child');
mythCountriesRiversA.textContent =
  'It`s true. Countries like Saudi Arabia, Qatar, and Vatican City — among others — have no permanent rivers at all.';

const mythReality = document.getElementById('myth-reality');
{
  let selectedElem;
  mythReality.onclick = (event) => {
    const targetElem = event.target;
    if (targetElem.tagName == 'B' && targetElem !== selectedElem) {
      if (selectedElem) selectedElem.style.color = '';
      targetElem.style.color = '#c1aa7f';
      selectedElem = targetElem;
    } else if (targetElem.tagName == 'B' && targetElem == selectedElem) {
      targetElem.style.color = '';
      selectedElem = null;
    }
  };
  mythReality.onmousedown = (event) => {
    if (event.target.tagName == 'B') return false;
  };
}

sections.addEventListener('mouseover', (event) => {
  const target = event.target.closest('li');
  if (!target) return;
  const relatedTarget = event.relatedTarget;
  if (target.contains(relatedTarget)) return;

  target.style.backgroundColor = 'rgba(193, 170, 127, 0.15)';
  target.style.transform = 'translateX(10px)';
  target.style.borderLeft = '4px solid #647e5e';
  target.style.transition = 'all 0.3s ease';
});

sections.addEventListener('mouseout', (event) => {
  const target = event.target.closest('li');
  if (!target) return;
  const relatedTarget = event.relatedTarget;
  if (target.contains(relatedTarget)) return;

  target.style.backgroundColor = '';
  target.style.transform = '';
  target.style.borderLeft = '';
});

document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('puzzle-piece')) {
    dragAndDrop(event, 'IMG');
  }
});
