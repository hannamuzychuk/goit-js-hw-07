const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const userName = event.currentTarget.value.trim();
    if (userName === "") {
        output.textContent = "Anonymous";
    } else {
            output.textContent = userName;
        }
});

// textInput.addEventListener("keydown", (event) => {
//     if (event.key === "Enter") {
//         textInput.value = "";
//         output.textContent = "Anonymous";
//     }
// });