const port = 'http://localhost:3000/operas'
const operaApi = new OperaApi(port)

// navigation buttons
const navBar = document.getElementById("nav-bar")
const operaCollectionButton = document.getElementById("opera-collection-btn")
const makeCollectionBtn = document.getElementById("make-collection-button")
const addOperaShowFormBtn = document.querySelector("#add-opera-form-btn")
