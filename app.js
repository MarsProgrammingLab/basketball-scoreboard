let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

let count = 0
let guestCount = 0

function plusOne() {
    count += 1
    homeScore.textContent = count
}

function plusTwo() {
    count += 2
    homeScore.textContent = count
}

function plusThree() {
    count += 3
    homeScore.textContent = count
}

function guestPlusOne() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function guestPlusTwo() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function guestPlusThree() {
    guestCount += 3
    guestScore.textContent = guestCount
}

