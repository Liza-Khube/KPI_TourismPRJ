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

export const dragAndDrop = (event, elemType) => {
  const elem = event.target;
  if (elem.tagName !== elemType) return;
  elem.classList.add('dragging');
  let shiftX = event.clientX - elem.getBoundingClientRect().left;
  let shiftY = event.clientY - elem.getBoundingClientRect().top;
  elem.style.position = 'absolute';
  elem.style.zIndex = 900;

  document.body.append(elem);

  function moveAt(pageX, pageY) {
    elem.style.left = pageX - shiftX + 'px';
    elem.style.top = pageY - shiftY + 'px';
  }
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }
  document.addEventListener('mousemove', onMouseMove);

  elem.onmouseup = function () {
    elem.classList.remove('dragging');
    document.removeEventListener('mousemove', onMouseMove);
    elem.onmouseup = null;
  };
  elem.ondragstart = function () {
    return false;
  };
};
