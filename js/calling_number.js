 //call functions
 function callNumber(number) { //call number
    window.location.href = "tel:" + number;
}
function sendWhatsAppMessage(number, message) {
    window.open("https://wa.me/" + number + "?text=" + encodeURIComponent(message), "_blank");
}
function sendTelegramMessage(username, message) {
    window.open("https://t.me/" + username + "?text=" + encodeURIComponent(message), "_blank");
}