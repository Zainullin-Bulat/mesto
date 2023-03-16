let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector("#Name");
let descriptionInput = document.querySelector("#Description");
let nameProfile = document.querySelector(".profile__name");
let descriptionProfile = document.querySelector(".profile__description");
let editBtn = document.querySelector(".profile__edit");
let editProfile = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__close");
// let likeBtn = document.querySelectorAll(".element__like");

function handleFormSubmit (evt) {
    evt.preventDefault();
    let nameVal = nameInput.value;
    let descriptionVal = descriptionInput.value;
    nameProfile.textContent = nameVal;
    descriptionProfile.textContent = descriptionVal;
    editProfile.classList.remove("popup_opened");
}

function popupOpened () {
    let nameDef = nameProfile.textContent;
    let descriptionDef = descriptionProfile.textContent;
    nameInput.value = nameDef;
    descriptionInput.value = descriptionDef;
    editProfile.classList.add("popup_opened");
}

function popupClosed () {
    editProfile.classList.remove("popup_opened");
}

// likeBtn.forEach(function(likeBtns) {
    // likeBtns.addEventListener("click", function() {
        // this.setAttribute("style", "background-image: url(./images/like_active.svg)");
    // });
// });

formElement.addEventListener('submit', handleFormSubmit);
closeBtn.addEventListener("click", popupClosed);
editBtn.addEventListener("click", popupOpened);