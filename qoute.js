// js file

// quotes
const quotes = [{
        qoute: 'The purpose of our lives is to be happy',
        author: 'Dalai Lama',
        img: "unknown.png"
    },
    {
        qoute: 'Life is what happens when you’re busy making other plans.',
        author: 'John Lennon',
        img: "unknown.png"
    },
    {
        qoute: 'Many of life’s failures are people who did not realize how close they were to success when they gave up',
        author: 'Thomas A-Edison',
        img: "thomas.jpg"
    },
    {
        qoute: 'If you want to live a happy life, tie it to a goal, not to people or things.',
        author: 'Albert Einstein',
        img: "albert.jpg"
    },
    {
        qoute: 'Success usually comes to those who are too busy to be looking for it.',
        author: 'Henry David Thoreau',
        img: "unknown.png"
    },
    {
        qoute: 'You’ll never achieve real success unless you like what you’re doing',
        author: 'Dale Carnegie',
        img: "unknown.png"
    },
    {
        qoute: 'Behind every successful man there’s a lot of unsuccessful years.',
        author: 'Bob Brown',
        img: "unknown.png"
    },
    {
        qoute: 'Try not to become a man of success, but a man of value.',
        author: 'Albert Einstein',
        img: "albert.jpg"
    },
    {
        qoute: "The difference between successful people and very successful people is that very successful people say ‘no’ to almost everything.",
        author: 'Warren Buffett',
        img: "warren.jpg"
    },

    {
        qoute: 'Successful people don’t fear failure but understand that it’s necessary to learn and grow from',
        author: 'Robert Kiyosaki',
        img: "Robert-Kiyosaki.jpg"
    },
    {
        qoute: 'Most great people have attained their greatest success just one step beyond their greatest failure',
        author: 'Napoleon Hill',
        img: "hill.jpeg"
    },
    {
        qoute: 'I have not failed, I’ve just found 10,000 ways that won’t work',
        author: 'Thomas Edison',
        img: "thomas.jpg"
    },
    {
        qoute: 'With hard work and effort, you can achieve anything.',
        author: 'Antoine Griezmann',
        img: "unknown.png"
    },
    {
        qoute: 'Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do',
        author: 'Pele',
        img: "unknown.png"
    },
    {
        qoute: 'Successful people are not gifted; they just work hard, then succeed on purpose',
        author: 'Nelison',
        img: "unknown.png"
    },

    // extend  extra quotes
    {
        qoute: 'Money and success don’t change people, they merely amplify what is already there',
        author: ' Will Smith',
        img: 'will-smith.jpeg'
    },
    {
        qoute: 'The whole secret of a successful life is to find out what is one’s destiny to do, and then do it',
        author: 'Henry Ford',
        img: 'hanry.jpeg'
    },
    {
        qoute: 'Life is not a problem to be solved, but a reality to be experienced',
        author: 'Soren Kierkegaard',
        img: 'unknown.png'
    },
    {
        qoute: 'If you cant explain it simply, you dont understand it well enough',
        author: 'Albert Einstein',
        img: 'albert.jpg'
    },
    {
        qoute: 'Start where you are. Use what you have. Do what you can',
        author: 'Arthur Ashe',
        img: 'unknown.png'
    },
    {
        qoute: 'Success is the sum of small efforts, repeated day-in and day-out',
        author: ' Robert Collier',
        img: 'unknown.png'
    },
    {
        qoute: 'Success does not consist in never making mistakes but in never making the same one a second time',
        author: ' George Bernard Shaw',
        img: 'unknown.png'
    },
    {
        qoute: 'To be successful you must accept all challenges that come your way. You cant just accept the ones you like',
        author: 'Mike Gafka',
        img: 'unknown.png'
    },
    {
        qoute: 'Successful and unsuccessful people do not vary greatly in their abilities. They vary in their desires to reach their potential',
        author: 'John Maxwell',
        img: 'unknown.png'
    },
    {
        qoute: 'Logic will get you from A to B. Imagination will take you everywhere',
        author: 'Albert Einstein',
        img: 'albert.jpg'
    },
    {
        qoute: 'All our dreams can come true if we have the courage to pursue them',
        author: 'Walt Disney',
        img: 'Walt-disney.jpg'
    },
    {
        qoute: 'Success is walking from failure to failure with no loss of enthusiasm',
        author: 'Winston Churchill',
        img: 'unknown.png'
    },

    {
        qoute: 'Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them',
        author: 'Vaibhav Shah',
        img: 'unknown.png'
    },
    {
        qoute: 'When you stop chasing the wrong things you give the right things a chance to catch you',
        author: 'Lolly Daskal',
        img: 'unknown.png'
    },
    {
        qoute: 'When you set your mind to achieve something, you must allow yourself the opportunity to get it done',
        author: 'Tasha Hoggatt',
        img: 'unknown.png'
    },
    {
        qoute: 'Success is not final, failure is not fatal: it is the courage to continue that counts',
        author: 'Winston Churchill',
        img: 'unknown.png'
    },
    {
        qoute: 'Your life only gets better when you get better',
        author: ' Brian Tracy',
        img: 'brian-about.jpg'
    },
    {
        qoute: 'You don’t have to be great to start, but you have to start to be great.',
        author: 'Zig Ziglar',
        img: 'ziklar.jpg'
    },
    {
        qoute: 'Just one small positive thought in the morning can change your whole day',
        author: 'Dalai Lama',
        img: 'unknown.png'

    },
    {
        qoute: 'The worst part of success is trying to find someone who is happy for you',
        author: 'Bette Midler',
        img: 'unknown.png'

    },
    {
        qoute: 'The two most important requirements for major success are: first, being in the right place at the right time, and second, doing something about it',
        author: 'Ray Kroc',
        img: 'unknown.png'

    },
    {
        qoute: 'Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it. If you aren’t sure which way to do something, do it both ways and see which works better',
        author: 'John Carmack',
        img: 'unknown.png'

    },
    {
        qoute: 'Some people dream of success while others wake up and work',
        author: 'Winston Churchill',
        img: 'unknown.png'

    },
    ///  extend     
    {
        qoute: 'There are no secrets to success. It is the result of preparation, hard work, and learning from failure',
        author: 'Colin Powell',
        img: 'colin.jpg'

    },
    {
        qoute: 'Nothing is Impossible even the word it self says, I am Possible',
        author: 'Audrey hepburn',
        img: 'unknown.png'

    },
    {
        qoute: 'Self-belief And HardWork Will Always Earn Your Success',
        author: 'Virat Kohli',
        img: 'unknown.png'

    }

]


// identifiers From HTML
let btn = document.getElementById('qoute-btn');
var xikmad = document.querySelector('.xikmad');
let author = document.getElementById('author');
let speak = document.getElementById('sound');
let author_img = document.getElementById('author-img');



// event
btn.addEventListener('click', generate); // generate button
speak.addEventListener('click', sound) // speak button


// function that 

// generates Quotes
function generate() {
    quotes;
    // creating random from quotes
    let randomQuote = Math.floor(Math.random() * quotes.length);

    // appending quote into html element 
    xikmad.innerHTML = `
            <i class="fas fa-quote-left"></i>
            ${quotes[randomQuote].qoute}
             <i class="fas fa-quote-right"></i>
    `
    author.innerHTML = `
            <img src=${quotes[randomQuote].img} alt="author-img"> -${quotes[randomQuote].author}
    `



}

// speak  function
function sound() {
    // speechSynthesis is object that speaks the quote and author 
    let utterance = new SpeechSynthesisUtterance(`${xikmad.innerText} By ${author.innerText}`);
    speechSynthesis.speak(utterance)
    speak.style = 'background: red; color: white'
    setTimeout(removeStyle, 9000)
}

// removing style from 
// speak button
function removeStyle() {
    speak.style = " border: 1px solid #5372f0;"
}