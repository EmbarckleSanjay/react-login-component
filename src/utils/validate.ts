export const loginValidation = (values: any) => {
    const errors: any = {};
    if (!values.loginInputEmail) {
        errors.loginInputEmail = 'Email Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.loginInputEmail)) {
        errors.loginInputEmail = 'Invalid email address';
    }
    if (!values.loginInputPassword) {
        errors.loginInputPassword = 'Password Required';
    } else if (values.loginInputPassword.length < 6) {
        errors.loginInputPassword = 'Password should be minimum 6 characters';
    } else if (values.loginInputPassword.length > 20) {
        errors.loginInputPassword = 'Password should be maximum 20 characters';
    }

    return errors;
};

export const signupValidation = (values: any) => {

    console.log('Inside validation,...')
    const errors: any = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
  console.log("pasword.....")
  if (!values.age) {
    errors.age = 'Required';
}
 else if (!/[0-9]/i.test(values.age)) {
    errors.age = 'should be number';
}
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length <4 ) {
        errors.password = 'week';
    } 
    else if (values.password.length <5 ) {
        errors.password = 'medium';
    }else if (values.password.length < 6) {
        errors.password = 'Password should be minimum 6 characters';
    } else if (values.password.length > 20) {
        errors.password = 'Password should be maximum 20 characters';
    }
    
    if (!values.firstName) {
        errors.firstName  = 'Required';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    }
    if (!values.username) {
        errors.username = 'Required';
    }
    // if (!values.gender) {
    //     errors.gender = 'Required';
    // }
    if (!values.retypePassword) {
        errors.retypePassword = 'Required';
    } else if (values.retypePassword !== values.password) {
        errors.retypePassword = 'password mismatch';
    }
    console.log('errors == ', errors)
    return errors;
};

export const resetPasswordValidation = (values: any) => {
    const errors: any = {};
    if (!values.password) {
        errors.password = 'Required';
    }
    if (!values.retypePassword) {
        errors.retypePassword = 'Required';
    } else if (values.password !== values.retypePassword) {
        errors.retypePassword = 'password mismatch';
    }
    return errors;
};

export const forgotPasswordValidation = (values: any) => {

    const errors: any = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
};
