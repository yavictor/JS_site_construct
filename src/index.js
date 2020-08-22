import './styles/main.css'
import {model} from "./model";
import {templates} from "./templates";

const site = document.querySelector('#site')

model.forEach((el) => {
    const generate = templates[el.type];
    if (generate) {
        const html = generate(el);
        site.insertAdjacentHTML('beforeend', html);
    }
    // if (el.type === 'title') {
    //     html = templates.title(el)
    // } else if (el.type === 'text') {
    //     html = templates.text(el);
    // } else if (el.type === 'textColumns') {
    //     html = templates.textColumns(el);
    // }


})



