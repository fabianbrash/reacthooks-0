import React, {useState } from 'react'
import '../hook.css';

const HookTest = () => {
    
    const [age, setAge] = useState(3);
    const [name, setName] = useState('Alexander')

    return (
        <div>
           <div>
               <span>Name: <input type='text' value={name} onChange={e => setName(e.target.value)}></input></span>
           </div>
           <div className="left">
               <span>Age: {age}</span>
           </div>
           <div>
               <button onClick={() => setAge(age + 1)}>Update Age by one</button>
           </div>
           <div className="left">
               <p>Name is: {name}</p>
               <p>Age is: {age}</p>
           </div>
        </div>
    )
}

export default HookTest
