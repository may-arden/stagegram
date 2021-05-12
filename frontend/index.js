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



