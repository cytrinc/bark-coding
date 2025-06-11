Blockly.Blocks['onreturn'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("return");
    this.setPreviousStatement(true, null);
    this.setColour(315);
 this.setTooltip("Returns a value");
 this.setHelpUrl("");
  }
};
      Blockly.Blocks['onfunction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("on function")
        .appendField(new Blockly.FieldTextInput("move"), "FUNC");
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("do");
    this.setColour(315);
 this.setTooltip("Code of a function of the chosen name");
 this.setHelpUrl("https://www.w3schools.com/js/js_functions.asp");
  }
};
    Blockly.Blocks['dofunction'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("do function")
        .appendField(new Blockly.FieldTextInput("move"), "FUNC");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("Does a function of the chosen name");
 this.setHelpUrl("https://www.w3schools.com/js/js_functions.asp");
  }
};
