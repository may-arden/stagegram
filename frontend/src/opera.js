class Opera {

    static all = [] 

    constructor({title, director, description, img_src}){
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
                                <img class="img_src" id="img-${this.id} src="${this.img_src}" alt="${this.title}">`
        this.back = document.createElement('div')
        this.back.id = `back-${this.id}`
        this.back.hidden = true 
        this.back.innerHTML = ` <h3 class="director">${this.director}</h3>
                                <p class="description" id="opera-${this.id}">${this.description}</p>`
        this.front.addEventListener('mouseover', (e) => this.displayBack(this))
        this.back.addEventListener('mouseover', (e) => this.displayFront(this))
        this.element.appendChild(this.front)
        this.element.appendChild(this.back)
        Opera.all.push(this)
        }


};

