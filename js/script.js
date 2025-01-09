const date = moment();
let currentDate = date.format(`MM/DD/YY`);
let currentYear = date.format(`YYYY`);
let sellByDate = date.add(3, `months`).format("MM/DD/YY");
let wholeRadio = document.querySelector("#wholeBean");
let groundRadio = document.querySelector("#ground");
let sellByDiv = document.querySelector(".sell-by");

const labelMakerContainer = document.querySelector(".label-maker-container");
const optionsContainer = document.querySelector(".options-container");
const labelPreviewContainer = document.querySelector(".label-preview-container");
const footer = document.querySelector(".footer");

function generateFooterContent() {
    const footerPara = document.createElement("p");
    footerPara.textContent = `\u00A9 ${currentYear} Devin Zebertavage`;
    footer.appendChild(footerPara);
}

generateFooterContent();
sellByDiv.textContent = sellByDate;

wholeRadio.addEventListener("click", () => {
    sellByDate = moment().add(3, `months`).format("MM/DD/YY");
    sellByDiv.textContent = sellByDate;
});

groundRadio.addEventListener("click", () => {
    sellByDate = moment().add(1, `month`).format("MM/DD/YY");
    sellByDiv.textContent = sellByDate;
});