Blockly.Blocks['default'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Block name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(255);
    this.setTooltip("lorem ipsum");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['create_elm'] = {
  init: function () {
    this.appendEndRowInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("create element")
      .appendField(new Blockly.FieldTextInput("dog"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("Creates an element.");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['delete_elm'] = {
  init: function () {
    this.appendEndRowInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("delete element")
      .appendField(new Blockly.FieldTextInput("dog"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip("Deletes an element.");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['get_elm'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("get element")
      .appendField(new Blockly.FieldTextInput("dog"), "NAME");
    this.setOutput(true, "String");
    this.setColour(0);
    this.setTooltip("Gets an element by it's name.");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['custom_forever'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Forever");
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip("Does the code when the green button is clicked.");
    this.setHelpUrl("");
  }
};
Blockly.Blocks['when_barked'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("when barked")
      .appendField(new Blockly.FieldImage("https://em-content.zobj.net/source/microsoft/379/dog-face_1f436.png", 20, 20, { alt: "A doggy from Mirosoft!", flipRtl: "FALSE" }));
    this.appendStatementInput("WHENBARKED")
      .setCheck(null);
    this.setColour(20);
    this.setTooltip("Detects when you clicked on the \"bark\" block!");
    this.setHelpUrl("https://scratch.mit.edu/users/LoganCreatz#comments");
  }
};
