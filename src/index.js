import './styles/main.css'
import {model} from "./model";

const site = document.querySelector('#site')

model.forEach((el) => site.insertAdjacentHTML('beforeend', el.toHTML()));



