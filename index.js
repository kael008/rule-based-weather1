const userInput = document.getElementById("userInput");
const outputs = document.getElementById("outputs");
const sendBtn = document.getElementById("sendBtn");

const data = [
    {
        query: "Hi",
        outputs: "Hello, How can I help you today?"
    },
    {
        query: "Hello",
        outputs: "Hi, How can I help you today?"
    },
    {
        query: "What is your name?",
        outputs: "My name is AyselPT"
    },

    {
        query: "What is the humidity in philippines?",
        outputs: "Today in the Philippines, humidity levels are high, with readings in Manila at approximately 82-85%, contributing to a warm and humid feel throughout the day and evening. This is combined with temperatures around 28°C (82°F) that feel closer to 32°C (89°F) due to the humidity. Conditions are expected to stay mostly cloudy, with minimal precipitation and light winds from the southwest, which should persist through the evening"
    },

    {
        query: "What is the weather today in philippine?",
        outputs: "Today in the Philippines, expect warm and humid conditions with scattered thunderstorms across various regions. Temperatures range between 26–30°C (79–86°F) with an expected high humidity level of around 80%. Afternoon and evening may see intermittent rain and thunderstorms, particularly affecting the western parts of Luzon and areas along the eastern seaboard. Winds are generally light to moderate, coming from the southwest.​"
    },
];

sendBtn.addEventListener('click', () => {
    const inputVal = userInput.value.trim();
  
    if (inputVal === "") {
        outputs.textContent = "";
        return;
    }
    outputs.textContent = "";

    let matched = false;
    data.forEach(element => {
        if (element.query.toLowerCase().includes(inputVal.toLowerCase())) {
            outputs.innerText = element.outputs;
            matched = true;
        }
    });


    if (!matched) {
        outputs.textContent = "The data is not available";
    }
});