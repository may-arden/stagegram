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

        renderCollection() {
            for (const collectionOpera of this.operas){
                let o = Opera.all.find(element => element.id === collectionOpera.id)
                o.renderOpera(this.grid)
            }
        }

        showCollection (event){
            // event is click
  
            let id = parseInt(`${event.target.id}`)
            // event.target is <button id="6">trad classics</button>
            //event.target.id is '6'
            let c = Collection.all.filter(collection => collection.id === id)
            // collections that do not have the id of 6
            let rest = Collection.all.filter(collection => collection.id !== id)
            // iterate over the operas contained
            // within that object
           c[0].renderCollection()
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
            // hide and seek buttons
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

