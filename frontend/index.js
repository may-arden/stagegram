const port = "http://127.0.0.1:3000"
const operaApi = new OperaApi(port)
const collectionApi = new CollectionApi(port)

// navigation buttons
const navBar = document.getElementById("nav-bar")
const operaCollectionButton = document.getElementById("opera-collection-btn")
const makeCollectionBtn = document.getElementById("make-collection-button")
const addOperaShowFormBtn = document.getElementById("add-opera-form-btn")

const sortOperasBtn = document.getElementById("sort-operas-button")

// forms and containers 
const operaFormContainer = document.querySelector("#create-opera-form")
const addOperaForm = document.getElementById("add-opera-form")

const collectionFormContainer = document.getElementById("collection-form-container")
const collectionForm = document.getElementById("collection-form")

//divs containing grids 
const checkBoxOperaDiv = document.getElementById("checkbox-opera-list") 
const collectionBtnDiv = document.getElementById("collection-buttons")

addOperaForm.addEventListener("submit", handleNewOperaSubmit) 
collectionForm.addEventListener("submit", handleSubmit)


// builds method to handle 'click' event on sort operas alpha button
// which will then trigger a function in operas.js which has not yet been written
// to render the alphabetized operas
    // let displayAlphaOperas = false 
    sortOperasBtn.addEventListener("click", () => {
        // displayAlphaOperas = !displayAlphaOperas;
        // if (displayAlphaOperas) {
        //   sortOperasBtn.hidden = 
      Opera.all.sort(function(a, b) {
        let nameA = a.title.toUpperCase(); 
        let nameB = b.title.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
          
        }
        return 0;
         
      })
       Opera.appendOperas() 
      // }else {

      // }
    })

// add opera form visibility 
    let addOpera = false
    addOperaShowFormBtn.addEventListener("click", () => {
        addOpera = !addOpera;
          if (addOpera) {
            addOperaShowFormBtn.innerText = "nevermind";
            operaFormContainer.style.display = "block"; 
            [makeCollectionBtn.disabled, operaCollectionButton.disabled] = [true, true];
          }else { 
            addOperaShowFormBtn.innerText = "add an opera";
            operaFormContainer.style.display = "none"; 
            [makeCollectionBtn.disabled, operaCollectionButton.disabled] = [false, false]; 
          }}
    )

// opera image grid and collection submission form visibility
// function expression, omits function name to create anonymous function
    let showCollectionForm = false
    let check = true 
    makeCollectionBtn.addEventListener("click", () => {
        showCollectionForm = !showCollectionForm;
          if (showCollectionForm) {
            collectionFormContainer.hidden = false; 
            Opera.makeCheckList()
            Opera.appendOperas();
            makeCollectionBtn.innerText = "nevermind";
            [addOperaShowFormBtn.disabled, operaCollectionButton.disabled] = [true, true]
          }else {
            Opera.removeCheckList()
            collectionFormContainer.hidden = true;
            checkBoxOperaDiv.innerHTML = "";
            makeCollectionBtn.innerText = "make a collection";
            [addOperaShowFormBtn.disabled, operaCollectionButton.disabled] = [false, false]
          }
          check = false 
          }
    )

    // persist new opera to database // event is 'submit'
    // function declaration, function is named 
    function handleNewOperaSubmit (e) {
        e.preventDefault() 
        operaApi.createOpera() 
        e.target.reset() 
        alert("opera successfully created :)") 
        addOpera = false 
        addOperaShowFormBtn.innerText = "add an opera";
        [addOperaShowFormBtn.disabled, operaCollectionButton.disabled, makeCollectionBtn.disabled] = [false, false]
        operaFormContainer.style.display = "none";
    }

    // display collection buttons 
    let displayOperas = false 
    operaCollectionButton.addEventListener('click', () => {
        displayOperas = !displayOperas;
          if (displayOperas) {
            collectionBtnDiv.hidden = false;
            operaCollectionButton.innerText = "hide collections";
            [addOperaShowFormBtn.disabled, makeCollectionBtn.disabled] = [true, true]
          }else {
            collectionBtnDiv.hidden = true; 
            operaCollectionButton.innerText = "view opera collections";
            [addOperaShowFormBtn.disabled, makeCollectionBtn.disabled] = [false, false] 
        }}
    )

    // persist new collection to database // event is 'submit'
    function handleSubmit(e){
        e.preventDefault();
        collectionApi.createCollection();
        e.target.reset();
        alert("collection successfully created :)");
        showCollectionForm = false 
        makeCollectionBtn.innerText = "make a collection";
        [addOperaShowFormBtn.disabled, operaCollectionButton.disabled] = [false, false]
        collectionFormContainer.hidden = true; 
        Opera.removeCheckList(); 
    }

operaApi.getCheckListOperas() 
collectionApi.getCollections() 





