import { getReport, alertAboutAuthor } from './utils.js';

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
}
