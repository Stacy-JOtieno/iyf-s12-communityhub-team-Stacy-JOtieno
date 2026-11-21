// Day 1: Greeting component
// frontend/src/exercises/antonyshisia/

function Greeting({ name = "Guest", timeOfDay = "morning" }) {
    const messages = {
        morning: "Good morning",
        afternoon: "Good afternoon",
        evening: "Good evening"
    };

    const greeting = messages[timeOfDay] || messages.morning;

    return (
        <h2>
            {greeting}, {name}!
        </h2>
    );
}

function Day1Greeting() {
    return (
        <div>
            <h1>Day 1: Greeting Component</h1>
            <Greeting name="Antony" timeOfDay="morning" />
            <Greeting name="Antony" timeOfDay="afternoon" />
            <Greeting name="Antony" timeOfDay="evening" />
            <Greeting />
        </div>
    );
}

export default Day1Greeting;
