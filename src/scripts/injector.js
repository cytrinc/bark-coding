const actionsecret = localStorage.getItem("secret");
let profile = !!localStorage.getItem("myBarkUsername") ? `
<a class="right" onclick="hideshowProfileDropdown()">${localStorage.getItem("myBarkUsername")}<img src="/src/images/assets/dropdown.png" width="15" height="10" style="padding: 0px;"></a></div>
<div id="myProfileDropDown" class="dropdown-content" style="display: none;">
<a href="/profile/${localStorage.getItem("myBarkUsername")}">My Profile</a>
<br/>
<a href="/settings/profile">Edit Profile</a>
<br/>
<a href="/settings">Site Settings</a>
</div>` : '<a href="login" class="right">Login</a><a href="signup" class="right">Join bark</a></div>'
let afdbtn = new Date().getMonth() === 3 && new Date().getDate() === 1 ? "<a id='flip-it-afd-btn'>FLIP IT</a>" : '';

const components = {
    //navbar
    "navbar": `
    <div id="navbar" class="navbar"><a href="/"><img id="bark_logo" src="/src/images/logos/normal.png" alt="Bark" title="Home" width="25" height="25""></a>
    <a href="/create">Create</a>
    <a href="/explore">Explore</a>
    <a href="/about">About</a>
    ${afdbtn}
    <a class="dark-mode-button" onclick="toggleDarkMode()" id="darkModeToggle"><dmbico alt="Dark Mode"></dmbico></a><form action="/search" style="display: contents;"><input class="searchBar" id="search" name="q" placeholder="Search for Projects"></input></form>
    ${profile}
    `,
    // editor_navbar
    "editor_navbar": `
    <div id="navbar" class="navbar"><a href="/"><img src="/src/images/Logo.svg" alt="Bark" width="25" height="25"></a>
    <input type="file" id="fileInput" accept=".barkf" style="display: none;" onchange="loadWorkspaceFromFile(this.files[0])" />
    <a href="#" onclick="openFileInput();" title="open a saved project">Open</a>
    <a href="#" id="downloadbutton" onclick="downloadproject();" title="download project to your computer.">Download</a>
    <a href="/advanced/">Advanced</a>
    <a class="dark-mode-button" id="darkModeToggle">
      <dmbico alt="Dark Mode"></dmbico>
    </a>
    <input class="searchBar" id="projectname" placeholder="Project name..." value="project"></input></div>
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
    <select id="lang-select">
        <option value="en">English</option>
    </select>
    </footer>
    `
};
Object.keys(components).forEach(item => {
    document.body.innerHTML = document.body.innerHTML.replace(`<!-- inject:${item} -->`, components[item]);
});

//done injecting, go to the top cuz it scrolls down automatically for some reason
window.scrollTo(0, 0);
