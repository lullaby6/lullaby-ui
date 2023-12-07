function querySetAttribute(parent, query, attribute, value) {
    const element = parent.querySelector(query);
    if (element) parent.setAttribute(attribute, value);
}

function querySetMultipleAttribute(parent, query, attributes) {
    const element = parent.querySelector(query);
    if (element) attributes.forEach(attribute => element.setAttribute(attribute[0], attribute[1]));
}

function querySetAttributeAll(parent, query, attribute, value) {
    const elements = parent.querySelectorAll(query);
    elements.forEach(element => element.setAttribute(attribute, value))
}

function querySetMultipleAttributeAll (parent, query, attributes) {
    const elements = parent.querySelectorAll(query);
    elements.forEach(element => attributes.forEach(attribute => element.setAttribute(attribute[0], attribute[1])))
}

window.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelectorAll('.modal');
    modal.forEach(modal => {
        modal.setAttribute('x-data', "{ show_modal: false }");

        querySetAttributeAll(modal, '.modal-open', 'x-on:click', "show_modal = true");
        querySetAttributeAll(modal, '.modal-close', 'x-on:click', "show_modal = false");

        querySetMultipleAttribute(modal, '.modal-container', [
            ['x-show', 'show_modal'],
            ['x-transition.opacity', ''],
        ])
    })

    const inputAutoWidth = document.querySelectorAll('.input-auto-width');
    inputAutoWidth.forEach(input => {
        input.addEventListener('input', () => {
            input.style.width = `${input.value.length}ch`;
        })
    })
})