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
function openEmail() {
    window.open("mailto:info@riga-hleb.ru?subject=Уточнение информации&body=Добрый%20день!");
    // window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here";
}