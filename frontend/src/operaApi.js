const titleInput = document.querySelector("#opera-title")
const directorInput = document.querySelector("#opera-director")
const descriptionInput = document.querySelector("#opera-description")
const imgSrcInput = document.querySelector("#opera-img-src")

class OperaApi {

    constructor(port){
        this.baseUrl = `${port}/operas`
    }

    createOpera() {
        const operaInfo = {
            title: titleInput.value, 
            director: directorInput.value,
            description: descriptionInput.value,
            img_src: imgSrcInput.value  
        }

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(operaInfo)    
        }

        fetch(this.baseUrl, configObj)
            .then (r => r.json())
              .then (json => {
                const o = new Opera(json)
              })
    }
    
    getCheckListOperas() {
        fetch(this.baseUrl)
            // .catch((e => { console.log(e) }))
            .then(r => r.json())
                .then(data => {
                    // console.log(data)
                    data.forEach(element => {
                        let o = new Opera(element)
                    })
                })
    }
}