
import "../scss/main.scss";

   
    //tutaj umieszczamy nasz kod zgodznie z poleceniami
    const startButton = document.querySelector(".start-btn");
	const mainPage = document.querySelector(".main-page"); 
	const form = document.querySelector(".form");
	const addNoteButton = document.querySelector(".add-note-btn");


	startButton.addEventListener("click", function() {
		console.log("Clik");
		mainPage.style.display = "none";
		showForm();

		
		
	})
	addNoteButton.addEventListener("click", function() {
		console.log("add note button");
	})



	const showForm = function() {
		form.style.display = "block";
	}
	const hideForm = function() {
		form.style.display = "none";
	}

    hideForm(); // domyślne ukrycie formularza
    
