import { useFormik, withFormik } from 'formik';
import { loginValidation } from 'utils/validate';
import { useDispatch, useSelector } from 'react-redux';
import useRouter from 'utils/useRouter'
import 'assets/css/style.css'
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from 'utils/refreshtoken';
import { oauthloginRequest } from 'actions/auth/login';
import React from 'react';
import { Accordion, Alert, Button, Card, Tab, Tabs } from 'react-bootstrap';
import useFacebook from 'react-easy-facebook';


const LoginFormComponent = (props: any) => {
    const { values, handleSubmit, handleChange, errors, touched } = props;
    const Router = useRouter();

    const error = useSelector((state: any) => {
        return state.login.error;
    });
    // const [Email, setEmail] = useState<string>();
    // const [pass, setpass] = useState<string>();
    // const handleChange = (e: { target: { value: React.SetStateAction<string | undefined>; }; }) =>{
    //     setEmail(e.target.value)
    //     setpass(e.target.value)

    // }


    // const {isFetching } = useSelector((state: any) => state.Login);
    // useEffect(() => {


    //  console.log(values)

    // }, [values])


    // const handleAdd = () => {

    //     dispatch(loginRequest({
    //         email: values.loginInputEmail,
    //         password: values.loginInputPassword,
    //     }))

    // }


    // console.log("login",values)

    // function onChange(newName: any) {
    //     setCookie('name', newName, { path: '/' });
    //   }
    const dispatch = useDispatch()
    const clientId =
        '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';


    const onSuccess = (values: any) => {
        dispatch(oauthloginRequest({
            email: values.profileObj.email,
            oid: values.profileObj.googleId,
            password: "string",
            username: values.profileObj.name,
            firstname: values.profileObj.givenName,
            lastname: values.profileObj.familyName,
            type: "oauth",
            status: "",
            id: "string ",
            age:"",
            gender:"",
            img:"",

        }))
        console.log('Login Success: currentUser:', values.profileObj);
        // alert(
        //     ` ${res.profileObj.name} 😍`
        // );
        refreshTokenSetup(values);
    };

    const onFailure = (res: any) => {
        console.log('Login failed: res:', res);
        // alert(
        //     `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
        // );
    };
 


    // const responseFacebook = useCallback(() => {
    //     console.log(Response);
    // }, []);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { response, login, logout } = useFacebook({
        appId: "3020249201588598",
    });

    const handleLogin = () => {
        login();
    };

    const handleLogout = () => {
        logout();
    };

   
    return (
        <div className="row  justify-content-center ">

            <div className="col-xl-9 col-lg-12 col-md-9">

                <div className="card  o-hidden border-0 shadow-lg ">
                    <div className="card-body align-items-center ">
                        <div className="row">
                            <div className="col-lg-8   " />
                            <div className="col-lg-12 align-content-center">
                                <div className="p-5">

                                    <form className="user justify-item-center" >
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Welcome</h1>
                                        </div>
                                        <div className="form-group ">
                                            <input
                                                type="email"
                                                className="form-control form-control-user"
                                                id="loginInputEmail"
                                                aria-describedby="emailHelp"
                                                placeholder="Enter Email Address..."
                                                onChange={handleChange}
                                                value={values.loginInputEmail} />
                                            {console.log(values)}
                                            {/* {setEmail(values)} */}
                                            {touched.loginInputEmail && errors.loginInputEmail ?
                                                <span>{errors.loginInputEmail}</span> :
                                                null}
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control form-control-user"
                                                id="loginInputPassword"
                                                placeholder="Password"
                                                onChange={handleChange}

                                                value={values.loginInputPassword} />
                                            {touched.loginInputPassword && errors.loginInputPassword ?
                                                <span>{errors.loginInputPassword}</span> :
                                                null
                                            }
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox small">
                                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                                            </div>
                                        </div>

                                        {/* <div>Sign In</div> */}
                                        {error ? <div style={{ textAlign: 'center' }}><em style={{ textAlign: 'center', fontStyle: 'normal', color: 'red' }}>Invaid Username </em></div> : null}
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-user btn-block"
                                            onClick={handleSubmit}>
                                            {/* {error ? <div style={{ textAlign: 'center' }}><em style={{ textAlign: 'center', fontStyle: 'normal', color: 'red' }}>User does not exist</em></div> : null} */}

                                            Login
                                        </button>
                                        <div className="align-content-center">
                                            Create an account
                                            </div>
                                        <div>
                                            <button onClick={() => { Router.push('/signup') }}
                                                className="btn btn-primary btn-user btn-block">Sign Up</button>
                                        </div>
                                        <div className="form-group">
                                            <GoogleLogin


                                                clientId={clientId}
                                                buttonText="Login"
                                                onSuccess={onSuccess}
                                                onFailure={onFailure}
                                                cookiePolicy={'single_host_origin'}
                                                style={{ marginTop: '100px', color: 'black', width: '100px' }}
                                                isSignedIn={true}
                                            />
                                        </div>

                                        {/* <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Card.Header>
                                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                Click me!
                                            </Accordion.Toggle>
                                        </Card.Header>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion> */}
                                        <button 
                                        className="btn btn-primary btn-user btn-block"
                                         onClick={handleLogin}>
                                             Facebook
                                             </button>
                                             <p className="text-right">
                                       
                                                <Alert.Link onClick={() => {
                                                 Router.push('/password')
                                                            
                                                }}>Forget password?</Alert.Link>
                                        </p>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

interface ILoginFormProps {
    submitForm: any;
    onAuthChange: (payload: any) => any;
}
interface IFormValues {
    loginInputEmail: any;
    loginInputPassword: any;
    error: any;

}

const LoginForm = withFormik<ILoginFormProps, IFormValues>({

    mapPropsToValues: () => ({
        loginInputEmail: '',
        loginInputPassword: '',
        error: null,



    }),

    handleSubmit: (value, { props }) => {
        props.submitForm(value);


    },
    validate: loginValidation,
})(LoginFormComponent);

export default LoginForm;



