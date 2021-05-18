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


        // handle new collection submit 



        // renders individual operas inside collection
        renderCollection(){
            // debugger
            let alphaOperas = this.operas.sort(function(a, b){
                // debugger
                let name1 = a.title.toUpperCase();
                let name2 = b.title.toUpperCase();
                if (name1 < name2) {
                    return -1;
                }
                if (name1 > name2) {
                    return 1;
                }
                return 0;
            });

                for (const collectionOpera of alphaOperas) {
                    let o = Opera.all.find(element => element.id === collectionOpera.id);
                    o.renderOpera(this.grid);
                    // debugger
                }
        }

        // renders buttons with collection titles 
        showCollection (event){
            
            let id = parseInt(`${event.target.id}`)
            let c = Collection.all.filter(collection => collection.id === id, 10)
            let rest = Collection.all.filter(collection => collection.id !== id, 10)
            // let c = Collection.all.filter(collection => collection.id === id, 10)
            // debugger
           c[0].renderCollection()
        //    debugger 
            
            let cDiv = c[0].div
            if (cDiv.hidden){
                cDiv.hidden = false 
                rest.forEach(c => c.button.disabled = true) 
                // operaCollectionButton.disabled = true 
                
            }else {
                cDiv.hidden = true 
                // operaCollectionButton.disabled = false 
                Collection.all.forEach(c => c.button.disabled = false)
                 
            }

        }

}

