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
        this.button_id = `${this.id}`
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

        // Collection #index - which displays the collections
        // in existence 
        // Collection #show - which displays the operas 
        // within the collection when you click on the button
        // corresponding to the collection ('avant-garde', etc)
    
        renderCollection(){
            let o = Opera.all.find(element => element.id === collectionOpera.id)
            o.renderOpera(this.grid)
        }

        showCollection(event){
            let id = parseInt(`${event.target.id}`)
            let c = Collection.all.filter(collection => collection.id !==id, 10) 
            let rest = Collection.all.filter(collection => collection.id !== id, 10)
            c[0].renderCollection() 
            let cDiv = c[0].div 
            if (cDiv.hidden){
                cDiv.hidden = false 
                rest.forEach(c => c.button.disabled = true) 
                plantCollectionButton.disabled = true 
            }else {
                cDiv.hidden = true 
                plantCollectionButton.disabled = false 
                Collection.all.forEach(c => c.button.disabled = false)
            }

        }





};

