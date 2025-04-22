import { useState } from "react";
import './ApiFetcher.css';

/*
TODO: Fetch some data from an API, then show it on the page.

1. Render a button
2. Then, when clicked, the button will send an HTTP request to httpbin.org
3. When we get an HTTP response, show updated content on the page.
*/


function ApiFetcher(){
    const url = "https://httpbin.org/uuid";
    const [result, setResult] = useState("");
    const [buttonText, setButtonText] = useState("GET UUID");

    function sendRequest(event){
        const request = new Request(url); //construct the HTTP request.
        fetch(request) //Sends the request, returns a Promise.
            .then((res) => res.json()) // decode JSON
            .then((object) => {
                console.log(object);

                setButtonText("Get Another UUID")
                setResult(object.uuid);
            });
    }

    return (
        <div className="api-fetcher">
            <h1>API Fetcher</h1>
            <button onClick={sendRequest}>{buttonText}</button>
            {result && <p>Here's a UUID: {result}</p>}
        </div>
    );
}

export default ApiFetcher;