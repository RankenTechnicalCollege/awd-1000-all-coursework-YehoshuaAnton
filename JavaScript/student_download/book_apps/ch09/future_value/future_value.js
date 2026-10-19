"use strict";

const getElement = selector => document.querySelector(selector);

const clearMessages = () => {
    getElement("#investment").nextElementSibling.textContent = "*";
    getElement("#years").nextElementSibling.textContent = "*";
    getElement("#message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const form = getElement("form");
    form.noValidate = true;

    for (let element of form.elements) {
        element.addEventListener("invalid", evt => {
            const elem = evt.currentTarget;
            const span = elem.nextElementSibling;
            if (span) span.textContent = elem.validationMessage;
        });
    }
    
    form.addEventListener("submit", evt => {
        clearMessages();
        evt.preventDefault();  // prevent form submission in all cases

        // get future value text box and clear any previous value
        const fv = getElement("#future_value");
        fv.value = "";

        // if form is valid, display future value or error message
        if (form.checkValidity()) {
            try {
                const investment = getElement("#investment").value;
                const years = getElement("#years").value;
                fv.value = calcFutureValue(investment, years);
            } catch(e) {
                const msg = `${e.name}: ${e.message}`;
                getElement("#message").textContent = msg;
            }
        }
    });

    getElement("#clear").addEventListener("click", () => {
        clearMessages();
        getElement("#investment").focus();
    });
});
