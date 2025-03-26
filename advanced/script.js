document.getElementById("code").value = 'let dog = new sprite("dog", 0, 0, 100);\ndog.draw();\n\n// This is an example code to show a dog';
let zoomsize = 12;
let linetabs = 0;
let code = document.getElementById("code");
let zoomindicator = document.getElementById("zi");
let notif = document.getElementById("notification");
let notifpreview = document.getElementById("notifpreview");
let notiflc = document.getElementById("notiflettercount");
let bluroverlay = document.getElementById("blur-overlay");

code.focus();

let zoom = function() {
    if (zoomsize < 50) {
        zoomsize += 4;
        code.style.fontSize = zoomsize+"pt";
    };
    code.focus();
    zoomindicator.innerText = zoomsize;
};

let zoomout = function() {
    if (zoomsize > 6) {
        zoomsize -= 4;
        code.style.fontSize = zoomsize+"pt";
    };
    code.focus();
    zoomindicator.innerText = zoomsize;
};

let resetzoom = function() {
    zoomsize = 12;
    code.style.fontSize = zoomsize+"pt";
    code.focus();
    zoomindicator.innerText = zoomsize;
};

code.addEventListener('keydown', function(e) {
    if (this.selectionEnd - this.selectionStart >= 300 && !e.ctrlKey) {
        e.preventDefault();
        notif.classList.add("open");
        bluroverlay.classList.add("on");
        notiflc.innerHTML = this.selectionEnd - this.selectionStart;
        notifpreview.innerText = code.value.substring(start, end);
    } else if (e.key == "Tab") {
        e.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
        "\t" + this.value.substring(end);
        this.selectionStart =
        this.selectionEnd = start + 1;
        if (this.value == "!\t") {
            this.value = 
            '// this is a beginner project, to help get you started!\n'+
            '\n'+
            'if (confirm("are you having a good day?")) {\n'+
            '\talert("great!");\n'+
            '} else {\n'+
            '\talert(":(");\n'+
            '};'
        };
    } else if (e.key == "(") {
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
        ")" + this.value.substring(end);
        this.selectionStart =
        this.selectionEnd = start;
    } else if (e.key == "\"") {
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
        "\"" + this.value.substring(end);
        this.selectionStart =
        this.selectionEnd = start;
    } else if (e.key == "'") {
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
        "'" + this.value.substring(end);
        this.selectionStart =
        this.selectionEnd = start;
    } else if (e.key == "[") {
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
        "]" + this.value.substring(end);
        this.selectionStart =
        this.selectionEnd = start;
    } else if (e.key == "{") {
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
        "}" + this.value.substring(end);
        this.selectionStart =
        this.selectionEnd = start;
    } else if (e.ctrlKey && e.key == "z") {
        e.preventDefault();
    } else if (e.key == "Enter") {
        if ((code.value[this.selectionStart-1] == "{" && code.value[this.selectionStart] == "}") || (code.value[this.selectionStart-1] == "[" && code.value[this.selectionStart] == "]") || (code.value[this.selectionStart-1] == "(" && code.value[this.selectionStart] == ")")) {
            let start = this.selectionStart;
            let end = this.selectionEnd;
            this.value = this.value.substring(0, start) + "\n\t\n" + this.value.substring(end);
            code.setSelectionRange(this.selectionStart-2, this.selectionStart-2);
        };
    } else if (e.ctrlKey && e.key == "/") {
        e.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;
        if (start == end) {
            this.value = this.value.substring(0, start) + "/*  */" + this.value.substring(end);
            code.setSelectionRange(start+3, start+3);
        } else {
            if (this.value.substring(start, end).includes("\n")) {
                this.value = this.value.substring(0, start) + "/* " + this.value.substring(start, end) + " */" + this.value.substring(end);
                code.setSelectionRange(start, end+6);
            } else {
                this.value = this.value.substring(0, start) + "// " + this.value.substring(start);
                code.setSelectionRange(start, end+3);
            }
        }
    };
});

let deleteselection = function() {
    code.focus();
    let start = code.selectionStart;
    let end = code.selectionEnd;
    code.value = code.value.substring(0, start)+code.value.substring(end);
    code.selectionEnd = start;
    closenotif();
};

let closenotif = function() {
    code.selectionStart = code.selectionEnd;
    notif.classList.remove("open");
    bluroverlay.classList.remove("on");
    code.focus();
};

let log = function(message) {
    document.getElementById("projecttext").innerHTML += message;
};

let clearconsole = function() {
    document.getElementById("projecttext").innerHTML = "";
};

document.getElementById("start").addEventListener("click", function() {
    document.getElementById("stage").contentWindow.postMessage(code.value, "*");
});
