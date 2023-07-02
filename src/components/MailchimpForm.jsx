// import MailchimpSubscribe from "react-mailchimp-subscribe";
// import { Newsletter } from "./Newsletter";

export const MailchimpForm = () => {
  return (
    <h1>Form goes here...</h1>
  )
  // const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  // return (
  //   <>
  //     <MailchimpSubscribe
  //       url={postUrl}
  //       render={({ subscribe, status, message }) => (
  //         <Newsletter
  //           status={status}
  //           message={message}
  //           onValidated={formData => subscribe(formData)}
  //           />
  //       )}
  //       />
  //   </>
  // )
}
