function GenericSpan(props){
    
    return <span 
    className={props.className} 
    onClick = {props.handleClick ? props.handleClick : ()=>{console.log("Nothing passes to handle click")}} 
    >
    {props.text}
    </span>;
    }


export default GenericSpan;