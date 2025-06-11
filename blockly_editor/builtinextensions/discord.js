Blockly.Blocks['db_run'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("run discord bot with token:")
        .appendField(new Blockly.FieldTextInput("token"), "TOKEN")
        .appendField("cmd prefix")
        .appendField(new Blockly.FieldTextInput("!"), "CP");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['db_cmd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("bot command:")
        .appendField(new Blockly.FieldTextInput("ping"), "CMD");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['db_send'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(null)
        .appendField("send");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['db_send'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(null)
        .appendField("send");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['db_reply'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(null)
        .appendField("reply");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['db_embed'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(null)
        .appendField("Text");
    this.appendDummyInput();
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("embed");
    this.setOutput(true, null);
    this.setColour(135);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

let discordCategory = Bark.CreateCategory("Discord", "#5865f2");

discordCategory.addBlock(Bark.CreateBlock("db_run"));
discordCategory.addBlock(Bark.CreateBlock("db_cmd"));
discordCategory.addBlock(Bark.CreateBlock("db_send"));
discordCategory.addBlock(Bark.CreateBlock("db_reply"));
discordCategory.addBlock(Bark.CreateBlock("db_embed"));

Bark.AppendCategoryToToolbox(discordCategory);
