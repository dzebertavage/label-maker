const date = moment();
let currentYear = date.format(`YYYY`);
let sellByDate = date.add(3, `months`).format("MM/DD/YY");

const wholeRadio = document.querySelector("#wholeBean");
const groundRadio = document.querySelector("#ground");
const changeDateCheck = document.querySelector("#changeDate");
const newDateField = document.querySelector("#newDate");
const coffeeDropDown = document.querySelector("#coffeeSelect");
const groundBanner = document.querySelector(".ground-coffee-banner");
const groundSelectDiv = document.querySelector(".groundSelect");
const groundSelectRange = document.querySelector("#groundSelectRange");
const groundNumPreview = document.querySelector(".groundNumPreview");
const fivePoundsRadio = document.querySelector("#fivePounds");
const onePoundRadio = document.querySelector("#onePound");
const weight = document.querySelector(".weight");

const sellByDiv = document.querySelector(".sell-by");
const coffeeNameDiv = document.querySelector(".coffee-name");
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
weight.textContent = "Net Weight 80oz / 5lbs / 2.27kg";

function updateRangeNumber(val) {
    let tempDiv = document.querySelector(".ground-coffee-banner");
    tempDiv.textContent = "Ground #" + val;
    groundNumPreview.textContent = val;
}

wholeRadio.addEventListener("click", () => {
    groundBanner.style.display = "none";
    groundSelectDiv.style.display = "none";
    changeDateCheck.checked = false;
    newDateField.disabled = true;
    newDateField.value = "";
    sellByDate = moment().add(3, `months`).format("MM/DD/YY");
    sellByDiv.textContent = sellByDate;
});

groundRadio.addEventListener("click", () => {
    groundBanner.style.display = "block";
    groundSelectDiv.style.display = "flex";
    changeDateCheck.checked = false;
    newDateField.disabled = true;
    newDateField.value = "";
    sellByDate = moment().add(1, `month`).format("MM/DD/YY");
    sellByDiv.textContent = sellByDate;
});

fivePoundsRadio.addEventListener("click", () => {
    onePoundRadio.checked = false;
    weight.textContent = "Net Weight 80oz / 5lbs / 2.27kg"
});

onePoundRadio.addEventListener("click", () => {
    fivePoundsRadio.checked = false;
    weight.textContent = "Net Weight 16oz / 1lb / 454g"
});

changeDateCheck.addEventListener("change", () => {
    if (changeDateCheck.checked === true) {
        newDateField.disabled = false;
    } else {
        if (wholeRadio.checked === true) {
            sellByDate = moment().add(3, `months`).format("MM/DD/YY");
            sellByDiv.textContent = sellByDate;
        } else {
            sellByDate = moment().add(1, `month`).format("MM/DD/YY");
            sellByDiv.textContent = sellByDate;
        }
        newDateField.value = "";
        newDateField.disabled = true;
    }
});

newDateField.addEventListener("change", () => {
    let newDateFormatted = newDateField.value;
    let sliced = newDateFormatted.slice(5, 7) + "/" + newDateFormatted.slice(8, 10) + "/" + newDateFormatted.slice(2, 4);
    sellByDiv.textContent = sliced;
});

coffeeDropDown.addEventListener("change", () => {
    let newCoffeeName = coffeeDropDown.value;
    coffeeNameDiv.textContent = newCoffeeName;
});