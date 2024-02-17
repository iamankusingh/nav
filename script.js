let icon = document.getElementById("icon");
let ul = document.getElementById("ul");
let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let ismenuOpen = false;

icon.addEventListener("click", () => {
  if (ismenuOpen === false) {
    openMenu();
    ismenuOpen = true;
  } else {
    closeMenu();
    ismenuOpen = false;
  }
});

function openMenu() {
  console.log("Menu open");
  ul.classList.add("resp-ul");
  bar1.classList.add("bar1");
  bar2.classList.add("bar2");
  bar3.classList.add("bar3");
}

function closeMenu() {
  console.log("Menu close");
  ul.classList.remove("resp-ul");
  bar1.classList.remove("bar1");
  bar2.classList.remove("bar2");
  bar3.classList.remove("bar3");
}
