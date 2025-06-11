# How to make a Bark extension

First of all, youre gonna want to go to [the Block Factory](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html) to create a block.<br />
After you design your block, youre gonna want to copy the JSON code on the right side of the screen.<br />
Then once you do that, setup a codeblock like this, at the top of your extension file.<br />

```js
Blockly.defineBlocksWithJsonArray([
    ...your json code goes here...
]);
```

After you do that, setup the Javascript Generator for your block. You can copy the one in Block factory as a starting point.<br />
*You may need to change a few things, like var to let because of linters*<br />
Example:
```js
javascript.javascriptGenerator.forBlock['block_type'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = '...\n';
  return code;
};
```
Then, change the Javascript generator to do what you need it to do.
```js
javascript.javascriptGenerator.forBlock['dumorandoutils_coolblock'] = function(block, generator) {
  var value_name = generator.valueToCode(block, 'NAME', javascript.Order.ATOMIC);
  // TODO: Assemble javascript into code variable.
  var code = `functionthatdoessomethingidk(${value_name});\n`;
  return code;
};
```
After that, you can start creating the extension.<br />
First your gonna want to make a new category. Do that with this code.
```js
// 1st parameter is name 2nd parameter is color
let myCategory = Bark.CreateCategory("Dumorando utils", "red");
```
Then, youll wanna add a block to the category
```js
myCategory.addBlock(Bark.CreateBlock("dumorandoutils_coolblock"));
```
After you add all your blocks, then add it to the toolbox.
```js
Bark.AppendCategoryToToolbox(myCategory);
```