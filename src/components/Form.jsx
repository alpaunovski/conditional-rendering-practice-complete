import React from "react";
import Input from "./Input";


function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      { 
        //Using the ternary operator to check if the user is registered and display the corresponding fields and button.
        
        !props.userIsRegistered ? <><Input type="password" placeholder="Confirm Password" /><button type="submit">Register</button> </>: <button type="submit">Login</button>
        
        }
    </form>
  );
}

export default Form;
