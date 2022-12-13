import React, { useState } from 'react'

export default function TextForm(props) {
     const handleUpClick= () =>{
           let newText = text.toUpperCase();
           setText(newText);
           props.showAlert("Uppercase is applied to text","Success");
     }
     const handleLowClick= () => {
        let loText = text.toLowerCase();
        setText(loText);
        props.showAlert("Lowercase is applied to text","Success");
     }
     const handleOnChange = (event) =>{
        setText(event.target.value);
     }
     const handleclearText= () =>{
        setText("");
        props.showAlert("All text is cleared","Success");
     }
     const handlefirstLetterCaps = () =>{
        /*text.charAt(0).toUpperCase() +*/ let textChange = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(textChange);
        props.showAlert("First letter in Uppercase","Success");
     }
     const handleCopy = () =>{
        console.log('it works');
        var copy = document.getElementById("copy");
        copy.select();
        navigator.clipboard.writeText(copy.value);
        props.showAlert("All text is copied","Success");
     }
     const handleremoveSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed","Success");
     }

    const [text,setText] = useState('');


    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'white'}} id="copy" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleclearText}>Clear Text</button>
            <button className='btn btn-primary mx-1' onClick={handlefirstLetterCaps}>First Letter Capital</button>
            <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1' onClick={handleremoveSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{color: props.mode==='light'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length-1} words and {text===" "?text.length-1:text.length} characters and {(text.split(" ").length-1)*0.008}min to read all words</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter text in the above text area to preview here'}</p>
        </div>
        </>
    )
}