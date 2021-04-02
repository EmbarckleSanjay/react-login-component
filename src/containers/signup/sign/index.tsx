import { signupRequest } from 'actions/signup/signup';
import { useDispatch } from 'react-redux';
import SignupForm from './signupform/index';



export const Signup = (props: any) => {
    const dispatch = useDispatch();
    console.log("submit.......")


    return (
        <SignupForm
            onAuthChange={props.AuthStateSchange}

            submitForm={(values: any) => {
                console.log('submit called... ', props.image);
                dispatch(signupRequest({

                    firstname: values.firstName,
                    lastname: values.lastName,
                    password: values.retypePassword,
                    email: values.email,
                    oid: "",
                    status: "",
                    type: "",
                    age: values.age,
                    gender: values.gender,
                    username: values.username,
                    img: values.image,

                }))
            }


            }
        />
    );
};




