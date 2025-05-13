function documentReplaceWord(usingid, target, word) {
    if (usingid == true) {
        document.getElementsByClassName(target)[0].innerHTML = word;
    } else {
        document.documentElement.innerHTML = document.documentElement.innerHTML.replaceAll(target, word);
    }
}

switch (localStorage.language) {
    case "en": 
        // because english is the default language DUH!!
        break;
    case "uwu":  
        // test thingy   
        break;
    case "ar":     
        break;
    case "ch":     
        break;
    case "es":     
        break;
    case "fr":     
        break;
    case "it":     
        break;
    case "ja":     
        break;
    case "pt":     
        break;
}