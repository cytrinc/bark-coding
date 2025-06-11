let isFullScreen = true

function NewtoggleFullscreen() {
  if (isFullScreen == true) { // checks if fullscreen is true
    document.getElementById("blocklyDiv").style.display = "block";
    document.getElementById("xysize").style.display = "block";
    document.getElementById("editortabs").style.display = "block";
    document.getElementById("defaultCanvas0").style.width = "640px"
    document.getElementById("defaultCanvas0").style.height = "360px"
    isFullScreen = false
  }else{
    document.getElementById("blocklyDiv").style.display = "none";
    document.getElementById("xysize").style.display = "none";
    document.getElementById("editortabs").style.display = "none";
    document.getElementById("defaultCanvas0").style.width = "710px"
    document.getElementById("defaultCanvas0").style.height = "430px"
    isFullScreen = true
  }
}
