import "./styles.css";

import { initialPageLoad} from './initialPageLoad.js';
import {createMenu} from './menuPage.js';
import {makeAbout} from './aboutPage.js';

const homeBtn = document.querySelector('#home-btn');
const menuBtn = document.querySelector('#menu-btn');
const aboutBtn = document.querySelector('#about-btn');


function removeContent() {
    const content = document.querySelector('#content');
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

homeBtn.addEventListener('click', () => {
    removeContent()
    initialPageLoad();
})

menuBtn.addEventListener('click', () => {
    removeContent()
    createMenu();
})

aboutBtn.addEventListener('click', () => {
    removeContent()
    makeAbout();
})