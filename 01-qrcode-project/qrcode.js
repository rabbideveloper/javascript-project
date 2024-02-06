const qrInput = document.getElementById("qr_input");

const qrButton = document.getElementById("qr_button");

const qrImage = document.getElementById("qr_img");

qrButton.addEventListener("click", () => {
	const inputValue = qrInput.value;

	if (!inputValue) {
		alert("Please provide a valid URL");
	} else {
		qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
		qrImage.alt = `QR Code for ${inputValue}`;
	}
});
