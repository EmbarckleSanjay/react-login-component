import { updateRequest } from "actions/update/update";
import { Formik, useFormik, withFormik } from "formik";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { resetPasswordValidation } from "utils/validate";



export const password = (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      password: '',
      retypePassword:''

    },
    validate: resetPasswordValidation ,

    onSubmit: (values) => {
     
    },
  });
console.log("value...",formik.values)
const handleLogout = () => {
  dispatch(updateRequest({

    password:formik.values.password,

    



}))
}
  return (
    <>
{<div>haii....</div>?
    <div className="col d-flex justify-content-center">

      <div className="col-xl-7 col-lg-8 col-md-12">

        <div className="p-5 d-flex align-item-center">
          <form onSubmit={formik.handleSubmit} >
            <Card style={{ width: '50rem' }} >
              <Card.Header as="h5">Forget password?</Card.Header>
              <Card.Body>
                <label>Password</label>
                <input
                  type="password"
                  className="form-control form-control-user"
                  id="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
         value={formik.values.password}
                              />
               {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                  
                 {/* {touched.password && errors.password ?
                  <span>{errors.password}</span> :
                  null
                } */}
               <label>Re-type Password</label>
                <input
                  type="password"
                  className="form-control form-control-user"
                  id="retypePassword"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  value={formik.values.retypePassword}
                                       />
                        {formik.errors.retypePassword ? <div>{formik.errors.retypePassword}</div> : null}
                           

                <Card.Text>

                </Card.Text>
                <Button variant="primary" block type="submit" onClick={handleLogout} >change password</Button>
              </Card.Body>
            </Card>
          </form>
        </div>
      </div>
    </div>
    :<div>loading....</div>}
    </>
  )
}
// export const signupValidation = (values: any) => {

//   console.log('Inside validation,...')
//   const errors: any = {};
//  if (values.password.length > 20) {
//       errors.password = 'Password should be maximum 20 characters';
//   }
// eslint-disable-next-line no-lone-blocks
{/* <Formik
       initialValues={{
        password: '',
         confirmpass: '',
       }}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     ></Formik> */}
//    else if (!values.retypePassword) {
//       errors.retypePassword = 'Required';
//   } else if (values.retypePassword !== values.password) {
//       errors.retypePassword = 'password mismatch';
//   }

//   return errors;
// };

// interface IPassFormProps {
//   submitForm: any;
// }
// interface IFormValues {
//   password: any,
//   confirmpass: any,


// }
//  const PasswordForm = withFormik<IPassFormProps, IFormValues>({

//   mapPropsToValues: () => ({
//     password: "",
//     confirmpass: "",
 



//   }),

//   handleSubmit: (value, { props }) => {
//     props.submitForm(value);
// console.log("go....press....")

//   },
//   validate: signupValidation,

// })(password);

// export default PasswordForm

// function dispatch(arg0: any) {
//   throw new Error("Function not implemented.");
// }
