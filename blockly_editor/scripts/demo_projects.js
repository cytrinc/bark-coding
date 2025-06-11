/* 
    https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
*/

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let projectType = getParameterByName('project');

if (projectType != null) { // do nothing if param is not exist
    console.log(projectType)
}