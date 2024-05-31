console.log('Welcome to the joke factory!')
console.log('')
console.log('Let me tell you something about programming:')

const programmingJokes = [
    { id: 0, question: "Why did the programmer quit his job?", answer: "Because he didn't get arrays." },
    { id: 1, question: "Why was the JavaScript developer sad?", answer: "Because he didn't know how to 'null' his feelings." },
    { id: 2, question: "Why don't bachelors like Git?", answer: "Because they are afraid to commit." },
    { id: 3, question: "What do you call a programmer from Finland?", answer: "Nerdic." },
    { id: 4, question: "Why do programmers prefer dark mode?", answer: "Because light attracts bugs!" },
    { id: 5, question: "Why do Python programmers wear glasses?", answer: "Because they can't C." },
    { id: 6, question: "What is a programmer's favorite hangout place?", answer: "Foo Bar." },
    { id: 7, question: "Why was the developer always calm?", answer: "Because they could handle async issues." },
    { id: 8, question: "Why do programmers hate nature?", answer: "It has too many bugs." },
    { id: 9, question: "Why did the developer go broke?", answer: "Because they used up all their cache." },
    { id: 10, question: "Why did the programming teacher go broke?", answer: "Because he lost his domain in a bet!" }
];

function getRandomInt(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function displayTwoRandomJokes() {
    const firstJokeIndex = getRandomInt(0, programmingJokes.length - 1);
    let secondJokeIndex;
    do {
        secondJokeIndex = getRandomInt(0, programmingJokes.length - 1);
    } while (secondJokeIndex === firstJokeIndex);

    const firstJoke = programmingJokes[firstJokeIndex];
    const secondJoke = programmingJokes[secondJokeIndex];

    console.log(`Q: ${firstJoke.question}`);
    console.log(`A: ${firstJoke.answer}`);
    console.log(`Q: ${secondJoke.question}`);
    console.log(`A: ${secondJoke.answer}`);
}
displayTwoRandomJokes();