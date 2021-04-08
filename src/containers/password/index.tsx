import { updateRequest } from "actions/update/update";
import { Formik, useFormik, withFormik } from "formik";
import { mainModule } from "process";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { forgotPasswordValidation } from "utils/validate";


export const password = (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch()
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formik = useFormik({
    initialValues: {
      email: '',
      retypePassword: ''

    },
    validate: forgotPasswordValidation,

    onSubmit: (values) => {

    },
  });
  console.log("value...", formik.values.email)
  // const sendmail = require('sendmail')();
  // sendmail({
  //   from: formik.values.email,
  //   to: formik.values.email,
  //   subject: 'test sendmail',
  //   html: 'Mail of test sendmail ',
  // }, function (err: { stack: any; }, reply: any) {
  //   console.log(err && err.stack);
  //   console.dir(reply);
  // })
  // const handlepass = () => {
  //   window.location.reload()
  // }
  const nodemailer = require("nodemailer");

async function main() {
 
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: testAccount.user, 
      pass: testAccount.pass, 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '<sanjay.k@embarckle.com>', // sender address
    to: formik.values.email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

  return (
    <>

      <div className=" row d-flex justify-content-center col-md-12 ">

        

              <form onSubmit={formik.handleSubmit} >
                <br>
                </br>
                <br></br>




                <Card style={{ width: '50rem' }} >
                  <Card.Header as="h5">Forget password?</Card.Header>
                  <Card.Body>

                    <label>Email </label>
                    <input
                      type="email"
                      className="form-control form-control-user"
                      id="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    <Card.Text>




                    </Card.Text>
                    <Button variant="primary" type="submit" onClick={nodemailer} >Send mail</Button>
                  </Card.Body>
                </Card>




              </form>

          </div>

     
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
