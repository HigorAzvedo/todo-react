import React, { useState } from "react";

function TodoForm(props){

    const [text, setText] = useState("")

    function hanleChange(event){
        let t = event.target.value;
        setText(t)
    }

    function addItem(event){
        event.preventDefault()
        if(text){
            props.onAddItem(text)
            setText("")
        }
        
    }
    
    return(<form>
            <input className="input" onChange={hanleChange} type="text" value={text}></input>
            <button className="btn-form" onClick={addItem}>Adicionar</button>
        </form>)
}

export default TodoForm