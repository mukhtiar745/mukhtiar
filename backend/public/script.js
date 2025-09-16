
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const Mode = document.getElementById("mode")
const container = document.getElementById("containers");
const registerForm = document.getElementById("registerForm");
const toggleSwitch = document.getElementById("themeToggle");
const input = document.getElementById("dark-mode")
const sunbmit = document.getElementById("submit")
const pass = document.getElementById("pass")
const khan = document.querySelectorAll(".khan")
const scoial = document.querySelectorAll(".social")
const desgin = document.querySelector('.desgin')


if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
      container.style.background="black";
    container.style.boxShadow="30px 30px 30px black";
    input.style.background="black";
    pass.style.background="black";
      input.style.color="white";
    pass.style.color="white";
     input.style.boxShadow="inset 4px 4px 6px #0f1010ff, inset -4px -4px 6px #111212ff"
    pass.style.boxShadow="inset 4px 4px 6px #0f1010ff, inset -4px -4px 6px #111212ff"
  toggleSwitch.checked = true;
      for (let i = 0; i < khan.length; i++) {
  khan[i].style.backgroundColor = "black";
  khan[i].style.boxShadow="4px 4px 6px #1c1c1dff, inset -4px -4px 6px #0d0d0eff";
  khan[i].style.color="white"
}
loginTab.style.color="white";
registerTab.style.color="white";
loginTab.style.background="black";
registerTab.style.background="black";

sunbmit.style.boxShadow="none";
  for (let i = 0; i < scoial.length; i++) {
  scoial[i].style.backgroundColor = "black";
  scoial[i].style.boxShadow="4px 4px 6px #1c1c1dff, inset -4px -4px 6px #0d0d0eff";
  scoial[i].style.color="white"
}
desgin.style.background = "#0F4C5C";
}


// Toggle theme
toggleSwitch.addEventListener("change", function () {
  if (this.checked) {

    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    container.style.background="black";
    container.style.boxShadow="30px 30px 30px black";
    input.style.background="black";
    input.style.boxShadow="inset 4px 4px 6px #0f1010ff, inset -4px -4px 6px #111212ff"
    pass.style.boxShadow="inset 4px 4px 6px #0f1010ff, inset -4px -4px 6px #111212ff"
    pass.style.background="black";
    input.style.color="white";
    pass.style.color="white";
    for (let i = 0; i < khan.length; i++) {
  khan[i].style.backgroundColor = "black";
  khan[i].style.boxShadow="4px 4px 6px #1c1c1dff, inset -4px -4px 6px #0d0d0eff";
  khan[i].style.color="white"
}
    for (let i = 0; i < scoial.length; i++) {
  scoial[i].style.backgroundColor = "black";
  scoial[i].style.boxShadow="4px 4px 6px #1c1c1dff, inset -4px -4px 6px #0d0d0eff";
  scoial[i].style.color="white"
}
loginTab.style.color="white";
registerTab.style.color="white";
loginTab.style.background="black";
registerTab.style.background="black";

sunbmit.style.boxShadow="none";
desgin.style.background = "#0F4C5C";

    
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
     container.style.background="none";
     container.style.boxShadow="10px 10px 30px #c2c8d0, -10px -10px 30px #ffffff"
         input.style.background="white";
             for (let i = 0; i < khan.length; i++) {
  khan[i].style.backgroundColor = "";
  khan[i].style.boxShadow="";
  khan[i].style.color="black"
}

    input.style.boxShadow="inset 4px 4px 6px #c8ccd1, inset -4px -4px 6px #f0f5fa"
    pass.style.boxShadow="inset 4px 4px 6px #c8ccd1, inset -4px -4px 6px #f0f5fa"
    pass.style.background="";
    input.style.background=""
    loginTab.style.color="black";
registerTab.style.color="black";
loginTab.style.background="none";
registerTab.style.background="none";
sunbmit.style.boxShadow="6px 6px 10px #c2c8d0, -6px -6px 10px #ffffff";

  for (let i = 0; i < scoial.length; i++) {
  scoial[i].style.backgroundColor = "white";
  scoial[i].style.boxShadow="4px 4px 6px #d7d7e2ff, inset -4px -4px 6px #d5d5ddff";
  scoial[i].style.color="black"
}
pass.style.color="black";
input.style.color="black";
desgin.style.background = "#0F4C5C";
  }
});




loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});
registerTab.addEventListener("click", () => {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
});
Mode.addEventListener("change", () => {
    if (this.onclick) {
        document.body.style.background = "black";
        Mode.style.background = "black";
        Mode.style.color = "white";
    }
    else{
         document.body.style.background = "white";
        Mode.style.background = "black";
        Mode.style.color = "white";
    }
})






// Apply saved theme on load




