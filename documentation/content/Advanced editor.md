# Advanced Editor
The advanced editor was created by [rayne cloudy](https://github.com/raynecloudy). It runs JavaScript with added features optimized for Bark.

## Commands

- `clearconsole()` -> void

Clears the terminal.

- `log(str)` -> void

Adds `str` and a newline to the console.

- `text(x, y, text, font, color)` -> void

Draws text on the stage.

- `rect(x, y, width, height, background-color)` -> void

Draws a rectangle on the stage.

## Objects

### `sprite`

#### Parameters

`new sprite(type="dog", x=0, y=0, size=100)`

- `type`: The type of sprite (the only option as of now is `"dog"`)
- `x`: How many pixels from the left edge of the stage. Anchored at the left of the sprite.
- `y`: How many pixels from the top edge of the stage. Anchored at the top of the sprite.
- `size`: How large the sprite is, in %.

#### Methods
- `draw()`: Renders the sprite.

## Variables

### Check mouse keys

These variables tell you if the selected key is being pressed.

- `kb_left_arrow`

If left arrow key pressed.

- `kb_right_arrow`

If right arrow key pressed.

- `kb_up_arrow`

If up arrow key pressed.

- `kb_down_arrow`

If down arrow key pressed.

[Edit this page.](https://github.com/mariocraft987/bark-coding/edit/main/documentation/content/Advanced%20editor.md)
