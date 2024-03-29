class Collection {

    static all = []
    static container = document.getElementById("opera-collection")

    constructor({id, name, user, operas}) {
        this.id = id
        this.name = name
        this.user = user
        this.operas = operas

        this.button = document.createElement('button')
        this.button.innerHTML = `${this.name}`
        this.button.id = `${this.id}`
        this.button.addEventListener('click', this.showCollection)

        this.grid = document.createElement('div')
        this.grid.setAttribute("class", "wrapper")
        this.grid.id = `collection-${this.id}`

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
            // event is 'click'
            let id = parseInt(`${event.target.id}`)
            //event.target.id is '6'
            let c = Collection.all.filter(collection => collection.id === id)
            let rest = Collection.all.filter(collection => collection.id !== id)
            // iterate over the operas within collection id 6 and populate new array with them
            // iterate over the operas not within collection id 6 and populate new array with them
            // render operas within new array id 6 collection
           c[0].renderCollection()
            // hide and seek button
            let cDiv = c[0].div
            if (cDiv.hidden){
                cDiv.hidden = false 
                // disable other collection buttons
                rest.forEach(c => c.button.disabled = true) 
                // disable master collectino button
                operaCollectionButton.disabled = true 
            } else {
                // if this collection with id of 6 is hidden, other collection buttons are enabled 
                cDiv.hidden = true 
                operaCollectionButton.disabled = false 
                Collection.all.forEach(c => c.button.disabled = false)       
            }
        }
}

