const UUID = "3e3ba45d-0f81-41fa-88e5-5544e02fe5b3";
let username = prompt("Enter your name:");
let recipient = "Everyone";


// Entra no chat
function enterChat() {
    fetch(`https://mock-api.driven.com.br/api/v6/uol/participants/${UUID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username })
    })
    .then(response => {
        if (response.status === 200) {
            console.log(`${username} entrou na sala com sucesso.`);
            startChat();
        } else if (response.status === 400) {
            username = prompt("Nome de usuário já está em uso, por favor, insira outro nome!");
            enterChat();
        }
    })
    .catch(error => console.log('Erro ao entrar na sala', error));
}

// Mantém usuário ativo
function notifyPresent() {
    fetch(`https://mock-api.driven.com.br/api/v6/uol/status/${UUID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: username })
    })
    .then(response => {
        if (response.status !== 200) {
            alert("Você foi desconectado. A página será recarregada!");
            location.reload();
        }
    })
    .catch(error => console.error("Erro ao notificar presença", error));
}


// Carrega mensagens do servidor
function loadMessages() {
    fetch(`https://mock-api.driven.com.br/api/v6/uol/messages/${UUID}`)
    .then(response => response.json())
    .then(data => {
        let chatWindow = document.getElementById("messages");
        chatWindow.innerHTML = "";

        data.forEach(message => {
            if (message.type === "private_message" && (message.from === username || message.to === username)) {
                displayMessage(message, "private");
            } else if (message.type !== "private_message") {
                displayMessage(message, message.type === "status" ? "status" : "normal");
            }
        });
        chatWindow.scrollTop = chatWindow.scrollHeight;
    })
    .catch(error => console.error("Erro ao carregar mensagens", error));
}

// Exibe mensagens no chat
function displayMessage(message, className) {
    const msgDiv = document.createElement("div");
    msgDiv.classList.add("message", className);
    msgDiv.textContent = `${message.time} ${message.from}: ${message.text}`;
    document.getElementById("messages").appendChild(msgDiv);
}

// Envia mensagem
function sendMessage() {
    const messageInput = document.getElementById("messageInput").value;
    if (!messageInput) return;

    const message = {
        from: username,
        to: recipient === "Everyone" ? "Todos" : recipient,
        text: messageInput,
        type: recipient === "Everyone" ? "message" : "private_message"
    };

    fetch(`https://mock-api.driven.com.br/api/v6/uol/messages/${UUID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(message)
    })
    .then(response => {
        if (response.status === 200) {
            document.getElementById("messageInput").value = "";
            loadMessages();
        } else {
            alert("Erro ao enviar mensagem. Página será recarregada!");
            location.reload();
        }
    })
    .catch(error => console.error("Erro ao enviar mensagem!", error));
}

// Carregar lista de participantes
function loadParticipants() {
    fetch(`https://mock-api.driven.com.br/api/v6/uol/participants/${UUID}`)
      .then(response => response.json())
      .then(data => {
        let participantList = document.getElementById("participants");
        participantList.innerHTML = ""; // Clear previous participants
  
        data.forEach(participant => {
          let li = document.createElement("li");
          li.textContent = participant.name;
          li.onclick = () => selectRecipient(participant.name);
          if (participant.name === recipient) {
              li.classList.add('selected');
          }
          participantList.appendChild(li);
        });
      })
      .catch(error => console.error("Erro ao carregar participantes!", error));
}

// Seleciona destinatário
function selectRecipient(name) {
    recipient = name;
    document.getElementById("recipient-test").textContent = `Enviando para: ${recipient}`;
}

// Atualiza o tipo de mensagem
function updateMessageType() {
    const messageType = document.getElementById("messageType").value;
    recipient = messageType === "Everyone" ? "Everyone" : recipient;
    document.getElementById("recipient-test").textContent = `Enviando para: ${recipient}`;
}

// Alterna a exibição do painel de participantes
function toggleParticipants() {
    const panel = document.getElementById("participants-panel");
    panel.classList.toggle("show");
}

// Inicia o chat
function startChat() {
    loadMessages();
    loadParticipants();

    setInterval(loadMessages, 3000);
    setInterval(notifyPresent, 5000);
    setInterval(loadParticipants, 10000);
}

// Carregar página
enterChat();
