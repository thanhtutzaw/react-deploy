import React from 'react';
import './App.css';
const Fun = () => {
    function message(){
        var element = document.getElementById('pink')
        element.classList.toggle('pink')
    }

    return (  
        <button id="hi" className="padding" onClick={message}>Click me to change function event handler</button>
    );
}
 
export default Fun;