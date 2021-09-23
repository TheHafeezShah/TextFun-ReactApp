import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!","success")
  };
  const handleloClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase!","success")
  };
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Cleared successfully!","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);

  };
  const handleCopy = () => {

    navigator.clipboard.writeText(text);
    props.showAlert("Copied!","success")
  };
  const handleSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success")
  }
  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode==='light'?'white':'black',color:props.mode==='light'?'black':'white'}}
            id="MyText"
            rows="4"
            columns="7"
          ></textarea>
        </div>
        <button disabled={text.length===0}
          type="button"
          className="btn btn-dark mx-1 my-1"
          onClick={handleUpClick}
        >
          Uppercase
        </button>
        <button disabled={text.length===0}
          type="button"
          className="btn btn-dark mx-1 my-1"
          onClick={handleloClick}
        >
          lowercase
        </button>
        <button disabled={text.length===0}
          type="button"
          className="btn btn-dark mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button> 
        <button disabled={text.length===0} type="button" className="btn btn-dark mx-1 my-1" onClick={handleSpaces}>
          Removespaces
        </button>
        <button disabled={text.length===0} type="button" className="btn btn-dark mx-1 my-1" onClick={handleCopy}>
          copy
        </button>
      </div>
      <div className="container my-5" style={{color:props.mode==='light'?'black':'white'}}>
        <h3>Your text summary</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} letters
        </p>
        <p>It will take {0.008 * 60 * text.split().filter((element)=>{return element.length!==0}).length} seconds to read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Damn! textform is empty'}</p>
      </div>
    </>
  );
}
