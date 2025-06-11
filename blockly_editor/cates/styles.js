      Blockly.Blocks['change_costume'] = {
        init: function () {
          this.appendValueInput("NAME")
            .setCheck("String")
            .appendField("switch costume to");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(260);
          this.setTooltip("Changes the costume to a specific one.");
          this.setHelpUrl("");
        }
      };

      Blockly.Blocks['next_costume'] = {
        init: function () {
          this.jsonInit({
            "type": "next_costume",
            "message0": "next costume",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 260,
            "tooltip": "Switches to the next costume",
            "helpUrl": ""
          });
        }
      };
      Blockly.Blocks['reset_size'] = {
        init: function () {
          this.jsonInit({
            "type": "resetsize",
            "message0": "reset size",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 260,
            "tooltip": "Resets the size",
            "helpUrl": ""
          });
        }
      };

      Blockly.Blocks['change_stage_bg'] = {
        init: function () {
          this.appendDummyInput()
            .appendField("change stage bg to")
            .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(260);
          this.setTooltip("");
          this.setHelpUrl("");
        }
      };

      Blockly.Blocks['change_size'] = {
        init: function () {
          this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("change size by");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(260);
          this.setTooltip("Changes the size.");
          this.setHelpUrl("");
        }
      };
      Blockly.Blocks['set_size'] = {
        init: function () {
          this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("set size to");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(260);
          this.setTooltip("Sets the size to a specific value.");
          this.setHelpUrl("");
        }
      };

Blockly.Blocks['style_change'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
        .appendField(new Blockly.FieldDropdown([["Size","SIZE"], ["Brightness","BRIGHT"], ["Hue","COLOR"]]), "TYPE")
        .appendField("to")
        .appendField(new Blockly.FieldNumber(0), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['style_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set")
        .appendField(new Blockly.FieldDropdown([["Size","SIZE"], ["Brightness","BRIGHT"], ["Hue","COLOR"]]), "TYPE")
        .appendField("to")
        .appendField(new Blockly.FieldNumber(0), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['new_img_uri'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("New img URI")
        .appendField(new Blockly.FieldTextInput("data:image..."), "NAME");
    this.setOutput(true, null);
    this.setColour(330);
 this.setTooltip("Returns an image URI.");
 this.setHelpUrl("");
  }
};
