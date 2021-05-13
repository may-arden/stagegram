const port = 'http://localhost:3000/operas'
const operaApi = new OperaApi(port)

// navigation buttons
const navBar = document.getElementById("nav-bar")
const operaCollectionButton = document.getElementById("opera-collection-btn")
const makeCollectionBtn = document.getElementById("make-collection-button")
const addOperaShowFormBtn = document.querySelector("#add-opera-form-btn")

// forms and containers 
const operaFormContainer = document.querySelector("#create-opera-form")
const addOperaForm = document.getElementById("add-opera-form")

const checkBoxOperaDiv = document.getElementById("checkbox-opera-list") 
const collectionBtnDiv = document.getElementById("collection-btn-div")

let showCollectionForm = false
let check = true 
makeCollectionBtn.addEventListener("click", () => {
    showCollectionForm = !showCollectionForm;
    if (showCollectionForm) {
      collectionFormContainer.hidden = false; 
        Opera.makeCheckList()
        Opera.appendOperas();
    }else {
        Opera.removeCheckList()
        collectionFormContainer.hidden = true;
        checkBoxOperaDiv.innterHTML = "";
        makeCollectionBtn.innterHTML = "make a collection";
        
    }
    check = false 
    }) 


