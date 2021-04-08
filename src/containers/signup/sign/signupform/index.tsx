import { Router } from "config/routes";
import React, { Suspense, useState } from "react";
import { Alert, Form, Row } from "react-bootstrap";
import "./index.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import Select from "react-select"
import PhoneInput from "react-phone-number-input"
import 'react-phone-number-input/style.css'
import { signupValidation } from "utils/validate";
import { withFormik } from "formik";
import { useDispatch } from 'react-redux';
import useRouter from "utils/useRouter"
import PasswordStrengthBar from 'react-password-strength-bar';
import { signupRequest } from "actions/signup/signup";


const signup = (props: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [date, setdate] = useState<Date | Date[]>(new Date());
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [Option, setOption] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [image, setImage] = useState<string>();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Router = useRouter();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { values, handleSubmit, handleChange, errors, touched ,setFieldValue } = props;

    const options = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Others', label: 'Others' },
    ];

    // eslint-disable-next-line react-hooks/rules-of-hooks

    // const handleDelete = () => {
    //     dispatch(signupRequest({
             
    //         firstname: values.firstName,
    //         lastname:values.lastName,
    //         password:values.retypePassword,
    //         email:values.email,
    //         oid:"",
    //         status:"",
    //         type:"",
    //         age:values.age,
    //         gender:values.gender,
    //         username:values.username,
    //         img:image,
           
    //     }))
    //     };
     

    // setOption(values.gender)
    // console.log("gender",values.gender)
    // eslint-disable-next-line no-lone-blocks
    // {values.image = document.getElementById('img') as unknown as HTMLInputElement["src"]}
    // {console.log("img...",values.image)}
  

    return (
        <div className="row  justify-content-center ">

            <div className="col-xl-9 col-lg-12 col-md-9">

                <div className="card  o-hidden border-0 shadow-lg ">
                    <div className="card-body align-items-center ">
                        <div className="row">

                            <div className="col-lg-12 align-content-center">
                                <div className="p-5">
                                    <form >
                                        <h3>Sign Up</h3>

                                        <div className="form-group">
                                            <label>First name</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                className="form-control"
                                                placeholder="First name"
                                                onChange={handleChange}
                                                value={values.firstName}

                                            />
                                            {touched.firstName && errors.firstName ?
                                                <span>{errors.firstName}</span> :
                                                null}

                                        </div>
                                        <div className="form-group">
                                            <label>Last name</label>
                                            <input type="text"
                                                className="form-control"
                                                id="lastName"
                                                placeholder="Last name"
                                                onChange={handleChange}
                                                value={values.lastName}

                                            />
                                            {touched.lastName && errors.lastName ?
                                                <span>{errors.lastName}</span> :
                                                null}
                                        </div>
                                        <div className="form-group">
                                            <label>User name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="username"
                                                placeholder="User name"
                                                onChange={handleChange}
                                                value={values.username}

                                            />
                                            {touched.username && errors.username ?
                                                <span>{errors.username}</span> :
                                                null}


                                        </div>
                                      

                                        <div className="form-group">
                                            <div><label>Date of birth</label></div>
                                            <DatePicker className="cal" placeholderText="Date"
                                                onChange={(date: any) => { setdate(date); }}
                                                selected={date}
                                                id="date"
                                                 /> </div>
                                        <Row className=" ">
                                            <div className="form-group col-md-6 mt-1">
                                                <label>Age</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="age"
                                                    placeholder="Age"
                                                    onChange={handleChange}
                                                    value={values.age}
                                                />
                                                {touched.age && errors.age ?
                                                    <span>{errors.age}</span> :
                                                    null}

                                            </div>
                                            <div className="form-group col-md-6 mt-1">
                                                <label>gender</label>
                                                <input type="text"
                                                    className="form-control"
                                                    id="gender"
                                                    placeholder="gender"
                                                    onChange={handleChange}
                                                    value={values.gender}
                                                />
                                            </div>
                                            {/* <input className="cal" type="date" id="birthday" name="birthday"  ></input> */}
                                            {/* <div className="col-md-6 mt-1">
                                                <div><label>Gender</label></div>

                                                <Select values={Option} options={options} inputValue={values.gender}/>

                                                

                                            </div> */}
                                        </Row>
                                  
                                        <img className="col-md-5 p-1" src={values.image} alt=''  ></img>       
                                                   
                                        <div className="form-group">
                                            <input type="file"   onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                const fileList = event.target.files;
                                                if (!fileList)
                                                    return;
                                                var reader = new FileReader();
                                                reader.onload = function (event) {
                                                    // The file's text will be printed hereS
                                                     const result = event.target?.result;
                                                     setFieldValue('image', result as string )
                                                     
                                                   


                                                };
                                                reader.readAsDataURL(fileList[0]);
                                               
                                            }}></input>
                                        </div>
                                   


                                        <div className="form-group">
                                            {/* <label>Mobile number</label> */}
                                            {/* <input 
                                             type="tel" 
                                             
                                            id="mobile"
                                             className="form-control"
                                              placeholder="Enter Mobile number" 
                                              onChange={handleChange}
                                              value={values.mobile}

                                          />
                                          {touched.mobile && errors.mobile ?
                                              <span>{errors.mobile}</span> :
                                              null} */}
                                            <PhoneInput
                                                placeholder="Enter mobile number"
                                                value={value}
                                                onChange={setValue} />
                                                {/* {setFieldValue('value')} */}
                                            {/* {touched.mobile && errors.mobile ?
                                              <span>{errors.mobile}</span> :
                                              null} */}
                                        </div>
                                        <div className="form-group">

                                        </div>


                                        <div className="form-group">
                                            <label>Email address</label>
                                            <input type="email"
                                                id="email"
                                                className="form-control"
                                                placeholder="Enter email"
                                                onChange={handleChange}
                                                value={values.email}

                                            />
                                            {touched.email && errors.email ?
                                                <span>{errors.email}</span> :
                                                null}
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password"
                                                id="password"
                                                className="form-control form-control-user"
                                                placeholder="Enter password"
                                                onChange={handleChange}
                                                // {...setpassword(values.Password)}
                                                value={values.password}

                                            />
                                            <PasswordStrengthBar
                                                password={values.password}
                                                onChangeScore={(score: number) => {

                                                }}

                                            />

                                            {touched.password && errors.password ?
                                                <span>{errors.password}</span> :
                                                null}
                                        </div>
                                        <div className="form-group">
                                            <label>Re-enter Password</label>
                                            <input className="form-control form-control-user"
                                                type="password"
                                                placeholder="password"
                                                id="retypePassword"
                                                onChange={handleChange}
                                                value={values.retypePassword}

                                            />
                                            {touched.retypePassword && errors.retypePassword ?
                                                <span>{errors.retypePassword}</span> :
                                                null}
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block"
                                            onClick={handleSubmit}
                                        >

           
                                            Sign Up
                                            </button>
                                        {/* <div className="col-md-8 d-flex justify-content-between">
                                            <label  >Male</label>
                                            <input className="mt-1" type="radio" id="male" name="gender" value={values.gender}>
                                            </input>
                                            <label   >Female</label>
                                            <input className="mt-1" type="radio" id="female" name="gender" value="female">
                                            </input>
                                            <label  >Other</label>
                                            <input type="radio" className="mt-1" id="other" name="gender" value="other">
                                            </input>
                                        </div> */}
                                        <p className="forgot-password text-right">
                                            <Alert variant={"light"}>
                                                Already registerd
                                                <Alert.Link onClick={() => {
                                                    Router.push('/dashboard');

                                                }}> sign up?</Alert.Link>

                                            </Alert>
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

interface ISignupFormProps {
    submitForm: any;
    onAuthChange: (payload: any) => any;
}
interface IFormValues {
    firstName: any;
    lastName: any;
    retypePassword: any,
    error: any;
    Password: any;
    mobile: any;
    email: any
    image: any;
    gender: any;
    username: any;
    age: any;
    phone:any;
}

const SignupForm = withFormik<ISignupFormProps, IFormValues>({
   
    mapPropsToValues: () => ({
        firstName: " ",
        lastName: " ",
        retypePassword: '',
        Password: '',
        email: '',
        mobile: '',
        error: null,
        image: '',
        gender: '',
        username: '',
        age: '',
        phone:'',


    }),



    handleSubmit: (value, { props }) => {
        props.submitForm(value);
        console.log("pressed....")
        // dispatch(signupRequest({
             
          
        //     img:image,
           
        // }))

    },
    validate: signupValidation,


})(signup);

export default SignupForm;

