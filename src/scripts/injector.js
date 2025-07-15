const actionsecret = localStorage.getItem("secret");
let profile = !!localStorage.getItem("myBarkUsername") ? `
<a href="/profile/${localStorage.getItem("myBarkUsername")}"><i>My Profile</i></a>
<br/><br/>
<a href="/settings/profile">SETTINGS</a>
` : `
<a href="/login">LOGIN</a>
<br/><br/>
<a href="/signup">SIGNUP</a>`
let afdbtn = new Date().getMonth() === 3 && new Date().getDate() === 1 ? "<a id='flip-it-afd-btn'>FLIP IT</a>" : '';

const components = {
    //navbar
    "navbar": `
    <div id="sidebar" class="sidebar">
    <a href="/">HOME<img id="bark_logo" src="/src/images/logos/normal.png" alt="Bark" title="Home" width="30" height="30"></a>
    <br/><br/>
    <a href="/create">CREATE</a>
    <br/><br/>
    <a href="/explore">EXPLORE</a>
    <br/><br/>
    <a href="/about">ABOUT</a>
    <br/><br/>
    <form action="/search" style="display: contents;"><input class="searchBar" id="search" name="q" placeholder="Search for Projects"></input></form>
    <a class="dark-mode-button" style="cursor: pointer;" onclick="toggleDarkMode()" id="darkModeToggle"><dmbico alt="Dark Mode"></dmbico></a>
    <br/>
    ${profile}
    <br/><br/>
    <img src="/src/images/assets/other/construction.gif" width="80" alt="This site is under construction!">
    <br/>
     <img src="/src/images/assets/boxes/BESTUSEDONACOMPUTER456789.gif" alt="This site is best viewed on a computer!">
    </div>
    `,
    //footer
    "footer": `
    <footer><p style="color: #777;">Looks like you\'ve reached the bottom.</p><p>
    <a href="/">Home</a>
    <a href="/advanced">Editor</a>
    <a href="https://github.com/mariocraft987/bark.github.io/">Source</a>
    <a href="https://bark.dumorando.com/docs">Docs</a>
    <p style="font-size: 9pt; color: #777;">© 2023-2025 Bark Coding<br/>
    Even though this project is hosted on a dumorando.com domain, this project is not affiliated with dumorando anymore.</p>
    <div id="google_translate_element"></div>
    </footer>
    `
};
Object.keys(components).forEach(item => {
    document.body.innerHTML = document.body.innerHTML.replace(`<!-- inject:${item} -->`, components[item]);
});

//done injecting, go to the top cuz it scrolls down automatically for some reason
window.scrollTo(0, 0);
