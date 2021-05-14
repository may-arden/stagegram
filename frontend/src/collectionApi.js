const collectionNameInput = document.querySelector("#collection-name")
const collectionUserInput = document.querySelector("#collection-user")

class CollectionApi {

    fetch(this.baseUrl, configObj)
        .then (r => r.json())
            .then (json => {
                const c = new Collection(json)

            })

}