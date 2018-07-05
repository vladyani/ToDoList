import "../scss/main.scss";

document.addEventListener("DOMContentLoaded", function () {


    const startButton = document.querySelector(".start-btn"),
        mainPage = document.querySelector(".main-page"),
        form = document.querySelector(".form"),
        addNoteButton = document.querySelector(".add-note-btn"),
        subject = form.querySelector('[name="subject"]'),
        date = form.querySelector('[name="deadline"]'),
        category = form.querySelector('[name="category"]'),
        description = form.querySelector('[name="description"]'),
        fieldsToValidate = [...form.querySelectorAll("[required]")];



    const hideForm = function () {
        form.style.display = "none";
    };
    hideForm(); // domyślne ukrycie formularza


    const showForm = function () {
        form.style.display = "block";
    };



    const validateForm = function () {

        let sibling = this.nextElementSibling;

        if (this.value === "" || this.value.legth < 3) {
            sibling.textContent = this.dataset.error;
            return false;
        } else {
            sibling.textContent = "";
            return true;
        }
    };


    const addNote = function () {
        

    };


    startButton.addEventListener("click", function () {
        mainPage.style.display = "none";
        showForm();
    }, false);


    //validation for each field
    fieldsToValidate.forEach(field => field.addEventListener('blur', validateForm, false));
    //adding new note
    addNoteButton.addEventListener("click", addNote, false);


});
