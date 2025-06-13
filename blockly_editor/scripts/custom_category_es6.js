/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The toolbox category built during the custom toolbox codelab, in es6.
 * @author aschmiedt@google.com (Abby Schmiedt)
 */

class CustomCategory extends Blockly.ToolboxCategory {
    /**
     * Constructor for a custom category.
     * @override
     */
    constructor(categoryDef, toolbox, opt_parent) {
      super(categoryDef, toolbox, opt_parent);
    }
  
    /**
     * Adds the colour to the toolbox.
     * This is called on category creation and whenever the theme changes.
     * @override
     */
    addColourBorder_(colour) {
      this.rowDiv_.style.borderRadius = '12px';
      this.rowDiv_.style.backgroundColor = colour;
      this.rowDiv_.style.transition = "0.1s";
    }
  
    /**
     * Sets the style for the category when it is selected or deselected.
     * @param {boolean} isSelected True if the category has been selected,
     *     false otherwise.
     * @override
     */
    setSelected(isSelected) {
      // We do not store the label span on the category, so use getElementsByClassName.


    }
  
    /**
     * Creates the dom used for the icon.
     * @returns {HTMLElement} The element for the icon.
     * @override
     */
    createIconDom_() {
      const iconImg = document.createElement('img');
      iconImg.src = '/blockly_editor/logo_only.svg';
      iconImg.alt = 'Blockly Logo';
      iconImg.width = '25';
      iconImg.height = '25';
      return iconImg;
    }
  }
  
  Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    CustomCategory,
    true,
  );
