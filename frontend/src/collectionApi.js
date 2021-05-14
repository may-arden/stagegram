const collectionNameInput = document.querySelector("#collection-name")
const collectionUserInput = document.querySelector("#collection-user")

class CollectionApi {

    const collectionInfo = {
        collection: {
        name: collectionNameInput.value, 
        user: collectionUserInput.value, 
        opera_ids: array 
        }
    }

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(collectionInfo)
    }

    fetch(this.baseUrl, configObj)
        .then (r => r.json())
            .then (json => {
                const c = new Collection(json)

            })

}