class Collection {

    static all = []
    static container = document.getElementById("opera-collection")

    constructor({id, name, user, operas}) {
        // construct object  
        this.id = id
        this.name = name
        this.user = user
        this.operas = operas

        // construct corresponding collection button to insert into DOM 
        // with event listener corresponding to click action 
        // which will then display the opera images inside of the collection
        this.button = document.createElement('button')
        this.button.innerHTML = `${this.name}`
        this.button.id = `${this.id}`
        this.button.addEventListener('click', this.showCollection)

        // assign value to collection attribute for DOM 
        this.grid = document.createElement('div')
        // object.attribute.method("attribute", "value")
        this.grid.setAttribute("class", "wrapper")
        this.grid.id = `collection-${this.id}`

        // construct div corresponding to new collection
        this.div = document.createElement('div')
        this.div.id = `collection-${this.id}`
        this.div.hidden = true 

        collectionBtnDiv.appendChild(this.button)

        Collection.container.appendChild(this.div).appendChild(this.grid)

        Collection.all.push(this)
        
         
        }

        // 
        renderCollection() {
            for (const collectionOpera of this.operas){
                let o = Opera.all.find(element => element.id === collectionOpera.id)
                o.renderOpera(this.grid)
            }
        }

        // 1st this function is triggered by clicking on "avant-garde" or "traditional classics"
        showCollection (event){
            // event is click
            // debugger 
            let id = parseInt(`${event.target.id}`)
            // event.target is <button id="6">trad classics</button>
            //event.target.id is '6'
            // 6 is the id associated with the button html element we wish to manipulate
            // it corresponds to the 'trad classics' collection
            // so the variable c here below is being assigned to represent
            // the button with the id of 6
            let c = Collection.all.filter(collection => collection.id === id, 10)
            // debugger
            // and this rest variable here below is going to represent the other
            // collections that do not have the id of 6
            let rest = Collection.all.filter(collection => collection.id !== id, 10)
            // and here below we dig one layer deep into the Collection object 
            // we have singled out and move onto the next 
            // function renderCollection to iterate over the operas contained
            // within that object
           c[0].renderCollection()
        //    debugger 
            // and here below we handle the visibility of the specific collection button
            // c[0].div = <div id="collection-6" hidden>
            //              <div class="box" id="opera-36"></div>
            //                 <div id="front-36"></div>
            //                  <div id="back-36"></div>
            //                          + other boxes
            //               </div>
            //              </div>
            let cDiv = c[0].div
            if (cDiv.hidden){
                cDiv.hidden = false 
            // so if you're looking at a collection, the buttons
            // corresponding to the other collections are disabled
                rest.forEach(c => c.button.disabled = true) 
                operaCollectionButton.disabled = true 
                
            }else {
            // and if you're not looking at a collection, 
            // the buttons corresponding to the other collections
            // are enabled
                cDiv.hidden = true 
                operaCollectionButton.disabled = false 
                Collection.all.forEach(c => c.button.disabled = false)
                
                 
            }

        }

}

