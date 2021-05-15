const port = "http://127.0.0.1:3000"
const operaApi = new OperaApi(port)
const collectionApi = new CollectionApi(port)

// navigation buttons
const navBar = document.getElementById("nav-bar")
const operaCollectionButton = document.getElementById("opera-collection-btn")
const makeCollectionBtn = document.getElementById("make-collection-button")
const addOperaShowFormBtn = document.querySelector("#add-opera-form-btn")

// forms and containers 
const operaFormContainer = document.querySelector("#create-opera-form")
const addOperaForm = document.getElementById("add-opera-form")

const collectionFormContainer = document.getElementById("collection-form-container")
const collectionForm = document.getElementById("collection-form")

//divs containing grids 
const checkBoxOperaDiv = document.getElementById("checkbox-opera-list") 
const collectionBtnDiv = document.getElementById("collection-buttons")
// const operaGrid = document.getElementById("opera-grid")

addOperaForm.addEventListener("submit", handleNewOperaSubmit) 

// add opera form visibility 
let addOpera = false
addOperaShowFormBtn.addEventListener("click", () => {
    addOpera = !addOpera;
    if (addOpera) {
        addOperaShowFormBtn.innerText = "nevermind";
        operaFormContainer.style.display = "block"; 
    }else { 
        addOperaShowFormBtn.innerText = "add an opera";
        operaFormContainer.style.display = "none"; 
    }
});


// opera image grid and collection submission form visibility 
let showCollectionForm = false
let check = true 
makeCollectionBtn.addEventListener("click", () => {
    showCollectionForm = !showCollectionForm;
    if (showCollectionForm) {
      collectionFormContainer.hidden = false; 
        Opera.makeCheckList()
        Opera.appendOperas();
        makeCollectionBtn.innerText = "nevermind";
    }else {
        Opera.removeCheckList()
        collectionFormContainer.hidden = true;
        checkBoxOperaDiv.innerHTML = "";
        makeCollectionBtn.innerText = "make a collection";
    }
    check = false 
    })

    // persist new opera to database 
    function handleNewOperaSubmit (e) {
        e.preventDefault() 
        operaApi.createOpera() 
        e.target.reset() 
        alert("opera successfully created :)")
        addOpera = false 
        addOperaShowFormBtn.innerText = "add an opera";
        operaFormContainer.style.display = "none";
    }

    let displayOperas = false 
    operaCollectionButton.addEventListener('click', () => {
        displayOperas = !displayOperas;
        if (displayOperas) {
            collectionBtnDiv.hidden = false;
            operaCollectionButton.innerText = "hide collections" 
        } else {
            collectionBtnDiv.hidden = true; 
            operaCollectionButton.innerText = "view opera collections"
        }
    }); 



operaApi.getCheckListOperas() 
collectionApi.getCollections() 
// operaApi.getOperas()




