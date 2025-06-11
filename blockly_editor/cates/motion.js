Blockly.Blocks['set_xy_pos'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("Set sprite X to:")
        .appendField(new Blockly.FieldTextInput("0"), "X")
        .appendField("Y to:")
        .appendField(new Blockly.FieldTextInput("0"), "Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Sets the X & Y pos to a value.");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['set_position'] = {
        init: function () {
          this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("set")
            .appendField(new Blockly.FieldDropdown([["x", "X"], ["y", "Y"]]), "XY")
            .appendField("position to");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
          this.setTooltip("Sets either X or Y position to a specific value");
          this.setHelpUrl("");
        }
      };
      Blockly.Blocks['get_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get")
        .appendField(new Blockly.FieldDropdown([["x","X"], ["y","Y"]]), "XY")
        .appendField("position");
    this.setOutput(true, "Number");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
      Blockly.Blocks['movement_move_x'] = {
        init: function () {
          this.appendValueInput("NUM")
            .setCheck("Number")
            .appendField("change x by");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
        }
      };
      Blockly.Blocks['movement_move_y'] = {
        init: function () {
          this.appendValueInput("NUM")
            .setCheck("Number")
            .appendField("change y by");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
          this.setTooltip("");
          this.setHelpUrl("");
        }
      };
      Blockly.Blocks['point_in_dir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Point in direction")
        .appendField(new Blockly.FieldAngle(90), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Point in the direction of the value.");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['goto_mouse'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Go to mouse pointer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Moves the sprite to the mouse");
 this.setHelpUrl("");
  }
};
/*
      Blockly.Blocks['goto_mouse'] = { // Moves sprite to mouse
        init: function () {
          this.jsonInit({
            "type": "goto_mouse",
            "message0": "go to mouse pointer",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
          });
        }
      };
*/
      Blockly.Blocks['center'] = { // Moves sprite to 0, 0
        init: function () {
          this.jsonInit({
            "type": "center",
            "message0": "center",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
          });
        }
      };

    // Old BETA editor code
      Blockly.Blocks['movement_moveback'] = { // Moves sprite back
        init: function () {
          this.jsonInit({
            "type": "movement_moveback",
            "message0": "move back",
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
          });
        }
      };
