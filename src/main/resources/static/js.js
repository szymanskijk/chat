var client = null;

function showMessage(value) {
    var newResponse = document.createElement('p');
    newResponse.appendChild(document.createTextNode(value));
    var response = document.getElementById('response');
    response.appendChild(newResponse);
}

function connect() {
    client = Stomp.client('ws://localhost:8080/chat');
    client.connect({}, function (frame) {
        client.subscribe("/topic/messages", function(message){
            showMessage(JSON.parse(message.body).valpue)
            showMessage(message.body)

        })
    })
}

function sentMessage() {
    var messageToSent = document.getElementById('messageToSent').value;
    client.send("/app/chat", {}, JSON.stringify({'valpue': messageToSent}));

}