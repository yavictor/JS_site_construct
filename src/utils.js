export function row(content, styles = '') {
    return `<div class="row" style="${styles}">${content}</div>`
}

export function columns(content) {
    return `<div class="col-sm">${content}</div>`
}