let date = moment();
let currentDate = date.format(`MM/DD/YYYY`);
let currentYear = date.format(`YYYY`);
let sellByDate = moment().add(3, `months`).calendar();

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