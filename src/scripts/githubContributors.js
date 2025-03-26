const CLASS_NAMES = {
    ERROR_CONTAINER: 'githuburlcontributer-error-container',
    ERROR_MESSAGE: 'error-message',
    SLIDESHOW_CONTAINER: 'slideshow-container',
    CONTRIBUTOR_SLIDE: 'contributor-slide',
    SEARCH_BAR: 'search-bar',
    SEARCH_INPUT: 'search-input',
    DOT: 'dot',
};

function createElement(tag, attributes = {}) {
    const element = document.createElement(tag);
    Object.entries(attributes).forEach(([key, value]) => {
        element[key] = value;
    });
    return element;
}

const errorcss = document.createElement('link');
errorcss.rel = "stylesheet";

const grid = document.createElement('link');
grid.rel = "stylesheet";

const slideshow = document.createElement('link');
slideshow.rel = "stylesheet";
const list = document.createElement('link');
list.rel = "stylesheet";
const div = document.getElementById('contributors');

try {
    const githuburl = div.getAttribute('data-githuburl');
    const type = div.getAttribute('data-type');
    const imgProfile = div.getAttribute('data-imgprofile') === 'true';
    const useLink = div.getAttribute('data-link') === 'true';
    const customLink = div.getAttribute('data-styles');
    if(customLink){
        list.href= `${customLink}list.css`;
        slideshow.href= `${customLink}slideshow.css`;
        grid.href = `${customLink}grid.css`;
        errorcss.href = `${customLink}error.css`
    }else{
        list.href = "https://bashamega.github.io/scripts/cdn/libs/js/contributingjs/styles/contributors/list.css";
        slideshow.href = "https://bashamega.github.io/scripts/cdn/libs/js/contributingjs/styles/contributors/slideshow.css";
        grid.href = "https://bashamega.github.io/scripts/cdn/libs/js/contributingjs/styles/contributors/grid.css";
        errorcss.href = "https://bashamega.github.io/scripts/cdn/libs/js/contributingjs/styles/error.css";

    }
    const parsedUrl = new URL(githuburl);
    const [username, repoName] = parsedUrl.pathname.split('/').slice(1);

    if (!username || !repoName) {
        throw new Error('Invalid repository URL');
    }

    const fetchurl = `https://api.github.com/repos/${username}/${repoName}/contributors`;

    fetch(fetchurl)
        .then(res => res.json())
        .then(data => {
            const contributorContainers = div.querySelectorAll(`.${CLASS_NAMES.CONTRIBUTOR_CONTAINER}`);

            

            if (data.message == "Not Found"){
                showError('Oops! Something went wrong.');

            }
            if (type === "grid") {
                document.head.append(grid);
                const container = document.createElement("div");
                container.id = "githuburlcontributer-grid";
                div.append(container);

                data.forEach(contributor => {
                    const contributorContainer = useLink ? document.createElement("a") : document.createElement("div");
                    contributorContainer.href = contributor.html_url;
                    contributorContainer.target = "_blank"; // Open link in a new tab/window

                    if (imgProfile) {
                        contributorContainer.innerHTML = `
                        <p>${contributor.login}</p>
                        <img src="${contributor.avatar_url}" alt="${contributor.login}">
                        <section id="contributors-tags">
                        <span>Programmer</span>
                        ${contributor.login ==username?(
                            `<span id="gold">Founder</span>`
                        ):(``)}
                        </section>
                        <p>${contributor.contributions} contribution${contributor.contributions == 1 ? "" : "s"}</p>
                        `;
                    } else {
                        contributorContainer.textContent = contributor.login;
                    }

                    container.append(contributorContainer);
                });
            }else if (type === "slideshow") {
                document.head.append(slideshow);
                const container = useLink ? createElement('div', { id: 'githuburlcontributer-slideshow' }): createElement('div', { id: 'githuburlcontributer-slideshow' });
                div.append(container);

                const slideshowContainer = createElement('div', { className: CLASS_NAMES.SLIDESHOW_CONTAINER });
                container.append(slideshowContainer);

                data.forEach(contributor => {
                    const contributorSlide = useLink ? document.createElement("a") : document.createElement("div");
                    contributorSlide.href = contributor.html_url;
                    contributorSlide.target = "_blank"; // Open link in a new tab/window
                    contributorSlide.classList.add(CLASS_NAMES.CONTRIBUTOR_SLIDE)

                    if (imgProfile) {
                        contributorSlide.innerHTML = `<img src="${contributor.avatar_url}" alt="${contributor.login}"><p>${contributor.login}</p>`;
                    } else {
                        contributorSlide.textContent = contributor.login;
                    }

                    slideshowContainer.append(contributorSlide);
                });

                const dotsContainer = createElement('div', { className: 'dots-container' });
                container.append(dotsContainer);
    
                const AUTO_SLIDESHOW_INTERVAL = 10000; // 10 seconds in milliseconds
                let currentSlideIndex = 0;
                const contributorSlides = slideshowContainer.getElementsByClassName(CLASS_NAMES.CONTRIBUTOR_SLIDE);
    
                function showSlide(index) {
                    const dot = document.getElementsByClassName('dot')
                    if (index < 0) {
                        currentSlideIndex = contributorSlides.length - 1;
                    } else if (index >= contributorSlides.length) {
                        currentSlideIndex = 0;
                    }
                    for (let i = 0; i < contributorSlides.length; i++) {
                        contributorSlides[i].style.display = i === currentSlideIndex ? 'block' : 'none';
                        dot[i].classList.remove('active')

                    }
                    dot[currentSlideIndex].classList.add('active')
                }
    
                function autoSlideshow() {
                    showSlide(currentSlideIndex + 1);
                    currentSlideIndex++;
                    if (currentSlideIndex >= contributorSlides.length) {
                        currentSlideIndex = 0;
                    }
                }
    
                setInterval(autoSlideshow, AUTO_SLIDESHOW_INTERVAL);
    
                data.forEach((_, index) => {
                    const dot = createElement('span', { className: CLASS_NAMES.DOT });
                    dotsContainer.append(dot);
    
                    dot.addEventListener('click', () => {
                        showSlide(index);
                        currentSlideIndex = index;
                    });
                });
    
                showSlide(currentSlideIndex);
            }else if (type =="list"){
                document.head.append(list);
                const container = document.createElement("div");
                container.id = "githuburlcontributer-list";
                div.append(container);

                data.forEach(contributor => {
                    const contributorContainer = useLink ? document.createElement("a") : document.createElement("div");
                    contributorContainer.href = contributor.html_url;
                    contributorContainer.target = "_blank"; // Open link in a new tab/window

                    if (imgProfile) {
                        contributorContainer.innerHTML = `<p>${contributor.login}</p><img src="${contributor.avatar_url}" alt="${contributor.login}">`;
                    } else {
                        contributorContainer.textContent = contributor.login;
                    }

                    container.append(contributorContainer);
                });

            }
            

        });

} catch (error) {
    console.error(error);
    showError('Oops! Something went wrong.');
}

function showError(message) {
    document.head.append(errorcss);
    div.innerHTML = `
        <div class="${CLASS_NAMES.ERROR_CONTAINER}">
            <div class="${CLASS_NAMES.ERROR_MESSAGE}">
                ${message}
            </div>
        </div>
    `;
}
function GITHUBFETCH(githubrepourl){
    
    const parsedUrl = new URL(githubrepourl);
    const [username, repoName] = parsedUrl.pathname.split('/').slice(1);

    if (!username || !repoName) {
        throw new Error('Invalid repository URL');
    }

    const fetchurl = `https://api.github.com/repos/${username}/${repoName}/contributors`;
    fetch(fetchurl)
        .then(res=>res.json())
        .then(data=>{
            const items = data.items;

            return(items)
        })

    
}
