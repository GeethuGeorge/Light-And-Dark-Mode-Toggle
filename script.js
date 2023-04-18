//The duty of JS is when we click on the checkbox the dark theme comes up
//if not clicked light theme
//if clicked dark theme

//DOM elements
//--------------

let toggleSwitchEl = document.querySelector("input[type=checkbox]");
let htmlEl = document.documentElement; //we get HTML
let toggleTextEl = document.querySelector(".toggle-text");

let toggleIconEl = document.querySelector(".fa-sun");



//switch theme
//-------------
function switchTheme() {
    this.checked
        ? ( 
            htmlEl.setAttribute("data-theme", "dark"),
            updateSwitchProperties("isDark"),
            window.localStorage.setItem("theme", "dark")
            )
        : ( 
            htmlEl.setAttribute("data-theme", ""), 
            updateSwitchProperties("isLight"),
            window.localStorage.setItem("theme", "light")
            );
}


//Update switch properties
//-------------------------
function updateSwitchProperties(mode, icon) {
  //ternary operator
     mode==="isDark"
  ? (
    toggleTextEl.innerHTML = "Dark Mode",
    toggleIconEl.classList.remove("fa-sun"),
    toggleIconEl.classList.add("fa-moon")
    )
  : (
    toggleTextEl.innerHTML = "Light Mode", 
    toggleIconEl.classList.remove("fa-moon"),
    toggleIconEl.classList.add("fa-sun")
    )
}

//check local storage
//to get the value from local storage, and we can store that in a variable

let lsCurrentTheme=window.localStorage.getItem("theme")
if(lsCurrentTheme==="dark"){
  htmlEl.setAttribute("data-theme", "dark")
  updateSwitchProperties("isDark")
  toggleSwitchEl.checked=true;
 
}else{
  htmlEl.setAttribute("data-theme", "")
  updateSwitchProperties("isLight")
}


//addevenlistener--------------------------
//checkbox has an event change
toggleSwitchEl.addEventListener("change", switchTheme);
