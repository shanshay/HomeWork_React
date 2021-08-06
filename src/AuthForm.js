import React from 'react';
import axios from 'axios';

function AuthForm() {

    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`/Account/Login`)
            .then(res => {
                console.log(res.status === 200 ? `OK`: "Bad");
            }
        );
    };

    return(      
        <form onSubmit={onSubmit}>           
            <label>Login: <input type="text" name="username" /></label><br/>
            <label>Password: <input type="password" name="userpassword" /></label><br/>
            <input type="submit" value="Send"/>
        </form>        
    )
}
export default AuthForm;
