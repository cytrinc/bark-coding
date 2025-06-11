Blockly.Blocks['fetch_user'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Get Bark User")
        .appendField(new Blockly.FieldTextInput("BlueOrange"), "USER")
        .appendField(new Blockly.FieldDropdown([["Username","NAME"], ["Pfp in Data URI","PFP"], ["Bio","BIO"], ["Is Bark team?","TEAM"]]), "TYPE");
    this.setOutput(true, "String");
    this.setColour(30);
 this.setTooltip("Fetches the Bark user's data");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['api_working'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Is API Working?");
    this.setOutput(true, "Boolean");
    this.setColour(30);
 this.setTooltip("BAPIV2 working?");
 this.setHelpUrl("https://github.com/dumorando/bapiv2/");
  }
};

let barkapiCategory = Bark.CreateCategory("Bark API", "#ffa538");
barkapiCategory.addBlock(Bark.CreateBlock("fetch_user"));
barkapiCategory.addBlock(Bark.CreateBlock("api_working"));

Bark.AppendCategoryToToolbox(barkapiCategory);
