Blockly.Blocks['change_title'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Change website title to:")
        .appendField(new Blockly.FieldTextInput("Cool title"), "TITLE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("Changes the website title");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['confirm'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("\"Ok\" button pressed on alert:")
        .appendField(new Blockly.FieldTextInput("The dog"), "CONFIRM");
    this.setOutput(true, "Boolean");
    this.setColour(105);
 this.setTooltip("Opens a alert to confirm something.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['prompt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Input of:")
        .appendField(new Blockly.FieldTextInput("What's your username?"), "ASK")
        .appendField("with the default of:")
        .appendField(new Blockly.FieldTextInput("Username"), "DEFAULT");
    this.setOutput(true, "String");
    this.setColour(105);
 this.setTooltip("Gives a input to put in a value.");
 this.setHelpUrl("");
  }
};

javascript.javascriptGenerator.forBlock['change_title'] = function(block, generator) {
  var text_title = block.getFieldValue('TITLE');
  var code = `document.title = ${text_title}`;
  return code;
};

javascript.javascriptGenerator.forBlock['confirm'] = function(block, generator) {
  var text_confirm = block.getFieldValue('CONFIRM');
  var code = `confirm(${CONFIRM})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.javascript.ORDER_NONE];
};

javascript.javascriptGenerator.forBlock['prompt'] = function(block, generator) {
  var text_ask = block.getFieldValue('ASK');
  var text_default = block.getFieldValue('DEFAULT');
  var code = `prompt(${ASK}, ${DEFAULT})`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.javascript.ORDER_NONE];
};

let randomlyBlocks = Bark.CreateCategory("Randomly", "#07f290");
randomlyBlocks.addBlock(Bark.CreateBlock("change_title"));
randomlyBlocks.addBlock(Bark.CreateBlock("confirm"));
randomlyBlocks.addBlock(Bark.CreateBlock("prompt"));

Bark.AppendCategoryToToolbox(randomlyBlocks);
