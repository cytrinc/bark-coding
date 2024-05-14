/* Some common scripts created in javascript to work the website, and make it interactive. */

let newsBox = "Come see Bark's 5th trailer!";
let baseUrl = "https://bark-coding.vercel.app";
let commitsLength = 150;

let mobile = window.navigator.userAgent.toLowerCase().includes("mobi");

console.error("Exit Now! This part is used by devolopers. \n Hackers could tell you to paste strings here to hack your Bark account. \n DON'T DO IT");

// navbar
content = '<div class="navbar"><a href="' + baseUrl + '"><img src="https://bark-coding.vercel.app/src/images/Logo.svg" alt="bark" width="25" height="25" ></a><a href="https://bark-coding.vercel.app/editor_new">Create</a><a href="/explore">Explore</a>'
content += '<a href="/ideas">Ideas</a><a href="/about">About</a><a href="https://github.com/mariocraft987/bark.github.io/discussions">Discuss</a><a href="/settings">Settings</a>'
// special april fools button ;)
if (new Date().getMonth() === 3 && new Date().getDate() === 1) {
    content += "<a id='flip-it-afd-btn'>FLIP IT</a>";
}
content += '<a class="dark-mode-button" id="darkModeToggle"><dmbico alt="Dark Mode"></dmbico></a><form action="search" style="display: contents;"><input class="searchBar" id="search" name="q" placeholder="Search for Projects"></input></form>'
if (localStorage.getItem("myBarkUsername") == "") {
    content += '<a class="right">sign out</a><a class="right">profile</a>'
} else {
    content += '<a href="login" class="right">Sign in</a><a href="signup" class="right">Join bark</a></div>'
}
document.getElementById('navbar').innerHTML = content;

// footer
if (document.url != "baseUrl") {
    var footer;
    footer = '<footer><p style="color: #777;">Looks like you\'ve reached the bottom.</p><p>';
    footer += '<a href="/index">Home</a> '; // Home
    footer += '<a href="/editor_new/">Editor</a> '; // Editor
    footer += '<a href="https://github.com/mariocraft987/bark.github.io/">Github</a> '; // Github
    footer += '<br/><br/><a href="https://github.com/mariocraft987/bark-coding/wiki">Wiki</a> '; // Wiki
    footer += '<a href="https://discord.gg/hXmHw7H9BF">Discord</a> '; // Discord
    footer += '</p></footer>'
    document.body.innerHTML += footer;
}

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
    if (document.URL == baseUrl + "/") {
        document.getElementById("boxChanger").innerHTML = "<h2>Whats New?</h2><p>" + newsBox + "</p>";
    }
}

function randomTxt() {
    //geeksforgeeks.org for the random text generator.

    if (document.URL == baseUrl + "/explore") {

        fetch('https://bark-coding.vercel.app/src/scripts/tips.json')
            .then(res => res.json()).then(data => {
                obj = data;
            })
            .then(() => {
                wrd = obj[parseInt(Math.random() * obj.length)]
                document.getElementById("randomWord").innerHTML = wrd;
            });
    }
}

function jobRegister() {
    let job = document.querySelector('input[name=job]:checked').value;
    let username = document.getElementById('github-username').value;
    document.getElementById('page').innerHTML = '<br/><h2>You have selected a Job to ' + job + '</h2><p>We have to run a few tests to see your actually <em>' + username + '</em></p><br/><br/><p>Please comment "Job Register 4067"';
    document.getElementById('page').innerHTML += ' on <a class="link" href="https://github.com/Mariocraft987/bark.github.io/commit/5644df6ebc5aa7ea7b611141a265ff7c17712c5e">this commit</a>.</p>'
}

/* @mnsderp for the data saving scripts */

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    // Save dark mode state to local storage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Function to initialize dark mode based on local storage
function initializeDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    if (isDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Attach event listener to dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

// Initialize dark mode when the page loads
window.addEventListener('load', initializeDarkMode);

whatsNew();
const theme = localStorage.getItem('theme');
if (theme) {
    if (theme.startsWith('#')) {
        const style = document.createElement('style');
        document.head.append(style);
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = `https://bark-coding.vercel.app/src/themes/bluedodger.css`;
        document.head.append(link);
    } else if (theme != "bluedodger") {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = `https://bark-coding.vercel.app/src/themes/${theme}.css`;
        document.head.append(link);
    } else {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = `https://bark-coding.vercel.app/src/themes/bluedodger.css`;
        document.head.append(link);
    }
} else {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = `https://bark-coding.vercel.app/src/themes/bluedodger.css`;
        document.head.append(link);
    }

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}