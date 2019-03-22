const backgroundContainer = document.querySelector('#background-container');

document.addEventListener('mousemove', (e) => {
  const backgroundPosX = e.pageX / 30;
  const backgroundPosY = e.pageY / 70 + 40;
  
  backgroundContainer.style.backgroundPosition = `${backgroundPosX}% ${backgroundPosY}%`;
});
