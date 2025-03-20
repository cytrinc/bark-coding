/* Some common scripts created in javascript to work the website, and make it interactive. */

let toevaluate = ["/src/scripts/injector.js"];
toevaluate.forEach(path => {
  fetch(path)
    .then(data => data.text())
    .then(data => {
      (async () => {
        eval(data);
      })(); //run in a seprate thread so it doesnt block this scripts execution
    });
});

if (document.URL == "https://bark.dumorando.com/profile/" || document.URL == "https://bark.dumorando.com/profile") {
  window.location.href = "https://bark.dumorando.com/users";
}

let newsBox =  `
Bark Coding now has a working comment system!!!
`;
let baseUrl = window.location.origin;
let commitsLength = 150;

let mobile = window.navigator.userAgent.toLowerCase().includes("mobi");

let isLinux = navigator.appVersion.indexOf("Linux") != -1

let isFirefox = window.navigator.userAgent.toLowerCase().includes("firefox")
let isSafari = window.safari !== undefined;
// because i get confused sometimes
// https://stackoverflow.com/questions/7944460/detect-safari-browser

let showHoldOn = true;

// conditionals

if (document.URL.includes('bark-coding.vercel.app') || document.URL.includes('mariocraft987.github.io/bark-coding')) {
  localStorage.barktoken = null;
  window.location.href = "https://bark.dumorando.com" + document.URL.replaceAll(window.location.origin, "");
}

if (showHoldOn) {

  // this exists because yeah
  shout = "";

  for (i = 0; i < 3; i++) {
    shout = shout + "!";
    console.log("%cHold on%s", "font-weight: bold; font-size: 50pt; color: red;", shout);
  }
  console.log("If anyone asks you to paste something in here, Don't do it!! \nThey might be trying to steal, or ban your account! \nIf you are trying to paste something in here, then make sure its from a trusted source!");
}

document.body.innerHTML += "<button onclick='scrollToTop()' class='buttonFrBx' id='topBtn' disabled>Top</button>";

function randomstring(length = 8) {
  const RandomCharacter = () => String.fromCharCode(Math.random() * (126 - 32) + 32);
  return Array.from({ length }, RandomCharacter).join("");
}

if (!localStorage.getItem("secret")) {
  localStorage.setItem("secret", randomstring());
}

function CheckLoggedIn() {
  if (localStorage.getItem("barktoken") === null) {
    localStorage.removeItem("myBarkUsername");

    return;
  }
  
  // Quick note, probably shouldn't send the token in the search string, use POST instead.
  fetch(`https://api.bark.dumorando.com/api/v2/currentUser?token=${localStorage.getItem("barktoken")}`)
    .then(data => data.json())
    .then(data => {
      const ReauthNeeded = data.error === 'Reauthenticate';
      if (!ReauthNeeded) {
        localStorage.setItem("myBarkUsername", data.username)
        return;
      }
      localStorage.removeItem("myBarkUsername");
      localStorage.removeItem("barktoken");
      location.reload();
    });
}
CheckLoggedIn();

if (new Date().getMonth() === 3 && new Date().getDate() === 1) {
    document.getElementById("flip-it-afd-btn").addEventListener("click", function () {
        document.body.classList.toggle("afd-upside-down");
        localStorage.setItem("flip-it-afd", document.body.classList.contains("afd-upside-down"));
    })
    window.addEventListener("load", function () {
        if (localStorage.getItem("flip-it-afd") == "true") {
            this.document.body.classList.add("afd-upside-down");
        }
    })
}

function whatsNew() {
  if (location.pathname !== "/")
    return;
  document.getElementById("boxChanger").innerHTML = "<h2>Whats New?</h2><p>" + newsBox + "</p>";
}

function Todo() {
  if (location.pathname !== "/")
    return;

  document.getElementById("boxChanger").innerHTML = "<h2>Fetching file...</h2><p>please wait...</p>";

  fetch("https://bark.dumorando.com/static/todolist.txt")
.then(x => x.text())
.then(y => toDoContent = y);
  
  document.getElementById("boxChanger").innerHTML = "<h2>Todo List</h2><p>" + toDoContent.replaceAll(/\n/g, "<br>") + "</p>";
}

function hideshowProfileDropdown() {
  location.href = `/profile/${localStorage.myBarkUsername}`;
  document.getElementById("myProfileDropDown").style.display = "block";
}

document.getElementById("dropdownButton")?.addEventListener("click", hideshowProfileDropdown())


function randomTxt() {
  if (location.pathname !== "/explore")
    return;
  fetch("/src/json/tips.json")
    .then(res => res.json())
    .then(data => {
      var tip = data[parseInt(Math.random() * data.length)];
      document.getElementById("randomWord").innerHTML = tip;
  });
}

function jobRegister() {
    let job = document.querySelector('input[name=job]:checked').value;
    let username = document.getElementById('github-username').value;
    document.getElementById('page').innerHTML = `<br/>
    <h2>You have selected a Job to ${job}</h2>
    <p>We have to run a few tests to see your actually <em>${username}</em></p>
    <br/> <br/>
    <p>Please comment "Job Register 4067" on <a class="link" href="https://github.com/Mariocraft987/bark.github.io/commit/5644df6e">this commit</a>.</p>`;
}

/* @mnsderp for the data saving scripts */

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

function initializeDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    if (!isDarkMode)
      return;
    body.classList.add('dark-mode');
}

function InitTheme() {
  const theme = localStorage.getItem('theme') ?? "bluedodger";
  if (theme.startsWith('#')) {
    const style = document.createElement('style');
    document.head.append(style);

    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.href = `/src/themes/bluedodger.css`;
      
    document.head.append(link);

    if (isSafari) {
        document.getElementsByTagName('head')[0].innerHTML += "<link rel='stylesheet' href='/src/themes/bluedodger.css'>";
    } else {
      document.head.append(link);
    }
    return;
  }
  const link = document.createElement('link');
  link.rel = "stylesheet";
  link.href = `/src/themes/${theme}.css`;
    
  if (isSafari) {
      document.getElementsByTagName('head')[0].innerHTML += `<link rel='stylesheet' href='/src/themes/${theme}.css'>`;
  } else {
      document.head.append(link);
  }
  return;
}

document.addEventListener("DOMContentLoaded", function(event) {
    initializeDarkMode();
    whatsNew();
    InitTheme()
});

let mybutton = document.getElementById("topBtn");

window.onscroll = scrollFunction;
function scrollFunction() {
  var Down20PX = document.documentElement.scrollTop > 20 || document.body.scrollTop > 20;
  mybutton.disabled = !Down20PX;
}
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // everything else
}



let CustomSelect = document.getElementsByClassName("custom-select");
for (let i = 0; i < CustomSelect.length; i++) {
  let selectElement = CustomSelect[i].querySelector("select");
  let SelectedItem = document.createElement("div");
  SelectedItem.setAttribute("class", "select-selected");
  SelectedItem.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
  CustomSelect[i].appendChild(a);
  let OptionList = document.createElement("div");
  OptionList.setAttribute("class", "select-items select-hide");
  for (let j = 1; j < selectElement.length; j++) {
    let option = document.createElement("div");
    option.innerHTML = selElmnt.options[j].innerHTML;
    option.addEventListener("click", function(e) {
        let select = this.parentNode.parentNode.getElementsByTagName("select")[0];
        let OptionItem = this.parentNode.previousSibling;
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].innerHTML == this.innerHTML) {
            select.selectedIndex = i;
            OptionItem.innerHTML = this.innerHTML;
            let LastSelected = this.parentNode.getElementsByClassName("same-as-selected");
            for (let k = 0; k < LastSelected.length; k++) {
              LastSelected[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        OptionItem.click();
    });
    OptionList.appendChild(option);
  }
  CustomSelect[i].appendChild(OptionList);
  SelectedItem.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}
function closeAllSelect(elemnt) {
  let IndexesThatAreSelected = [];
  let SelectItems = document.getElementsByClassName("select-items");
  let SelectedItems = document.getElementsByClassName("select-selected");
  for (let i = 0; i < SelectedItems.length; i++) {
    if (elemnt != SelectedItems[i]) {
      SelectedItems[i].classList.remove("select-arrow-active");
      continue;
    }
    
    IndexesThatAreSelected.push(i);
  }
  for (let i = 0; i < SelectItems.length; i++) {
    if (!IndexesThatAreSelected.includes(i))
      continue;
    SelectItems[i].classList.add("select-hide");
  }
}
document.addEventListener("click", closeAllSelect);

console.log("-----------------------------------------");
console.log("All scripts were ran successfully!")
