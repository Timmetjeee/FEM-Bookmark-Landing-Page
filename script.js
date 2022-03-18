// Dropdown Toggle

const HAMBURGER_ICON = "images/icon-hamburger.svg"
const CLOSE_ICON = "images/icon-close.svg"

const dropdownToggle = document.querySelector(".dropdown-toggle")
const dropdownMenu = document.querySelector(".dropdown-menu")

dropdownToggle.addEventListener("click", () => {
    const isExpanded = dropdownMenu.classList.toggle("expanded")
    dropdownToggle.src = isExpanded ? CLOSE_ICON : HAMBURGER_ICON
    document.body.classList.toggle("no-scroll", isExpanded)
})

// Features

const features = document.querySelectorAll(".feature")
const featureButtons = document.querySelectorAll(".feature-button")

featureButtons.forEach((button, index) => {
    button.addEventListener("click", () => setFeature(index))
})

function setFeature(targetIndex) {
    features.forEach((feature, index) => feature.classList.toggle("active", index == targetIndex))
    featureButtons.forEach((button, index) => button.classList.toggle("active", index == targetIndex))
}

// Accordion

document.querySelectorAll(".accordion-header").forEach(accordionHeader => {
    accordionHeader.addEventListener("click", () => accordionHeader.parentElement.classList.toggle("expanded"))
})

// Form Validation

const emailInput = document.querySelector(".email-input > input")
emailInput.addEventListener("change", () => emailInput.parentElement.classList.toggle("invalid", !emailInput.checkValidity()))