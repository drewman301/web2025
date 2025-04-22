import { useState , useEffect } from "react";

function Names(){
    const [ names, setNames ] = useState([]);

    function fetchNames() {//GET the list of names
        const request = new Request("https://httpbin.org/get");
        fetch(request)
        .then((response) => response.json())
        .then((namesArray) => {
            setNames(namesArray);
        });
    }

    //Keep our component's state in sync with the external API.
    useEffect(() => {
        fetchNames();
    }, []);

    function createName(event) {//POST a new name to the API
        event.preventDefault();

        const data = new FormData(event.target);
        const payload = {name: data.get("newName")};
        console.log("Submitting via POST: ", payload);

        //send it to the API.
        const url = "https://httpbin.org/post";
        const request = new Request(url, {
            method: "POST",
            mode: "cors",
            headers: {'Content-Type': 'application/json'}, // MIME type.
            body: JSON.stringify(payload)
        });
        fetch(request)
            .then((response) => response.json())
            .then((newItem) => {
                console.log(newItem);
                // Add the new item to our array of names
                setNames([...names, newItem]);
            })
    }

    function updateName() {//Send a PUT requesr to update a name

    }

    function deleteName(event) {//Send a DELETE request to remove a name
        const id = parseInt(event.target.dataset.id);
        const url = "http://brad.ngrok.io/api/" + id;
        console.log("Deleting: " + url);

        const request = new Request(url, {
            method: "DELETE"
        });
        fetch(request)
            .then((resp) => resp.json())

    }

    // Render our list of names
    try{
    const items = names.map((obj) => {
        return(
            <li key={'id-' + obj.id}>
                <span>{obj.name}</span>
                <button onClick={deleteName} id={'delete-' + obj.id} data-id={obj.id} title="Delete">❎</button>
            </li>
        )
    });
    }catch(err){
        console.log('ERROR! ',err)
    }


    return (
        <div>
            <h1>Names!</h1>
            <form action="#" onSubmit={createName}>
                <p>
                    <input type='text' name='newName' placeholder="Enter a name" />
                </p>
                <p>
                    <input type='submit' />
                </p>
            </form>
        </div>
    )
}

export default Names;