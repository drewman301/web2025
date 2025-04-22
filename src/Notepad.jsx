//import { useState } from "react";

function Notepad(){

    //const [notepadText, setNotepadText] = useState('');

    //Credit to danallison on GitHub for this code :)
    function downloadString(text, fileType, fileName) {
        var blob = new Blob([text], { type: fileType });
      
        var a = document.createElement('a');
        a.download = fileName;
        a.href = URL.createObjectURL(blob);
        a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function() { URL.revokeObjectURL(a.href); }, 1500);
      }

      
    function saveText(){
        localStorage.setItem('textbox-text', document.getElementById('notepad-textarea').value);
    }

    function loadText(){
        document.getElementById('notepad-textarea').value = (localStorage.getItem('textbox-text') || "");
    }

    return(
        <div id='ls-notepad'>
            <div>
                <textarea id="notepad-textarea"/>
            </div>
            <div>
                <button onClick={saveText}>Save</button>
                <button onClick={loadText}>Load</button>
                <button onClick={() => downloadString(document.getElementById('notepad-textarea').value, 'txt', 
                    `text-${Math.floor(Date.now() / 1000)}.txt`)}>Download</button>
            </div>
        </div>
    );
}

export default Notepad;