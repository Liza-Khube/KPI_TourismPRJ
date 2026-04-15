import { alertAboutAuthor } from './utils.js';

class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  showAuthor() {
    alertAboutAuthor('Khubedzheva', 'Elizabeth');
  }

  reportError() {
    let problem = prompt('Write about a problem here:');
    if (problem) alert(`Thank you! Your report ("${problem}") will be reviewed.`);
  }

  changeTheme() {
    document.body.style.background = document.body.style.background ? '' : '#f9f8f3';
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  }
}

new Menu(document.getElementById('footer-menu'));

icon.addEventListener('click', {
  handleEvent(event) {
    alert(
      'This photo shows a view of the Grand Canal in Venice, Italy, with the Basilica of Santa Maria della Salute in the background.',
    );
    console.log('Clicked element: ', event.currentTarget);
  },
});

const travelCounter = document.getElementById('travel-counter-link');
travelCounter.addEventListener('click', () => {
  const countries = [];
  let flagStop = false;
  let count = 0;
  while (!flagStop) {
    const country = prompt(
      `🌍 Travel Counter\n\n✏️ Country ${count + 1}:\nEnter the name of the country:\n(if you are done write "stop")`,
    );
    if (country === null) {
      return;
    } else if (country === 'stop') {
      flagStop = true;
    } else {
      count++;
      countries.push(country.trim());
    }
  }
  let list = '';
  let num = 1;
  for (const country of countries) {
    list += `  ${num}. ${country}\n`;
    num++;
  }
  let rank = '';

  if (count <= 2) {
    rank = '🌱 «Beginner»\nThe journey is just beginning — the whole world lies ahead!';
  } else if (count <= 5) {
    rank = '🥉 «The Traveler»\nWe have got the experience! It is time to explore new horizons!';
  } else if (count <= 15) {
    rank = '🥈 Explorer\nYou know what the world looks like from different perspectives!';
  } else if (count <= 30) {
    rank = '🥇 «Adventurer»\nThe world is your home. You are a true traveler!';
  } else {
    rank = '🏆 «Citizen of the World»\nWe envy you and admire you. You are a legend!';
  }

  alert(
    `🗺️ YOUR TRAVEL STATISTICS\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `📊 Countries visited: ${count}\n\n` +
      `${list}\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `${rank}`,
  );
});
