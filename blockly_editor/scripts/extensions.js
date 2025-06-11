// Bark extension API

(() => {
    "use strict";

    const Bark = {};

    class Category {
        constructor(categoryelement) {
            this.element = categoryelement;
        }

        addBlock(blkclass) {
            this.element.appendChild(blkclass.element);
        }

        setColor(color) {
            this.element.setAttribute('colour', color);
        }

        setName(name) {
            this.element.setAttribute('name', name);
        }
    }

    class Block {
        constructor(blockid) {
            this.element = document.createElement('block');
            this.element.setAttribute('type', blockid);
        }

        addField(name, defaultvalue) {
            const newfield = document.createElement('field');
            newfield.setAttribute('name', name);
            newfield.innerText = defaultvalue;
            this.element.appendChild(newfield);
        }
    }

    Bark.CreateCategory = (name, color) => {  
        const category = document.createElement('category');
        category.setAttribute('name', name);
        category.setAttribute('colour', color);

        return new Category(category);
    }

    Bark.CreateBlock = (id) => {
        return new Block(id);
    }

    Bark.AppendCategoryToToolbox = (category) => {
        let toolbox = document.getElementById('toolbox');
        toolbox.appendChild(category.element);
        window.workspace.updateToolbox(toolbox);
    }

    window.Bark = Bark;
})();