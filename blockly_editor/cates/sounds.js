Blockly.Blocks['play_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play sound from sound #")
        .appendField(new Blockly.FieldNumber(1), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("Plays sound by the typed in URL.");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['play_sound_url'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play sound by URL")
        .appendField(new Blockly.FieldTextInput("https://bark.dumorando.com/src/bark.mp3"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(345);
 this.setTooltip("Plays sound by the typed in URL.");
 this.setHelpUrl("");
  }
};
