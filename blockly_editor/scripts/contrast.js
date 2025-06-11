// All list colors are sorted by order in the category orders

function contrastBlocks(isone) {
// true = blocks on contrast, false = blocks on normal color

let normalcolors = ["#cf9100", "#3399ff", "#689c00", "#c7b31c", "#1b85d1", "#21d9b7", "#f2951b", "#f2461b", "#e643d2", "#e643d2", "#0fbd8c", "#a826ff"]

let contrastcolors = ["#ffce5c", "#8ac4ff", "#c6ff54", "#ffee6b", "#51aced", "#91ffeb", "#ffc170", "#ff8b6e", "#ff94f2", "#e643d2", "#7dfad7", "#d08aff"]

for (let i = 0; i < 12; i++) {
  if (isone == 1) {
    document.getElementById("blockly-" + i).style.backgroundColor = contrastcolors[i];
    document.getElementById("blockly-" + i + ".label").classList.remove("blocklyTreeLabel");
    document.getElementById("blockly-" + i + ".label").classList.add("blocklyTreeLabelContrast");
    localStorage.contrast = 1;
  } else {
    document.getElementById("blockly-" + i).style.backgroundColor = normalcolors[i];
    document.getElementById("blockly-" + i + ".label").classList.add("blocklyTreeLabel");
    document.getElementById("blockly-" + i + ".label").classList.remove("blocklyTreeLabelContrast");
    localStorage.contrast = 0;
    }
  }
} 

