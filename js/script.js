const date = new Date();
const year = date.getFullYear();
const labelMakerContainer = document.querySelector(".label-maker-container");
const optionsContainer = document.querySelector(".options-container");
const labelPreviewContainer = document.querySelector(".label-preview-container");
const footer = document.querySelector(".footer");

function generateFooterContent() {
    const footerPara = document.createElement("p");
    footerPara.textContent = `\u00A9 ${year} | Devin Zebertavage`;
    footer.appendChild(footerPara);
}

generateFooterContent();