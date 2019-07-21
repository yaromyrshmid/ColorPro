//Header
let studioHover = (event) => {
	document.getElementById("header-nav").classList.add('navbar-studio');
}

document.querySelector("#nav-studio").addEventListener("mouseover", studioHover)

let webDesignHover = (event) => {
	document.getElementById("header-nav").classList.add('navbar-webdesign');
}

document.querySelector("#nav-web-design").addEventListener("mouseover", webDesignHover)

let printHover = (event) => {
	document.getElementById("header-nav").classList.add('navbar-print');
}

document.querySelector("#nav-print").addEventListener("mouseover", printHover)

let navbarNoHover = (event) => {
		document.getElementById("header-nav").classList.remove('navbar-studio');
		document.getElementById("header-nav").classList.remove('navbar-webdesign');
		document.getElementById("header-nav").classList.remove('navbar-print');
}

document.querySelector("#header-nav").addEventListener("mouseout", navbarNoHover)

//Contact form
function sendMessage(event) {
	const messageSent = 'You message was sent.'
	document
		.querySelector("#message-sent")
		.textContent = messageSent;
}

document.querySelector("#form-button").addEventListener("click", sendMessage)