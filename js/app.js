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


    const validateForm = function (e) {


        let sibling = this.nextElementSibling;

        if (this.value === "" || this.value.length < 3) {
            this.style.border = " 1px solid #fc4d59";
            console.log(this.style)
            sibling.textContent = this.dataset.error;
            return false;
        } else {
            e.preventDefault();
            this.style.border = "none";
            sibling.textContent = "";
            return true;
        }
    };


    const addNote = function (e) {
        e.preventDefault();
        hideForm();

        //value from inputs
        const subjectVal = subject.value,
            dateVal = date.value,
            categoryVal = category.value,
            descriptionVal = description.value;

        //create object with input data
        const data = {
            subjectVal,
            dateVal,
            categoryVal,
            descriptionVal
        };

        //container for notes
        let divContainer = document.createElement('div');
        divContainer.classList.add('container');
        document.body.prepend(divContainer);

        //document fragment contains our note
        let df = document.createDocumentFragment();

        //note elements create
        let divNote = document.createElement('div'),
            dateH2 = document.createElement('h2'),
            subjectH1 = document.createElement('h1'),
            descriptionP = document.createElement('p'),
            infoBtn = document.createElement('button'),
            successBtn = document.createElement('button');

        //add class to each note elem
        divNote.classList.add('note');
        dateH2.classList.add('note-date');
        subjectH1.classList.add('note-subject');
        descriptionP.classList.add('note-description');
        infoBtn.classList.add('note-info-btn');
        successBtn.classList.add('note-success-btn');


        //bind data from inputs with elements in note 
        dateH2.textContent = data.dateVal;
        subjectH1.textContent = data.subjectVal;
        descriptionP.textContent = data.descriptionVal;


        //depends on users choice we take color from data-color of options and add as border for divNote element
        let redOption = category.querySelector('.red'),
            greenOption = category.querySelector('.green'),
            yellowOption = category.querySelector('.yellow');

        const priority = [redOption, greenOption, yellowOption];
        
        priority.forEach( elem =>{ 
            if(category.value === elem.value) divNote.style.border = `1px solid ${elem.dataset.color}`
        });
        //

        
        //append elements to divNote
        divNote.append(dateH2, subjectH1, descriptionP, infoBtn, successBtn);

        //create document fragment our note
        df.appendChild(divNote);

        //we added fragment to divContainer ,which was added earlier to the page (prepend to body)
        divContainer.append(df);

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
