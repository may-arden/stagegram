class Opera {

    static all = [] 

    constructor({id, title, director, description, img_src}){
        this.id = id 
        this.title = title
        this.director = director
        this.description = description
        this.img_src = img_src
        
        this.element = document.createElement('div')
        this.element.setAttribute("class", "box")
        this.element.id = `opera-${this.id}`
        this.front = document.createElement('div')
        this.front.id = `front-${this.id}`
        this.front.innerHTML = `<h3 class="title">${this.title}</h3>
                                <img class="img_src" id="img-${this.id}" src="${this.img_src}">`
        
        this.back = document.createElement('div')
        this.back.id = `back-${this.id}`
        this.back.hidden = true 
        this.back.innerHTML = `<h3 class="director">${this.director}</h3>
                                <p class="description" id="opera-${this.id}">${this.description}</p>`
        this.front.addEventListener('mouseover', (e) => this.displayBack(this))
        this.back.addEventListener('mouseover', (e) => this.displayFront(this))
        this.element.appendChild(this.front)
        this.element.appendChild(this.back)
        Opera.all.push(this)
        }

        // static methods are like class methods
        // they cannot be called on instances of objects, only the class itself
        static makeCheckList() {
            this.all.forEach(opera => opera.makeOperaCheckBox())
        }

        static removeCheckList() {
            this.all.forEach(opera => opera.removeOperaCheckBox())
        }

        static appendOperas() {
            this.all.forEach(opera => opera.renderOpera(checkBoxOperaDiv))
        }

        makeOperaCheckBox() {
            let div = document.createElement('div')
            div.innerHTML = `<div class="check-box-div"><input type="checkbox" id="${this.id}" name="opera_ids" value="${this.id}"></div>`
            this.element.appendChild(div)
        }
        
        removeOperaCheckBox() {
            let div = document.querySelector(".check-box-div")
            div.remove()
        }

        appendChecklist() {
            checkBoxOperaDiv.appendChild(this.element)
        }

        renderOpera(htmlElement) {
            htmlElement.appendChild(this.element)
        }

        // renderAlphaOperas() 


        // displayBack = (e) => {
        //     e.front.hidden = true
        //     e.back.hidden = false 
        // }

        displayBack = () => {
            this.front.hidden = true 
            this.back.hidden = false 
        }

        displayFront = (e) => {
            e.front.hidden = false 
            e.back.hidden = true 
        }

}

