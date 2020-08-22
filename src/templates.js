import {row, columns} from "./utils";

function tag(path) {
    return path.options.tag;
}

function style(path) {
    return path.options.styles;
}

function title(content) {
    console.log(content.options.tag)
    return row(columns(`<${tag(content)}>${content.value}</${tag(content)}>`), style(content))
}

function text(content) {
    return row(columns(`<${tag(content)} style="margin-bottom: 0;">${content.value}</${tag(content)}>`), style(content))
}

function textColumns(content) {
    const htmlFromArray = content.value.map((item) => columns(item));
    return row(htmlFromArray.join(''), style(content));
}

export const templates = {
    title,
    text,
    textColumns
}