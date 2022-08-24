const input = document.querySelector('.textArea')
const button = document.querySelector('.mainButton')
const output = document.querySelector('.areaToGetResponse')

button.addEventListener('click', onSend)

async function onSend(event) {
    event.preventDefault()
    output.textContent = await request(input.value);
}

async function request(value) {
        try {
            const response = await fetch(`http://localhost:3580/?action=${value}`);
            const serverAnswer = await response.json();

            if (serverAnswer.isCorrect) {
                return serverAnswer.result
            }
            else {
                return `${serverAnswer.type} (${serverAnswer.code}) ${serverAnswer.message}`
            }
        } catch (error) {
            return 'Unknown error';
        }
}
