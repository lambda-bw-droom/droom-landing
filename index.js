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

const tabContentImg = document.querySelectorAll(".teamImg");
tabContentImg.addEventListener("click", img =>
  img.classList.toggle("animated flipInX")
);

function nameFilter() {
  // Declare variables
  var input, filter, devDiv, devName, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  devDiv = document.getElementsByClassName("devTeamMemb");
  devName = devDiv.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
