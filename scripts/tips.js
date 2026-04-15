import { getReport, alertAboutAuthor } from './utils.js';

author.addEventListener('click', () => {
  alertAboutAuthor('Khubedzheva', 'Elizabeth');
});
report.onclick = getReport;

const addElems = () => {
  const footerNode = document.querySelector('footer');

  const newTipHeader = document.createElement('h2');
  const headerText = document.createTextNode('Quote of the day');
  newTipHeader.prepend('🔅');
  newTipHeader.dataset.toggleId = 'daily-quote';
  newTipHeader.style.cursor = 'pointer';
  newTipHeader.title = 'Click to show/hide the quote';

  const newTipParagraph = document.createElement('p');
  newTipParagraph.id = 'daily-quote';
  newTipParagraph.hidden = true;

  const paragraphText = document.createTextNode(
    '"The journey of a thousand miles begins with a single step." ― Lao Tzu',
  );

  newTipHeader.append(headerText);
  newTipParagraph.append(paragraphText);

  footerNode.before(newTipHeader);
  footerNode.before(newTipParagraph);

  const hrLine = document.createElement('hr');
  newTipParagraph.after(hrLine);

  const headers = document.querySelector('.container').querySelectorAll('h2');
  headers.forEach((header) => {
    if (header.textContent.includes('Live every moment')) {
      const updatedHeader = document.createElement('h2');
      updatedHeader.textContent = 'Enjoy the moment';
      header.replaceWith(updatedHeader);
    }
  });
};
addElems();

document.addEventListener('click', (event) => {
  const id = event.target.dataset.toggleId;
  console.log(id);
  if (!id) return;
  const elem = document.getElementById(id);
  elem.hidden = !elem.hidden;
});
