export const alertAboutAuthor = (lastName, firstName, position = 'KPI`s student') => {
  alert(`Author: ${firstName} ${lastName}\nPosition: ${position}`);
};

export const getReport = (event) => {
  const elem = event.currentTarget;
  let problem = prompt('Write about a problem here:');
  if (problem) {
    alert(`Thank you! Your report ("${problem}") will be reviewed.`);
    elem.firstChild.nodeValue = 'Thank you for your help! ✨';
    elem.style.color = '#65705c';
  }
};
