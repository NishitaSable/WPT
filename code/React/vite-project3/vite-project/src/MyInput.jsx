import { useState } from 'react';

export default function MyInput(){
    const [text, setText] = useState('hello');
function handleChange(e){
    setText(e.target.value)
}
    return(
        <>
            <input type={text} onChange={handleChange}/>
            <p>You typed: {text}</p>
            
        </>
    )

}