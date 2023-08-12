let meme = document.querySelector(".meme")

// Cerrar y abrir aside.
let imageAside = document.querySelector(".aside-image");
let textAside = document.querySelector(".aside-text");
let closeMarkImage = document.getElementById("closeImageAside");
let closeMarkText = document.getElementById("closeTextAside");

function openAndCloseImageAside(){
    imageAside.classList.toggle("display-none");
    imageAside.classList.toggle("aside");
}

function openAndCloseTextAside(){
    textAside.classList.toggle("display-none");
    textAside.classList.toggle("aside");
}

// MEME
let memeImage = document.querySelector(".meme-image");
let url = document.getElementById("url");

const escribiendoUrl = (event) => {
    memeImage.style.backgroundImage = `url(${event.target.value})`;
}

url.addEventListener('input', (event) => escribiendoUrl(event))

// COLOR PICKERS
const changeBackgroundColorValue = (event, text, elementToChange) => {
    text.innerText = event.target.value
    elementToChange.style.backgroundColor = event.target.value
}

const changeTextColors = (event, text, elementToChange, propertyToChange) => {
    if (propertyToChange == 'color'){
        text.innerText = event.target.value
        elementToChange.forEach(element => {
            element.style.color = event.target.value
        });
    }
    if (propertyToChange == 'backgroundColor'){
        text.innetText = event.target.value
        elementToChange.forEach(element => {
            element.style.backgroundColor = event.target.value
        })
    }
}
 
// Color picker para el background del meme 
let colorPickerBackground = document.getElementById("color-background")
let colorPickerBackgroundValue = document.getElementById("color-background-value")
colorPickerBackground.addEventListener('change', (event) => changeBackgroundColorValue(event, colorPickerBackgroundValue, meme))

// Select para el fondo del meme
const changeMemeImageStyle = (event) => {
    memeImage.style.backgroundBlendMode = event.target.value
}

// Filtros para el meme 
let brightnessRange = document.getElementById("brightness")
let opacityRange = document.getElementById("opacity")
let contrastRange = document.getElementById("contrast")
let blurRange = document.getElementById("blur")
let grayscaleRange = document.getElementById("grayscale")
let sepiaRange = document.getElementById("sepia")
let hueRange = document.getElementById("hue-rotation")
let saturationRange = document.getElementById("saturation")
let invertRange = document.getElementById("invert")

function changeFilters(){
    memeImage.style.filter = `brightness(${brightnessRange.value}) opacity(${opacityRange.value}) blur(${blurRange.value}px) contrast(${contrastRange.value}%) grayscale(${grayscaleRange.value}%) hue-rotate(${hueRange.value}deg) sepia(${sepiaRange.value}%) saturate(${saturationRange.value}%) invert(${invertRange.value})`
}

// Color pickers para el color del texto y su background 
memeText = document.querySelectorAll('.meme-text')

let colorPickerText = document.getElementById("color-text")
let colorPickerTextValue = document.getElementById("color-text-value")
colorPickerText.addEventListener('change', (event) => changeTextColors(event, colorPickerTextValue, memeText, "color"))

let colorPickerBackgroundText = document.getElementById("color-text-background")
let colorPickerBackgroundTextValue = document.getElementById("color-text-background-value")
colorPickerBackgroundText.addEventListener('change', (event) => changeTextColors(event, colorPickerBackgroundTextValue, memeText, "backgroundColor"))

// Texto superior e inferior del meme
let memeTopText = document.querySelector(".meme-top-text");
let memeBottomText = document.querySelector(".meme-bottom-text");

let inputTopText = document.getElementById("top-text");
let inputBottomText = document.getElementById("bottom-text");

const escribiendoTexto = (event, elementToChange) => {
    elementToChange.innerText = event.target.value;
}

inputTopText.addEventListener('input', (event) => escribiendoTexto(event, memeTopText))
inputBottomText.addEventListener('input', (event) => escribiendoTexto(event, memeBottomText))

// Habilitar y deshabilitar texto
const disableMemeText = (event, elementToDisable) => {
    elementToDisable.classList.toggle("display-none")
}

document.getElementById("checkbox-top-text").addEventListener('change', (event) => disableMemeText(event, memeTopText))
document.getElementById("checkbox-bottom-text").addEventListener('change', (event) => disableMemeText(event, memeBottomText))

// FONDO TRANSPARENTE
const changeVisibility = (event) => {
    memeText.forEach(element => {
        element.classList.toggle("transparent-background")
    })
}

// PROPIEDADES DEL TEXTO
const changeTextStyle = (event, property) => {
    memeText.forEach(element => {
        switch (property) {
            case 'font-size':
                element.style.fontSize = event.target.value + "px"
                break
            case 'text-left':
                element.style.textAlign = 'left'
                break
            case 'text-center':
                element.style.textAlign = 'center'
                break
            case 'text-rigth':
                element.style.textAlign = 'end'
                break
            case 'outline-none':
                element.style.textShadow = 'none'
                break
            case 'outline-light':
                element.style.textShadow = "2px 2px #ffffff, -2px 2px #ffffff, 2px -2px #ffffff, -2px -2px #ffffff"
                break
            case 'outline-dark':
                element.style.textShadow = "2px 2px #000000, -2px 2px #000000, 2px -2px #000000, -2px -2px #000000"
                break
            case 'height':
                element.style.height = event.target.value + "px"
                break
            case 'line-height':
                element.style.lineHeight = event.target.value 
                break
        }
    })
}