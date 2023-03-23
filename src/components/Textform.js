
import  React,{useState} from 'react'

export default function Textform(props) {
  const handleUpClick =()=>{

    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLowClick =()=>{
    
     let newText=text.toLowerCase();
     setText(newText)
   }
   const handleClear =()=>{

     let newText="";
     setText(newText)
   }
  const handleOnChange =(event)=>{
  
    setText(event.target.value);
  }
  const CopyText = () => {
    navigator.clipboard.writeText(text);
}
 
  const [text,setText] = useState('Enter Text Here');
   
  return (  
  <>
     <div className="container" style={{color:props.mode==='dark'?'grey':'light'}}>
   <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'light',color:props.mode==='dark'?'white':'black'}}id="MyText" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}> Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClear}> Clear Text</button>
<button className="btn btn-primary mx-1" onClick={CopyText}>Copy Text</button>
   </div>
   <div className="container my-2"style={{color:props.mode==='dark'?'grey':'light'}}>
    <h1>Your Text Summary</h1>
    <p> {text.split(" ").length} words {text.length} characters </p>
    <h3>Minutes Read</h3>
    <p>{0.008*text.split(" ").length}</p>
    <h3>Preview</h3>
    <p>{text.length>0 ?text:"Enter Something In Above Box to Preview Here"}</p>
   </div>
   </>
  )
}
