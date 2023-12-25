
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", e => {

    let inputData = e.currentTarget.value.trim();
    
    if (! inputData.replace(/\s/g, '').length) {
        e.currentTarget.value = "";
        inputData = "Anonymous";
    }

    output.textContent = inputData;
});