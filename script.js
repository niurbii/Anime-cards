// SELECT PANEL CLASS AND STORE IN A CONSTANT
const panels = document.querySelectorAll('.panel');

//LOOP THROUGH EACH PANEL
panels.forEach(panel => {
    //ADD EVENT LISTENER FOR CLICK AND RUN FUNCTION TO CHANGE FLEX OF PANEL
    panel.addEventListener('click', () => {
        //CALL FUNCTION TO REMOVE ACTIVE CLASS
        removeActiveClasses()

        //ADD CLASS OF ACTIVE. CLASSLIST GIVES A LIST OF CLASSES
        panel.classList.add('active')
    })

})

//FUNCTION TO REMOVE ACTIVE CLASS
function removeActiveClasses () {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

