let typeSelector = document.getElementById("unittype");
let topInput = document.getElementById("topinput");
let bottomInput = document.getElementById("bottominput");
let topUnitSelector = document.getElementById("topunitselector");
let bottomUnitSelector = document.getElementById("bottomunitselector");
const classes = ["Area", "Mass", "Length", "Volume"]
function hideUnwantedUnits() {
    let toUnHide = document.getElementsByClassName(typeSelector.value);
    for (let unit of toUnHide) {
        unit.classList.remove("hidden")
    };

    let notThisClass = classes.filter(className => className !== typeSelector.value);
    for (let className of notThisClass) {
        let toHide = document.getElementsByClassName(className);
        for (let unit of toHide) {
            unit.classList.add("hidden");
        }
    };

    let unitSelectors = document.getElementsByClassName("unitselector")
    for (let unitSelector of unitSelectors) {
        unitSelector.value = "";
    }

    let numberInputs = document.getElementsByClassName("numberinput")
    for (let numberInput of numberInputs) {
        numberInput.value = "";
    }
};
typeSelector.addEventListener("change", (e) => hideUnwantedUnits());

const unitDict = new Map([
    ["Square kilometer", 1],
    ["Square meter", 1000000],
    ["Square mile", 0.386102],
    ["Square yard", 1196000],
    ["Square foot", 10760000],
    ["Square inch", 1550000000],
    ["Hectare", 100],
    ["Acre", 247.105],

    ["Metric ton", 1],
    ["Kilogram", 1000],
    ["Gram", 1000000],
    ["Milligram", 1000000000],
    ["Microgram", 1000000000000],
    ["Imperial ton", 0.984207],
    ["US ton", 1.10231],
    ["Stone", 157.473],
    ["Pound", 2204.62],
    ["Ounce", 35274],

    ["Kilometer", 1],
    ["Meter", 1000],
    ["Centimeter", 100000],
    ["Millimeter", 1000000],
    ["Micrometer", 1000000000],
    ["Nanometer", 1000000000000],
    ["Mile", 0.621371],
    ["Yard", 1093.61],
    ["Foot", 3280.84],
    ["Inch", 39370.1],
    ["Nautical mile", 0.539957],

    ["US liquid gallon", 1],
    ["US liquid quart", 4],
    ["US liquid pint", 8],
    ["US legal cup", 15.7725],
    ["US fluid ounce", 128],
    ["US tablespoon", 256],
    ["US teaspoon", 768],
    ["Cubic Meter", 0.00378541],
    ["Liter", 3.78541],
    ["Milliliter", 3785.41],
    ["Imperial gallon", 0.832674],
    ["Imperial quart", 3.3307],
    ["Imperial pint", 6.66139],
    ["Imperial cup", 13.3228],
    ["Imperial fluid ounce", 133.228],
    ["Imperial tablespoon", 213.165],
    ["Imperial teaspoon", 639.494],
    ["Cubic foot", 0.133681],
    ["Cubic inch", 231],
]);

function convertTopToBottom() {
    let converted = parseFloat(topInput.value) / unitDict.get(topUnitSelector.value) * unitDict.get(bottomUnitSelector.value);
    bottomInput.value = isNaN(converted) ? "" : converted;
}
function convertBottomToTop() {
    let converted = parseFloat(bottomInput.value) / unitDict.get(bottomUnitSelector.value) * unitDict.get(topUnitSelector.value);
    topInput.value = isNaN(converted) ? "" : converted;
}
topInput.addEventListener("input", (e) => convertTopToBottom());
bottomInput.addEventListener("input", (e) => convertBottomToTop());

topUnitSelector.addEventListener("change", (e) => convertBottomToTop());
bottomUnitSelector.addEventListener("change", (e) => convertTopToBottom());

hideUnwantedUnits();