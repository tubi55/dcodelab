(function(){
    emailjs.init("user_VuHJqP0EOLAeep2lQblZK");
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate the contact number value
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('dcodelab1006', 'template_8fq8wcp', this).then(function(response) {
            console.log('메일 발송 성공', response.status, response.text);         
            }, function(error) {
            console.log('메일 발송 실패', error);
            });
    });
}