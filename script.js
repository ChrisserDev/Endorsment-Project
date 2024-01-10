// DOM ELEMENTS

let textValue = document.getElementById("textare-value");
let sender = document.getElementById("sender-value");
let receiver = document.getElementById("receiver-value");
const publishBtn = document.getElementById("publish-btn");
const endorsmentTextResult = document.querySelector(".endorsement-text");
const warning = document.querySelector(".warning");

// EVENT LISTENER FOR THE PUBLISH BUTTON

publishBtn.addEventListener("click", function (){
    displayWarning();

    addItemToEndorsments(textValue.value, sender.value, receiver.value);
});


// Grabbing the text from the inputs and saving it in a new div.

function addItemToEndorsments(message, sender, receiver) {
    endorsmentTextResult.innerHTML += `
        <div class="endorsmentMessage">
        <p id="to-person">To ${receiver}</p>
        <p>${message}</p>
        <p id="from-person">From ${sender}</p>
        <i class="fa-regular fa-heart"></i>
        </div>`;

    resetValues();
}

// ResetValues for the next endorsement;

function resetValues(){
    textValue.value = "";
    sender.value = "";
    receiver.value = "";
}


// LIKE HEART FUNCTION

endorsmentTextResult.addEventListener("click", function(e) {
    const heartIcon = e.target;
    
    if (heartIcon.classList.contains("fa-regular")) {
        heartIcon.classList.toggle("fa-solid");
    }
});

// Warming function

function displayWarning(){

    if(!publishBtn || (!textValue.value && !sender.value && !receiver.value)){
        warning.style.display = "block";
        endorsmentTextResult.style.display = "none";
        setTimeout(() => {
            warning.style.display = "none";
        }, 2000);
    }
}