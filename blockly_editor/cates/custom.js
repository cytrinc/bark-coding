      Blockly.Blocks['test_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Lorem lpsum...");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("A test block, won't work.");
 this.setHelpUrl("");
  }
};

      Blockly.Blocks['end_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("End");
    this.setPreviousStatement(true, null);
    this.setColour(330);
 this.setTooltip("A more organized way of ending your scripts.");
 this.setHelpUrl("");
  }
};

      Blockly.Blocks['random_dorito'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("DORITOS")
        .appendField(new Blockly.FieldImage("https://bark.dumorando.com/src/emojis/svg/normal/smiley.svg", 20, 20, { alt: ":)", flipRtl: "FALSE" }));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("idk");
 this.setHelpUrl("");
  }
};

      Blockly.Blocks['reapete'] = {
  init: function() {
    this.appendStatementInput("NAME")
        .setCheck(null)
        .appendField("Start when \"∞\" ends");
    this.setColour(45);
 this.setTooltip("Starts the code until \"∞\" ends.");
 this.setHelpUrl("https://www.youtube.com/watch?v=j98suMfW1tc");
  }
};

Blockly.Blocks['bruh_wait'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait for")
        .appendField(new Blockly.FieldNumber(0, 0), "NAME")
        .appendField("secs");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
 this.setTooltip("Waits for a specific time.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['custom_onstop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when")
        .appendField(new Blockly.FieldImage("https://bark.dumorando.com/src/projecttoolbar/stopped.svg", 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField("clicked");
    this.appendStatementInput("start")
        .setCheck(null);
    this.setColour(20);
 this.setTooltip("Does the code when the stop button is clicked.");
 this.setHelpUrl("");
  }
};
