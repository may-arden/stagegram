const collectionNameInput = document.querySelector("#collection-name")
const collectionUserInput = document.querySelector("#collection-user")

class CollectionApi {


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