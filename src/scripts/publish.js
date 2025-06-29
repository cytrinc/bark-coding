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

  document.getElementById("publishbutton3427408932750943703827").addEventListener('click', async () => {
    const postcommentresponse = await fetch(`https://api.bark.dumorando.com/api/v2/publish?token=${encodeURIComponent(token)}&title=${encodeURIComponent(document.getElementById("title").value)}&description=${encodeURIComponent(document.getElementById("description").value)}`, {
      method: 'POST',
      headers: { 
        'Content-type': 'application/json'
      },  
    });
    if (postcommentresponse.status == 400) {
      document.getElementById("commenterror").innerHTML = "400: Invalid Request!";
    }
    else if (postcommentresponse.status == 404) {
      document.getElementById("commenterror").innerHTML = "404: Account not found!";
    } else {
	location.reload();
    }
  });
  