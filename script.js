

const loginForm = document.getElementById("login-form");
const passwordInput = document.getElementById("password");

const loginScreen = document.getElementById("login-screen");
const mainContent = document.getElementById("main-content");
const errorMessage = document.getElementById("error-message");

const correctPassword = "08032026";


loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {

        loginScreen.hidden = true;
        mainContent.hidden = false;

    } else {

        errorMessage.textContent =
            "Неправильная дата... Попробуй ещё раз ♡";

    }

});


const pages = [
    "question-page",
    "no-page",
    "letter-page",
    "message-page"
];


function showPage(pageName) {


    pages.forEach(function(page) {

        document.getElementById(page).hidden = true;

    });


    document.getElementById(pageName).hidden = false;

}



const buttons = document.querySelectorAll("[data-page]");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const page = button.dataset.page;

        const pageNames = {
            question: "question-page",
            no: "no-page",
            letter: "letter-page",
            message: "message-page"
        };

        showPage(pageNames[page]);

    });

});



