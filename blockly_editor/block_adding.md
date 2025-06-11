# Making Blocks
### This tutorial was written by @nmsderp, feel free to add more if needed
*NOTE: Making blocks requires basic knowledge of xml, and some decent knowledge of JavaScript*
  
*NOTE 2: IT WILL MAKE YOUR LIFE EASIER TO USE BLOCKLY BLOCK FACTORY: [Block Factory](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html)*

*NOTE 3: if you wanna request blocks for us to make, create a discussion in Block Requests and we will make it if ideas are good.*
  
First we need to design our block, the block code may look like this:
```javascript
Blockly.Blocks['movement_move'] = { // Moves sprite
        init: function() {
          this.jsonInit({
            "type": "movement_move", // Block Id
            "message0": "move", // Block text
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230, // Block color
            "tooltip": "", // Block tip
            "helpUrl": "" // Block help URL
          });
        }
      };
```
Then we add the block design to `custom.js`, 
After that we need to add it to the toolbox in `editor/`
```xml
<block type="movement_move">
          <field name="NAME">3</field>
        </block>
```
In Blockly code is ran with generators, in our code we have to define what the blocks do:
```javascript
javascript.javascriptGenerator.forBlock['change_stage_bg'] = function(block, generator) {
        let colorValue = block.getFieldValue('NAME');
        return "changebg('" + colorValue + "');";
    };
```
*TIP: By using block.getFieldValue('value name here'); you can get values from the blocks!*
  
Almost all functions for the new blocks are located inside of `sketch.js` this is basically the vm of this project. An example is below.
```javascript
function changebg(color) {
  // Set the background color to the provided color
  bgColor = color;
}
```
after that the block is now in the blockbar!

![picture of block](blockpic.png)

*Last updated April 19th, 2024*

<!--
    Make sure to change date to the current commit date!
-->
