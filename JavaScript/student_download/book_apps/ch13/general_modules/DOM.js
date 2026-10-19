function get(selector) {
    return document.querySelector(selector);
}

function setText(selector, text) {
    get(selector).textContent = text;
}

function setValue(selector, value) {
    get(selector).value = value;
}

function getValue(selector) {
    return get(selector).value;
}

function clear(selector) {
    const elem = get(selector);
    if (elem.value) elem.value = "";
    else elem.textContent = "";
}

function focus(selector) {
    get(selector).focus();
}

function select(selector) {
    get(selector).select();
}

function load(func) {
    document.addEventListener("DOMContentLoaded", func);
}

function addClick(selector, func) {
    get(selector).addEventListener("click", func);
}

export {get, setText, setValue, getValue, clear, 
    focus, select, load, addClick};