function image_badge(url, name) {
    return "";
    // return `<a href="https://bark.dumorando.com/docs#/Badges"><img src="${url}" title="${name} Badge" alt="has ${name} badge" width="36" style="image-rendering: pixelated; cursor: help;"></a>`;
}

function badge_type(e) {
    if (e == 1) {
        document.getElementById("username").outerHTML += image_badge("https://bark.dumorando.com/src/images/assets/badges/b_dog.png", "Dogggggg");
    } else if (e == 2) {
        document.getElementById("username").outerHTML += image_badge("https://bark.dumorando.com/src/images/assets/badges/b_dev.png", "DEVELOPERRR");
    } else if (e == 3) {
        document.getElementById("username").outerHTML += image_badge("https://bark.dumorando.com/src/images/assets/badges/b_bruh.png", "Bruh");
    } else if (e == 4) {
        document.getElementById("username").outerHTML += image_badge("https://bark.dumorando.com/src/images/assets/badges/b_lucky.png", "Lucky!");
    }
}

function setup_badges(name) {
    if (name == "marioc") {
        badge_type(1);
    }
    if (name == "marioc" || name == "breakfast" || name == "dumo" || name == "nmsderp" || name == "Rubii484Bark") {
        badge_type(2);
    }
    if (name == "RarestUsername") {
        badge_type(3);
    }
    if (name == "theOVERGOD") {
        badge_type(4);
    }
}
