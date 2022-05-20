
const validate = (data, type) => {

    const errors = {};

    if (!data.email) 
        errors.email = 'Enter your email'
    else if (!/\S+@\S+\.\S+/.test(data.email))
        errors.email= 'Email is not valid';
    else delete errors.email;    
    
    if (!data.password)
        errors.password = 'Enter your password';
    else if (data.password.length < 6)
        errors.password = 'Password must be more than 6 character';
    else delete errors.password;


    if (type === 'signup') {
        
        if (!data.name.trim())
        errors.name = 'Enter your name';
        else delete errors.name;

        if (!data.confirmPass)
            errors.confirmPass = 'Confirm your password';
        else if (data.confirmPass !== data.password)
            errors.confirmPass = 'The passwords are not match';
        else delete errors.confirmPass;
    
        if (!data.isAccepted)
            errors.isAccepted = 'Accept the regulations';
        else delete errors.isAccepted;
    }
            

    return errors;

}

export default validate;