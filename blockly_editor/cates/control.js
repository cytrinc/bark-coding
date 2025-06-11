      Blockly.Blocks['forever'] = {
        init: function () {
          this.appendDummyInput()
            .appendField("forever");
          this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("do");
          this.setPreviousStatement(true, null);
          this.setColour(120);
          this.setTooltip("Does code forever.");
          this.setHelpUrl("");
        }
      };
