import { useState } from "react";

function Form() {
    const [items , setitems] = useState({contact:"+91"});
    function handle (e) {
        const name = e.target.name;
        const val = e.target.value;
        setitems((pr) => {return {...pr,[name]:val}})
    }
    const [res , updres] = useState(false);
    function submit () {
        updres(true)
        console.log("changed"+res);
    }
    return(
        <>
        <form onSubmit={(e) =>  e.preventDefault()}>
        <center index = {'1'}>
        <label >Name-</label><input name="name" type='text'onChange={handle} /> <br/>
        <label >Age-</label><input name ='age' type="number" onChange={handle} /> <br/>
        <label >Email-</label><input name='mail' type="email" onChange={handle} /> <br/>
        <label >ContactNo-</label><input type="number" name='contact' onChange={handle} /> <br/>
        <label>Nearest-Region</label><select name="region" onChange={handle} >
            <option>SELECT</option>
            <option value='coimbatore'>COIMBATORE</option>
            <option value='chennai'>CHENNAI</option>
            <option value='erode'>ERODE</option>
            <option value='madurai'>MADURAI</option>
            <option value='banglore'>BANGLORE</option>
            <option value='kolkata'>KOLKATA</option>
            <option value='delhi'>DELHI</option>
            <option value='hydrabad'>HYDRABAD</option>
            <option value='mumbai'>MUMBAI</option>
        </select> <br/> <br/> <br/>
        <button onClick={submit}>SUBMIT</button>
        <br/>
      {res &&  Object.entries(items).map(([key,value],index) => <p index={index}>{key}--{value}</p>
        ) 
        }
        </center>
        </form>
        </>
    )
}

export default Form;