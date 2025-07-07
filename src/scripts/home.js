  if (localStorage.myBarkUsername) {
    document.getElementById("usernameforprofilebox").innerHTML = `<a href="/profile/${localStorage.myBarkUsername}">${localStorage.myBarkUsername}</a>`;
  } else {
    document.getElementById("profilebox").remove();
  }

  if (new Date().getMonth() === 12 && new Date().getDate() === 31) {
    document.getElementById("wussup_msg").innerHTML = "Happy New Years Eve! see ya in 2025";
  }
  
  //**blob to dataURL**
  function blobToDataURL(blob) {
      return new Promise((resolve, reject) => {
        let a = new FileReader();
        a.onload = function(e) {resolve(e.target.result);}
        a.readAsDataURL(blob);
      });
  }

  //utillity function to set the backround image of an element to a url.
  function changeImage(element, url) {
    element.style.backgroundImage = `url(${url})`;
  }

  async function setupDog() {
    const idleblob = await fetch("/src/images/dog/idle.svg").then(data => data.blob());
    const happyblob = await fetch("/src/images/dog/happy.svg").then(data => data.blob());
    const ummblob = await fetch("/src/images/dog/umm.svg").then(data => data.blob());
    const idle = await blobToDataURL(idleblob);
    const happy = await blobToDataURL(happyblob);
    const umm = await blobToDataURL(ummblob);
    const dog = document.getElementById("dog");
    let barksound = new Audio('src/bark.mp3')
    dog.addEventListener("mouseleave", () => changeImage(dog, umm));
    dog.addEventListener("click", () => changeImage(dog, happy));
    dog.addEventListener("click", () => barksound.play());
    changeImage(dog, idle);
    dog.classList.add('active');
    document.getElementById('loadingdog').remove();
  }

  setupDog();

  function recentCom() {
    document.getElementById("boxChanger").innerHTML = "<h2>Fetching commits...</h2><p>please wait...</p>"; // get it? "fetching" commits??? eh????........anyone?
    fetch('https://api.github.com/repos/Mariocraft987/bark.github.io/commits?per_page=50')
      .then(response => response.json())
      .then(commits => {
        let Commits = '<h2>Recent Commits</h2><ul style="overflow-y: scroll; height: 150px;"><br/>';
        commits.slice(0, commitsLength).forEach(commit => {
          Commits += `<div title="${replace(commit.author.login)}: ${replace(commit.commit.message)}"><li><a href="https://github.com/${replace(commit.author.login)}"><img style="border-radius:12px;margin-top:-4px;margin-left:-6px" src="https://github.com/${commit.author.login}.png" width="21"></a><a class="linkoncommits" href="${commit.html_url}">${replace(commit.commit.message)}</a></li></div>`;
        });
        Commits += '</ul><br><a class="buttonFrBx" href="https://github.com/Mariocraft987/bark.github.io/commits/main/" style="text-align: center;">See all</a><br>';
        finalCommits = Commits.replaceAll(":trollface:", "<img src='/src/emojis/svg/troll.svg' width='23'>")
        document.getElementById("boxChanger").innerHTML = finalCommits + "<br/>"
      })
      .catch(error => {
        console.error('Error fetching commits:', error);
        document.getElementById("boxChanger").innerHTML = '<h2>Oops... :(</h2><p>Failed to load commits. Check your connection and try again.</p>';
      });
  }