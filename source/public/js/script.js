const header = document.querySelector(".js-header");
const menuOverlay = document.querySelector(".js-overlay");
const btnSubmenu = document.querySelector(".js-open-sub-menu");
const langs = document.querySelector(".js-langs");
const acordeon = document.querySelector(".js-acordeon");

// menu

function openMenu({ target }) {
  const el = target;

  if (
    el.classList.contains("js-overlay") ||
    el.classList.contains("js-open-menu")
  ) {
    header.classList.toggle("active");
    menuOverlay.classList.toggle("active");
  }
}

function openSubmenu({ currentTarget }) {
  const el = currentTarget;

  el.classList.toggle("active");
}

header.addEventListener("click", openMenu);
btnSubmenu.addEventListener("click", openSubmenu);

// langs

function toggleLangs({ target }) {
  const el = target.closest(".js-langs-item");

  if (!el) {
    return;
  }

  const siblings = [...el.parentNode.children].filter((n) => n !== el);

  siblings.forEach((el) => el.classList.remove("active"));

  el.classList.add("active");
}

langs.addEventListener("click", toggleLangs);

// accordion

function acordeonList({ target }) {
  const el = target.closest(".js-acordeon-btn");

  if (!el) {
    return;
  }

  const parentEl = el.closest(".js-acordeon-item");
  const textWrap = el.parentNode.querySelector(".js-accodreon-text");
  const parentText = textWrap.parentNode;

  if (parentEl.classList.contains("active")) {
    parentText.style.height = 0;
    parentEl.classList.remove("active");

    return;
  }

  parentEl.classList.add("active");

  parentText.style.height = `${textWrap.clientHeight}px`;
}

acordeon.addEventListener("click", acordeonList);
