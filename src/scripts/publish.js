function getprojectcontent() {
    var file = document.getElementById("fileForUpload").files[0];
    if (file) {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            return evt.target.result;
        }
        reader.onerror = function (evt) {
            return "error reading file";
        }
}
}

