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

/* SCROLL REVEAL */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach(reveal => {
  observer.observe(reveal);
});