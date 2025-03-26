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
        documentReplaceWord(false, "Wussup", "hi");
        documentReplaceWord(true, "barkfromblockly", "bark added to blocky");
        documentReplaceWord(true, "barkinspiredscratch", "bark amazed by scratch");
        documentReplaceWord(true, "createdby", "create by me and other people");
        break;
}