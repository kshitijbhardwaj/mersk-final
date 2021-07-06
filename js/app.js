// deck contains all the cards
const deck = document.getElementById("card-deck");


// @description shuffles cards
// @param {}
// @returns shuffledcard
function shuffle() {
    let currentIndex = deck.children.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = deck.children[currentIndex].innerText;
        deck.children[currentIndex].innerText = deck.children[randomIndex].innerText;
        deck.children[randomIndex].innerText = temporaryValue;
    }
    applyColors();
    return deck;
}

// @description sorts cards ascending order
// @param {}
// @returns sortedcard
function sort() {
    Array.from(deck.children).sort((a, b) => {
        const charactersA = a.innerText;
        const charactersB = b.innerText;

        if (charactersA < charactersB) {
            return -1;
        } else if (charactersA === charactersB) {
            return 0;
        } else {
            return 1;
        }
    }).forEach((element) => {
        // When appending an element that is already a child, it will not
        // be duplicated, but removed from the old position first and then
        // added to the new one.

        deck.appendChild(element);
    });
    applyColors();
}

// @description applies color to each card based on screen size
// @param {}
// @returns null
function applyColors() {
    Array.from(deck.children).forEach((element) => {
        if (window.screen.width > 450) {
            element.style.background = selectBackgroundColor(parseInt(element.innerText));
        } else {
            element.style.background= "#EFEFEF";
            element.style.borderLeftColor = selectBackgroundColor(parseInt(element.innerText));
        }
    })
}

// @description checks the card number and returns color according to the card number.
// @param {}
// @returns color hash code
function selectBackgroundColor(cardValue) {
    let background;
    switch (cardValue) {
        case 1:
            background = "#000000";
            break;
        case 2:
            background = "#333333";
            break;
        case 3:
            background = "#72C3DC";
            break;
        case 4:
            background = "#2B8EAD";
            break;
        case 5:
            background = "#72C3DC";
            break;
        case 6:
            background = "#2B8EAD";
            break;
        case 7:
            background = "#6F98A8";
            break;
        case 8:
            background = "#BFBFBF";
            break;
        case 9:
            background = "#2F454E";
    }
    return background;
}

// @description sorts cards when page is refreshed / loads
document.body.onload = sort();

// @description adds resize event listenerand associates a callback function
window.addEventListener('resize', applyColors);
