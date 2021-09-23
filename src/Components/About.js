import React from "react";

export default function About(props) {

    // const [acc_style, setAcc_style] = useState( {
    //     color:'black',
    //     backgroundColor:'white'
    //})
    let acc_style={
      color:props.mode==="dark"?"white":"black",
      backgroundColor:props.mode==="dark"?"black":"white "
    }
  return (
    <div className="container" style={acc_style}>
      <h2 className="my-4">About us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true" 
              aria-controls="collapseOne"
              style={acc_style}
            >
              <strong>Text-Based app</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={acc_style}>
          Its a text-based app, where you can do some fun with your text, which includes many features, and boom just copy it and you're good to go.
             
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={acc_style}
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={acc_style}>
            Yeah, you heard it,  its also free to use, no money.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={acc_style}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={acc_style}>
            It includes many features, you can make your text uppercase, lowercase and it even do word count.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
