// EqualFaith Europe — shared site behavior

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Hero "gap closes" signature animation — runs once on load
  const gap = document.querySelector(".gap-lines");
  if (gap) {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gap.classList.add("closed");
    } else {
      requestAnimationFrame(() => {
        setTimeout(() => gap.classList.add("closed"), 250);
      });
    }
  }

  // Publications filter pills
  const pills = document.querySelectorAll(".filter-pill");
  const entries = document.querySelectorAll(".pub-entry");
  if (pills.length && entries.length) {
    pills.forEach((pill) => {
      pill.addEventListener("click", () => {
        pills.forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        const cat = pill.dataset.filter;
        entries.forEach((entry) => {
          const show = cat === "all" || entry.dataset.category === cat;
          entry.style.display = show ? "" : "none";
        });
      });
    });
  }

  // Subtle scroll-triggered fade-in for major sections — restrained, not decorative
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sections = document.querySelectorAll("main > section");
  if (sections.length && !prefersReduced && "IntersectionObserver" in window) {
    sections.forEach((s) => s.classList.add("fade-in"));
    const observer = new IntersectionObserver(
      (items) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            item.target.classList.add("in-view");
            observer.unobserve(item.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    sections.forEach((s) => observer.observe(s));

    // Safety net: never leave a section invisible — reveal everything
    // shortly after load regardless of observer timing.
    setTimeout(() => {
      sections.forEach((s) => s.classList.add("in-view"));
    }, 1200);
  }
});
