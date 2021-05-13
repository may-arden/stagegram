const port = "http://127.0.0.1:3000"
const operaApi = new OperaApi(port)

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

operaApi.getCheckListOperas() 
operaApi.getPlants()




