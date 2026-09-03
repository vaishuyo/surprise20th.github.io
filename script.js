/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageName) {

    const pages =
        document.querySelectorAll(".page");

    pages.forEach(function(page) {

        page.classList.remove("active");

    });


    const selectedPage =
        document.getElementById(pageName);

    selectedPage.classList.add("active");



    // Scroll to top

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



/* =========================
   SURPRISE SELECTION
========================= */

function openSurprise(number) {

    if (number === 1) {

        showPage("surprise1");

    }

    else if (number === 2) {

        showPage("surprise2");

    }

    else if (number === 3) {

        showPage("surprise3");

    }

}



/* =========================
   BLOW CANDLES
========================= */

function blowCandles() {

    const candles =
        document.querySelectorAll(".candle");

    candles.forEach(function(candle) {

        candle.classList.add("off");

    });


    const button =
        document.getElementById("blowButton");

    button.innerText =
        "Candles Blown! 🎉";


    button.disabled = true;


    const message =
        document.getElementById("blowMessage");

    message.classList.remove("hidden-message");


    message.innerHTML =
        "Wish granted! ✨🎂💗<br>" +
        "May all your dreams come true!";
}



/* =========================
   CHOCOLATE SELECTION
========================= */

function chooseChocolate(name, emoji) {

    const gift =
        document.getElementById("chocolateGift");

    const nameElement =
        document.getElementById("chocolateName");

    const message =
        document.getElementById("eatMessage");

    const againButton =
        document.getElementById("againChocolate");


    nameElement.innerText =
        name;


    message.innerText =
        "Intha sapdu pattuuuu! 🍫💗";


    gift.classList.remove("hidden");

    againButton.classList.remove("hidden");


    // Hide the chocolate choices

    document
        .querySelector(".chocolate-options")
        .classList.add("hidden");


    // Show final surprise after animation

    setTimeout(function() {

        showFinalButton();

    }, 3000);

}



/* =========================
   FINAL BUTTON
========================= */

function showFinalButton() {

    const card =
        document.querySelector("#surprise3 .main-card");


    if (
        !document.getElementById("finalSurprise")
    ) {

        const button =
            document.createElement("button");


        button.id =
            "finalSurprise";


        button.className =
            "main-button";


        button.innerText =
            "One Last...";


        button.onclick =
            function() {

                showPage("final");

            };


        card.appendChild(button);

    }

}



/* =========================
   RESET CHOCOLATE
========================= */

function resetChocolate() {

    location.reload();

}