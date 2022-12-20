document.getElementById("textarea").innerHTML = "this is a textarea";
const navigation = document.querySelector(".nav-link");
const navToggle = document.querySelector("button");

navToggle.addEventListener("click", () => {
  const show = navigation.getAttribute("data-visible");

  if (show === "false") {
    navigation.setAttribute("data-visible", true);
    navigation.setAttribute("aria-expanded", false);
  } else if (show === "true") {
    navigation.setAttribute("data-visible", false);
    navigation.setAttribute("aria-expanded", true);
  }
});
