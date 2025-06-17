const quotes = [
    {
        text: "The world isn't perfect. But it's there for us, doing the best it can. That's what makes it so damn beautiful.",
        anime: "Fullmetal Alchemist: Brotherhood"
    },
    {
        text: "If you don't take risks, you can't create a future!",
        anime: "One Piece"
    },
    {
        text: "It's not about how hard you hit. It's about how hard you can get hit and keep moving forward.",
        anime: "Rocky Balboa"
    },
    {
        text: "The only ones who should kill are those who are prepared to be killed.",
        anime: "Code Geass"
    },
    {
        text: "Life is not a game of luck. If you wanna win, work hard.",
        anime: "Sora no Otoshimono"
    },
    {
        text: "The moment you think of giving up, think of the reason why you held on so long.",
        anime: "Naruto"
    },
    {
        text: "Sometimes we have to look beyond what we want and do what's best.",
        anime: "Pokemon"
    },
    {
        text: "The world is cruel, but also very beautiful.",
        anime: "Attack on Titan"
    },
    {
        text: "If you don't share someone's pain, you can never understand them.",
        anime: "Naruto Shippuden"
    },
    {
        text: "The only time a man can be brave is when he is afraid.",
        anime: "Game of Thrones"
    },
    {
        text: "I am not a hero or a villain. I am just a man who wants to protect his family.",
        anime: "Dragon Ball Super"
    },
    {
        text: "The difference between the novice and the master is that the master has failed more times than the novice has tried.",
        anime: "My Hero Academia"
    },
    {
        text: "When you hit the point of no return, that's the moment it truly becomes a journey.",
        anime: "Hunter x Hunter"
    },
    {
        text: "The only way to do great work is to love what you do.",
        anime: "Your Lie in April"
    },
    {
        text: "Sometimes the best way to solve your own problems is to help someone else.",
        anime: "One Punch Man"
    },
    {
        text: "The past makes you wanna die out of regret, and the future makes you depressed out of anxiety. So by elimination, the present is likely the happiest time.",
        anime: "Mob Psycho 100"
    },
    {
        text: "If you can't do something, then don't. Focus on what you can do.",
        anime: "Shirobako"
    },
    {
        text: "The world is full of things that don't make sense. That's why we need to keep thinking.",
        anime: "Death Note"
    },
    {
        text: "People's lives don't end when they die. It ends when they lose faith.",
        anime: "Bleach"
    }
];

const quoteText = document.getElementById('quote-text');
const animeTitle = document.getElementById('anime-title');
const newQuoteBtn = document.getElementById('new-quote');
const copyQuoteBtn = document.getElementById('copy-quote');
const showcasePanel = document.querySelector('.showcase-panel');
const fullscreenBtn = document.getElementById('fullscreen-btn');

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote() {
    quoteText.classList.add('fade-out');
    animeTitle.classList.add('fade-out');

    setTimeout(() => {
        const quote = getRandomQuote();
        quoteText.textContent = `"${quote.text}"`;
        animeTitle.textContent = `- ${quote.anime}`;

        quoteText.classList.remove('fade-out');
        animeTitle.classList.remove('fade-out');
        quoteText.classList.add('slide-in');
        animeTitle.classList.add('slide-in');

        setTimeout(() => {
            quoteText.classList.remove('slide-in');
            animeTitle.classList.remove('slide-in');
        }, 500);
    }, 300);
}

function copyQuote() {
    const textToCopy = `${quoteText.textContent} ${animeTitle.textContent}`;
    navigator.clipboard.writeText(textToCopy).then(() => {
        copyQuoteBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyQuoteBtn.textContent = 'Copy Quote';
        }, 2000);
    });
}

newQuoteBtn.addEventListener('click', updateQuote);
copyQuoteBtn.addEventListener('click', copyQuote);

if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    });
}

updateQuote();

setTimeout(() => {
    if (showcasePanel) {
        showcasePanel.classList.add('hide');
    }
}, 5000); 