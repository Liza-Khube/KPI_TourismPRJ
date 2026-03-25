const alertAboutAuthor = (lastName, firstName, position = 'KPI`s student') => {
  alert(`Author: ${firstName} ${lastName}\nPosition: ${position}`);
};

const clickOnAuthor = document.getElementById('author');
if (clickOnAuthor) {
  clickOnAuthor.addEventListener('click', function () {
    alertAboutAuthor('Khubedzheva', 'Elizabeth');
  });
}

const alertLongerName = () => {
  const firstLocation = prompt('Write your first location:', 'Kyiv');
  const secondLocation = prompt('Write your second location:', 'Kyiv');
  console.log(firstLocation, secondLocation);
  if (firstLocation === null || secondLocation === null) {
  } else if (firstLocation.trim() === '' || secondLocation.trim() === '') {
  } else {
    const result = firstLocation.length > secondLocation.length ? firstLocation : secondLocation;
    alert(`You should choose:\n ${result}`);
  }
};

const clickOnLocationPicker = document.getElementById('location-picker-link');
if (clickOnLocationPicker) {
  clickOnLocationPicker.addEventListener('click', function () {
    alertLongerName();
  });
}

const clickOnChangeBGColor = document.getElementById('find-travelers-link');
if (clickOnChangeBGColor) {
  clickOnChangeBGColor.addEventListener('click', function () {
    document.body.style.background = '#f9f8f3';
    setTimeout(() => (document.body.style.background = ''), 30000);
  });
}

const travelCounter = () => {
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
};

const clickOnCounter = document.getElementById('travel-counter-link');
if (clickOnCounter) {
  clickOnCounter.addEventListener('click', function () {
    travelCounter();
  });
}

const sections = document.getElementById('sections');
if (sections) {
  const allHeaders = Array.from(document.querySelectorAll('h2')).slice(1);
  if (allHeaders.length == 0) {
    sections.innerHTML = '<p>No sections yet</p>';
  } else {
    allHeaders.forEach((header) => {
      headerText = header.outerText;
      headerName = header.children[0].name;
      sections.innerHTML += `<li><a href="#${headerName}">${headerText}</a></li>`;
    });
  }
}

const mythCountriesRiversQ = document.querySelector('#myth-reality > div');
if (mythCountriesRiversQ) {
  mythCountriesRiversQ.outerHTML = '<br/><dt><b> There are countries with no rivers </b></dt>';
}

const mythCountriesRiversA = document.querySelector('#myth-reality > dd:last-child');
if (mythCountriesRiversA) {
  mythCountriesRiversA.textContent =
    'It`s true. Countries like Saudi Arabia, Qatar, and Vatican City — among others — have no permanent rivers at all.';
}

if (document.title.includes('Travel Tips')) {
  document.write(
    "<div style='text-align: center; color: #c1aa7f; padding: 30px;'><em>Have a nice day!</em></div>",
  );

  const footerNode = document.querySelector('footer');

  const newTipHeader = document.createElement('h2');
  const headerText = document.createTextNode('Quote of the day');
  newTipHeader.prepend('🔅');

  const newTipParagraph = document.createElement('p');
  const paragraphText = document.createTextNode(
    '"The journey of a thousand miles begins with a single step."― Lao Tzu',
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
}
