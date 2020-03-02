import React, {useState} from 'react';

// UI Components
import Input from '../Components/Input';
import Button from '../Components/Button';

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const handleSigninSubmit = () => {
        
    }

    const handleInputChange = (e) => {
        if(e.target.name === "email"){
            setEmail(e.target.value);
        }
        if(e.target.name === "password"){
            setPassword(e.target.value);
        }
    }

    return (
        <>
            <Input type="email" class="form-control" handleChange={handleInputChange} name="email" value={email}/>
            <Input type="password" class="form-control" handleChange={handleInputChange} name="password" value={password}/>
            <Button type="primary" handleClick={handleSigninSubmit} displaydata="Create Account"/>
        </>
    )

}

export default Signin;