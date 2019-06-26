const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
// Selects tab content item
function selectItem(event) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add("tab-border");
  // Grab content item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}
function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"));
}
function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"));
}
// Listen for tab click
tabItems.forEach(item => item.addEventListener("click", selectItem));

// const tabContentImg = document.querySelectorAll(".teamImg");
// tabContentImg.addEventListener("click", img =>
//   img.classList.toggle("animated flipInX")
// );
const addGitIcon = function(e) {
  e.classList.add("fab");
  e.classList.add("fa-github");
  e.classList.add("fa-2x");
};
const tab2Imgs = Array.from(
  document.querySelectorAll(".tab-2-content-bottom i")
);
tab2Imgs.map(img => addGitIcon(img));

console.log(tab2Imgs);
