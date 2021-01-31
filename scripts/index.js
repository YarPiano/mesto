let content = document.querySelector('.root');
let editButton = content.querySelector('.profile__button-edit');
let popUp = content.querySelector('.popup');
let saveButton = content.querySelector('.popup__button-save');
let closeIcon = content.querySelector('.popup__close');
let profileName = content.querySelector('.profile__name');
let profileJob = content.querySelector('.profile__job');
let inputName = content.querySelector('.popup__input-name');
let inputjob = content.querySelector('.popup__input-job');
let form = content.querySelector('.popup__form');


function togglePopUp() {
    if (popUp.classList.contains('popup_opened') === true) {
        popUp.classList.toggle('popup_opened');
    } else {
        inputName.value = profileName.textContent;
        inputjob.value = profileJob.textContent;
        popUp.classList.toggle('popup_opened');
    }
}

function formSubmitHandler(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileJob.textContent = inputjob.value;
    togglePopUp();
}

editButton.addEventListener('click', togglePopUp);
form.addEventListener('submit', formSubmitHandler);
closeIcon.addEventListener('click', togglePopUp);
