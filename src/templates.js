import {row, columns} from "./utils";

function tag(path) {
    return path.options.tag;
}

function style(path) {
    return path.options.styles;
}

function title(content) {
    const {tag, styles} = content.options;
    return row(columns(`<${tag}>${content.value}</${tag}>`), styles)
}

function image(content) {
    const {alt, styles, imageStyles} = content.options;
    const html = `<img src="${content.value}" alt="${alt}" style="${imageStyles}">`
    return row(html, styles)
}

function text(content) {
    return row(columns(`<${content)} style="margin-bottom: 0;">${content.value}</${tag(content)}>`), style(content))
}

function textColumns(content) {
    const htmlFromArray = content.value.map((item) => columns(item));
    return row(htmlFromArray.join(''), style(content));
}

export const templates = {
    title,
    text,
    textColumns,
    image
}