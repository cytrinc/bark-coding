      Blockly.Blocks['alert_block'] = {
        init: function () {
          this.appendValueInput("message")
            .setCheck("String")
            .appendField("alert");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(150);
          this.setTooltip("Alert message to user");
          this.setHelpUrl("");
        }
      };

Blockly.Blocks['letters_from'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("letters from")
        .appendField(new Blockly.FieldNumber(0, 0, 999), "FIRST")
        .appendField("to")
        .appendField(new Blockly.FieldNumber(5, 0, 999), "LAST")
        .appendField("of");
    this.setOutput(true, "String");
    this.setColour(165);
 this.setTooltip("Returns the string from 2 number inputs in a variable.");
 this.setHelpUrl("https://scratch.mit.edu/users/legoer3/#comments");
  }
};

      Blockly.Blocks['confirm_block'] = {
        init: function () {
          this.appendValueInput("message")
            .setCheck("String")
            .appendField("confirm");
          this.setOutput(true, "Boolean");
          this.setColour(150);
          this.setTooltip("Let user comfirm if a message is true");
          this.setHelpUrl("");
        }
      };
      Blockly.Blocks['prompt_block'] = {
        init: function () {
          this.appendValueInput("message")
            .setCheck(null)
            .appendField("prompt");
          this.setOutput(true, "String");
          this.setColour(150);
          this.setTooltip("Make the user answer a query");
          this.setHelpUrl("");
        }
      };

      Blockly.Blocks['fetch'] = {
        init: function () {
          this.appendValueInput("url")
            .setCheck("String")
            .appendField("fetch");
          this.setOutput(true, null);
          this.setColour(150);
          this.setTooltip("Fetch static data from servers!");
          this.setHelpUrl("");
        }
      };
