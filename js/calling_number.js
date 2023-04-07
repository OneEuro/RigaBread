 //call functions
 function callNumber(number) { //call number
    window.location.href = "tel:" + number;
}
function sendWhatsAppMessage(number, message) {
    window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(message), "_blank");
}
function sendViberMessage(number, message) {
    window.open("viber://chat?number=" + number + "&text=" + encodeURIComponent(message), "_blank");
}