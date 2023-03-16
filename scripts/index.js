let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__name");
let descriptionInput = document.querySelector(".popup__description");
let nameProfile = document.querySelector(".profile__name");
let descriptionProfile = document.querySelector(".profile__description");

function handleFormSubmit (evt) {
    evt.preventDefault();
    let nameVal = nameInput.value;
    let descriptionVal = descriptionInput.value;
    nameProfile.textContent = nameVal;
    descriptionProfile.textContent = descriptionVal;
    editProfile.classList.remove("popup_opened");
}

formElement.addEventListener('submit', handleFormSubmit);

let editBtn = document.querySelector(".profile__edit");
let editProfile = document.querySelector(".popup");

editBtn.addEventListener("click", function() {
    let nameDef = nameProfile.textContent;
    let descriptionDef = descriptionProfile.textContent;
    nameInput.value = nameDef;
    descriptionInput.value = descriptionDef;
    editProfile.classList.add("popup_opened");
});

let closeBtn = document.querySelector(".popup__close");

closeBtn.addEventListener("click", function() {
    editProfile.classList.remove("popup_opened");
});

let likeBtn = document.querySelectorAll(".element__like");

likeBtn.forEach(function(likeBtns) {
    likeBtns.addEventListener("click", function() {
        this.setAttribute("style", "background-image: url(./images/like_active.svg)");
    });
});