document.addEventListener("DOMContentLoaded", function() {
    fetch('data-config.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('HomeH2Content').innerText = data.HomeH2Content;
            document.getElementById('HomePContent').innerText = data.HomePContent;
            document.getElementById('imageSrc').src = data.imageSrc;
            document.getElementById('HomeWhyUsH2').innerText = data.HomeWhyUsH2;
            document.getElementById('ExpertiseContent').innerText = data.ExpertiseContent;
            document.getElementById('MissionContent').innerText = data.MissionContent;
            document.getElementById('WhatsappNo').href ="https://api.whatsapp.com/send?phone="+data.WhatsappNo;
        })
        .catch(error => console.error('Error fetching the content:', error));
});