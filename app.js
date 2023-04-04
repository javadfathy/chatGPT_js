const apiKey = 'YOUR_API_KEY'


const submit = document.getElementById('submit')
    const outPut = document.getElementById('output')
    const history = document.getElementById('history')
    const inputElement = document.getElementById('input')


async function getMessage() {
    
    console.log('clicked')
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: inputElement.value}],
            max_tokens: 100
        })
    }
    try {
        const res = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await res.json()
        outPut.textContent = data.choices[0].message.content
        if(data.choices[0].message.content) {
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            history.append(pElement)
        }
        console.log(data)
    } catch (error){
        console.log(error)
    }
}

submit.addEventListener('click', getMessage)
