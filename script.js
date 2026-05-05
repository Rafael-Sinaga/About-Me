document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("click", (event) => {
    if (event.target.closest(".slider, .slide-btn, .project-links a")) return;
    project.classList.toggle("active");
  });
});

document.querySelectorAll(".slider-wrapper").forEach((wrapper) => {
  const slider = wrapper.querySelector(".slider");
  const left = wrapper.querySelector(".left");
  const right = wrapper.querySelector(".right");
  let startX = 0;
  let startScroll = 0;
  let dragging = false;
  let moved = false;

  const scrollStep = () => Math.max(280, slider.clientWidth);

  const move = (direction) => {
    slider.scrollBy({
      left: direction * scrollStep(),
      behavior: "auto",
    });
  };

  slider.addEventListener("pointerdown", (event) => {
    dragging = true;
    moved = false;
    startX = event.clientX;
    startScroll = slider.scrollLeft;
    slider.classList.add("dragging");
    slider.setPointerCapture(event.pointerId);
  });

  slider.addEventListener("pointermove", (event) => {
    if (!dragging) return;

    const delta = event.clientX - startX;
    if (Math.abs(delta) > 3) moved = true;
    slider.scrollLeft = startScroll - delta;
  });

  const stopDrag = (event) => {
    if (!dragging) return;
    dragging = false;
    slider.classList.remove("dragging");

    if (event.pointerId !== undefined && slider.hasPointerCapture(event.pointerId)) {
      slider.releasePointerCapture(event.pointerId);
    }
  };

  slider.addEventListener("pointerup", stopDrag);
  slider.addEventListener("pointercancel", stopDrag);

  slider.addEventListener("click", (event) => {
    if (!moved) return;
    event.preventDefault();
    event.stopPropagation();
  });

  left.addEventListener("click", (event) => {
    event.stopPropagation();
    move(-1);
  });

  right.addEventListener("click", (event) => {
    event.stopPropagation();
    move(1);
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("active", entry.isIntersecting);
    });
  },
  {
    threshold: 0.18,
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});
