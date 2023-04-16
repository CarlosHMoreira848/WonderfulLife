const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog button")
const redirect = document.querySelector("form .enviar")

button.onclick = function () {
 modal.showModal()
}

buttonClose.onclick = function () {
 modal.close()
}

redirect.onclick = function () {
window.location.href = "camera.html"
}