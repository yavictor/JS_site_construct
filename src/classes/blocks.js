import {columns, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }
    toHTML() {
        throw new Error('Method toHTML must be realized!')
    }
}

export class TitleBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {tag = 'h2', styles} = this.options
        return row(columns(`<${tag}>${this.value}</${tag}>`), styles)
    }
}

export class ImageBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {alt, styles, imageStyles} = this.options;
        const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}">`
        return row(html, styles)
    }
}

export class TextColumnsBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const htmlFromArray = this.value.map((item) => columns(item));
        return row(htmlFromArray.join(''), this.options.styles);
    }
}

export class TextBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }

    toHTML() {
        const {tag, styles} = this.options
        return row(columns(`<${tag} style="margin-bottom: 0;">${this.value}</${tag}>`), styles)
    }
}