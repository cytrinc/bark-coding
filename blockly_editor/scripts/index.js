'use strict';

function start() {
  // Create main workspace.
  window.workspace = Blockly.inject('blocklyDiv', {
    toolbox: document.getElementById('toolbox-categories'),
    renderer: 'zelos',
  });
}
