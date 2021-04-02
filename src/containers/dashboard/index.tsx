import React, { useEffect, useState } from 'react';
import { signoutRequest } from 'actions/auth/login';
import { userRequest } from 'actions/user/user';


import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Card,
    Tabs,
    Tab,
} from "react-bootstrap";
import useRouter from 'utils/useRouter';
import "./index.css"
import { GoogleLogout } from 'react-google-login';
import { updatepasswordRequest, updateRequest } from 'actions/update/update';
import { useFormik } from 'formik';
import { signupValidation } from 'utils/validate';


// export const signup = () => {
//     const counter = useSelector((state: RootState) => state.counter)
//     return <div>{counter}</div>
//   }
// eslint-disable-next-line react-hooks/rules-of-hooks










export const Dashboard = (props: any) => {
    const Router = useRouter();

    const { data } = useSelector((state: any) => state.update);
    const { jwt } = useSelector((state: any) => state.login);

    const [firstname, setfirstname] = useState<string>("");
    const [lastname, setlastname] = useState<string>("");
    const [username, setusername] = useState<string>("");

    const { userdata } = useSelector((state: any) => state.user)


    const clientId =
        '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';
    const dispatch = useDispatch();
    
    const formik = useFormik({
        initialValues: {
            oldpassword:'',
            password: '',
            retypePassword: ''

        },
        validate: signupValidation,

        onSubmit: (values) => {

        },
    
    });
    const handlesubmit = () => {
        dispatch(updateRequest({


            username: username,
            firstname: firstname,
            lastname: lastname,





        }))
    }
    const handlepass = () => {
        dispatch(updatepasswordRequest({
            password: formik.values.retypePassword ,


        }))
    }
    function refreshPage(){
		
			// eslint-disable-next-line no-restricted-globals
			location.reload();
			
	}
 

    useEffect(() => {
        dispatch(userRequest({
            jwt: jwt,
        }))

      

    }, []);


    useEffect(() => {



        console.log('user data....', userdata)
       

    }, [userdata]);




    console.log("value...", formik.values)

    return (
        <>
            {(userdata) ?
                <div className="row  justify-content-center ">

                    <div className="col-xl-9 col-lg-12 col-md-9">

                        <div className="card  o-hidden border-0 shadow-lg ">
                            <div className="card-body align-items-center ">
                                <div className="row">
                                    <div className="col-lg-8   " />
                                    <div className="col-lg-12 align-content-center">
                                        <div className="profile-usertitle-name">
                                            <div className="profile-userpic">
                                                <img src={userdata.data.data.img} alt=""></img>
                                            </div>
                                    Hai {userdata.data.data.firstname}{"  "}{userdata.data.data.lastname}!
                                            <div className="profile-usertitle">

                                                <div className="profile-usertitle-job">
                                                    <label>Email</label><br></br>
                                                    {userdata.data.data.email}

                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile-usermenu">

                                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">

                                                <Tab eventKey="home" title="Home">
                                                    <Card bg="dark" text="white"  >
                                                        <Card.Body>
                                                            Welcome {userdata.data.data.firstname}  " _ " <br></br>
                                                            <br></br>
                                                            {/* FirstName:{jwt.data.data.firstname}<br></br>
                                                lastName:{jwt.data.data.lastname} */}
                                                        </Card.Body>
                                                    </Card>
                                                </Tab>
                                                <Tab eventKey="Account" title="Account">
                                                    <Card bg="dark" text="white" >
                                                        <Card.Header> Hai</Card.Header>
                                                        <Card.Body>
                                                            <Card.Title>{userdata.data.data.firstname}</Card.Title>
                                                            <Card.Text>
                                                                is a {userdata.data.data.age} years old {userdata.data.data.gender}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </Tab>
                                                <Tab eventKey="Help" title="update profile">

                                                    <div className="row  justify-content-center ">
                                                        <div className="row">

                                                            <div className="col-md-12">
                                                                <br></br>
                                                                <Card className="col-md-12" >
                                                                    <Card.Header as="h5">profile</Card.Header>

                                                                    <Card.Body>
                                                                       
                                                                            <fieldset className="form-group">
                                                                                <textarea className="form-control" placeholder="First Name" onChange={(e) => setfirstname(e.target.value)}>{firstname}</textarea>
                                                                            </fieldset>
                                                                            <fieldset className="form-group">
                                                                                <textarea className="form-control" placeholder="Last Name" onChange={(e) => setlastname(e.target.value)}>{lastname}</textarea>
                                                                            </fieldset>
                                                                            <fieldset className="form-group">
                                                                                <textarea className="form-control" placeholder="User Name" onChange={(e) => setusername(e.target.value)}>{username}</textarea>
                                                                            </fieldset>
                                                                          
                                                                    <Button onClick={handlesubmit} >
                                                                        Update Profile
                                                              </Button>
                                                                       
                                                                    
                                                                    </Card.Body>
                                                                   
                                                                </Card>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </Tab>

                                                <Tab eventKey="Changepassword" title="Change password">
                                                    <div className="row  justify-content-center ">
                                                        <div className="row">

                                                            <div className="col-md-12">
                                                                <br></br>
                                                                <Card >
                                                                    <Card.Header as="h5">Forget password?</Card.Header>
                                                                    <Card.Body>
                                                                        <label>Old Password</label>
                                                                        <input
                                                                            type="password"
                                                                            className="form-control form-control-user"
                                                                            id="oldpassword"
                                                                            placeholder="Password"
                                                                            onChange={formik.handleChange}
                                                                            value={formik.values.oldpassword}

                                                                        />
                                                                        <label>New Password</label>
                                                                        <input
                                                                            type="password"
                                                                            className="form-control form-control-user"
                                                                            id="password"
                                                                            placeholder="Password"
                                                                            onChange={formik.handleChange}
                                                                            value={formik.values.password}
                                                                        />
                                                                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                                                                        <label>Confirm Password</label>
                                                                        <input
                                                                            type="password"
                                                                            className="form-control form-control-user"
                                                                            id="retypePassword"
                                                                            placeholder="Password"
                                                                            onChange={formik.handleChange}
                                                                            value={formik.values.retypePassword}
                                                                        />
                                                                      {formik.errors.retypePassword ? <div>{formik.errors.retypePassword}</div> : null}

                                                                      {/* {(data)?
                                                                     (data.data.message) :""} */}

                                                                        <Button  variant="primary" block type="submit" onClick={handlepass}  >change password</Button>
                                                                    </Card.Body>
                                                                </Card>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                            </Tabs>

                                        </div>
                                        <div>{userdata.data.data.message}</div>
                                        <div>
                                            <GoogleLogout
                                                clientId={clientId}
                                                onLogoutSuccess={() => {
                                                    dispatch(signoutRequest());
                                                }}
                                                buttonText="Logout"
                                            ></GoogleLogout>
                                        </div>
                                    </div>

 
                                    {/* <Button onClick={() => {
                                    dispatch(signoutRequest());

                                }}>Logout</Button> */}


                                   
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                : <div>Loading user data!</div>
            }
            
        </>
    );

}