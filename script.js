const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generatebtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
    

generatebtn.addEventListener("click", () => {
    let qrvalue = qrInput.value;
    if (!qrvalue) return;
    //console.log(qrvalue)
    generatebtn.innerText = "Generating QR code..";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrvalue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generatebtn.innerText = "Generating QR code";
        
    });
    
});
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
});

