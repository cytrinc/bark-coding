
Blockly.Blocks['sine_move'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("sine wave move y");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("Sine Moves Sprite by Y");
      this.setHelpUrl("https://en.wikipedia.org/wiki/Sine_and_cosine");
    }
  };
  Blockly.Blocks['sine_size'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("sine wave size");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("Sizes Sprite Using Sine");
      this.setHelpUrl("https://en.wikipedia.org/wiki/Sine_and_cosine");
    }
  };
  Blockly.Blocks['sine_move2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("sine wave move x");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(180);
      this.setTooltip("Sine Moves Sprite By X");
      this.setHelpUrl("https://en.wikipedia.org/wiki/Sine_and_cosine");
    }
  };

javascript.javascriptGenerator.forBlock['sine_move'] = function (block, generator) {
    return "sineMove();";
  };
  javascript.javascriptGenerator.forBlock['sine_move2'] = function (block, generator) {
    return "sineMove2();";
  };
  javascript.javascriptGenerator.forBlock['sine_size'] = function (block, generator) {
    return "sizeOscillation();";
  };

let sineCategory = Bark.CreateCategory("Sine", "#19b9c2");
sineCategory.addBlock(Bark.CreateBlock("sine_move"));
sineCategory.addBlock(Bark.CreateBlock("sine_move2"));
sineCategory.addBlock(Bark.CreateBlock("sine_size"));

Bark.AppendCategoryToToolbox(sineCategory);
