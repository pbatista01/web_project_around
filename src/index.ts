import { Section } from "./components/Section.js";
import { FormValidator } from "./components/FormValidator.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";
import {
    defaultFormConfig, initialCards, cardsContainerSelector, imagePopupSelector, editProfilePopupSelector, newCardPopupSelector, userInfoSelectors
} from "./utils/constants.js";
import { createCard, fillProfileForm } from "./utils/utils.js";
import type { CardData, FormValues } from "./types/types.js";

const profileEditButton = document.querySelector(".profile__edit-button") as HTMLButtonElement;
const addCardButton = document.querySelector(".profile__add-button") as HTMLButtonElement;
const editProfileForm = document.querySelector("#edit-profile-form") as HTMLFormElement;
const newCardForm = document.querySelector("#new-card-form") as HTMLFormElement;
const popupInputName = editProfileForm.querySelector(".popup__input_type_name") as HTMLInputElement;
const popupInputDescription = editProfileForm.querySelector(".popup__input_type_description") as HTMLInputElement;

const userInfo = new UserInfo(userInfoSelectors);
const imagePopup = new PopupWithImage(imagePopupSelector);

function handleCardClick(data: CardData) : void {
    imagePopup.open(data);
}

const cardSection = new Section<CardData>(
    {
        items: initialCards.slice().reverse(),
        renderer: (item) => {
            cardSection.addItem(createCard(item, handleCardClick));
        },
    },
    cardsContainerSelector
);

const editProfilePopup = new PopupWithForm(editProfilePopupSelector, (values: FormValues) => {
  userInfo.setUserInfo({
    name: values.name ?? "",
    job: values.description ?? "",
  });
});

const newCardPopup = new PopupWithForm(newCardPopupSelector, (values: FormValues) => {
  const newCard = createCard(
    { name: values["place-name"] ?? "", link: values.link ?? "" },
    handleCardClick
  );
  cardSection.addItem(newCard);
});

const profileFormValidator = new FormValidator(defaultFormConfig, editProfileForm);
const newCardFormValidator = new FormValidator(defaultFormConfig, newCardForm);

imagePopup.setEventListeners();
editProfilePopup.setEventListeners();
newCardPopup.setEventListeners();

profileFormValidator.enableValidation();
newCardFormValidator.enableValidation();

cardSection.renderItems();

profileEditButton.addEventListener("click", () => {
  fillProfileForm(popupInputName, popupInputDescription, userInfo.getUserInfo());
  profileFormValidator.resetValidation();
  editProfilePopup.open();
});

addCardButton.addEventListener("click", () => {
  newCardFormValidator.resetValidation();
  newCardPopup.open();
});