document.addEventListener("DOMContentLoaded", function() {
    fetch('data-config.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('ContactH2Content').innerText = data.ContactH2Content;
            document.getElementById('PhoneNo').innerText = data.PhoneNo;
            document.getElementById('Mail').innerText = data.Mail;
            document.getElementById('Instagram').innerText = data.Instagram;
            document.getElementById('Addrress').innerText = data.Addrress;
            document.getElementById('GoogleMapLocations').src = data.GoogleMapLocations;
            document.getElementById('WhatsappNo').href ="https://api.whatsapp.com/send?phone="+data.WhatsappNo;
        })
        .catch(error => console.error('Error fetching the content:', error));
});