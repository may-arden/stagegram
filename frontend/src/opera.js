class Opera {

    static all = [] 

    constructor({title, director, description}){
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
    }
};

