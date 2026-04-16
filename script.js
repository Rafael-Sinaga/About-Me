const projects = document.querySelectorAll('.project');

projects.forEach(project => {

  project.addEventListener('click', (e) => {

    if (e.target.closest('.slider') || e.target.closest('.slide-btn')) return;

    project.classList.toggle('active');
  });

});

// SLIDER BUTTON
document.querySelectorAll('.slider-wrapper').forEach(wrapper => {
  const slider = wrapper.querySelector('.slider');
  const btnLeft = wrapper.querySelector('.left');
  const btnRight = wrapper.querySelector('.right');

  btnRight.addEventListener('click', (e) => {
    e.stopPropagation();
    slider.scrollBy({ left: 300, behavior: 'smooth' });
  });

  btnLeft.addEventListener('click', (e) => {
    e.stopPropagation();
    slider.scrollBy({ left: -300, behavior: 'smooth' });
  });
});