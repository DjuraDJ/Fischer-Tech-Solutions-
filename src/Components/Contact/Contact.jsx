/* 
     Date: 7/1/2022
     Author:Djura Djurickovic 
*/



import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';


function FadeInSection(props){
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(()=>{
       const observer = new IntersectionObserver(entries =>{entries.forEach(entry => setVisible(entry.isIntersecting));
       });
       observer.observe(domRef.current);
    },[]);
    return(<div className={`fade-in-section ${isVisible ? 'is-visible': ''}`} ref={domRef}>{props.children}</div>);
}

function ContactUs () {
   
    const contactUsTitle = "Contact"; 

    const form = useRef();
         const SERVICE_ID="";
         const TEMPLATE_ID="";
         const USER_ID ="";

           const handleSubmit = (e)=>{
              e.preventDefault();
              emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,form.current,USER_ID).then((result)=>{
                                console.log(result.text);
                                alert("Success!")
                            
                        },(error)=>{console.log(error.text);
                            alert("oops your message was not sent", error);
                               
              });
             
              
        };

    return (
            <FadeInSection> 
                <h1 className="contactUsTitle">{contactUsTitle}</h1>
                <hr className="contactHr"/>
            <div className ="contactMain" >
            <Form onSubmit ={handleSubmit}>
                 <Form.Field id="form-input-control-email"
                             control={Input}
                             className="EmailName"
                             label="Email"
                             name = "user_email"
                             placeholder ="Email..."
                             required
                             icon="mail"
                             iconPosition="left"
                 />
                 <Form.Field id="form-input-control-name"
                             control={Input}
                             className="Name"
                             label="Name"
                             name="user_Lname"
                             placeholder="Name…"
                             required
                             icon="user circle"
                             iconPosition="left"
                  />
                     <Form.Field id="form-input-control-Phone-name"
                             control={Input}
                             label="Phone Number"
                             name="user_phone"
                             className="phoneNumber"
                             placeholder="Phone Number…"
                             required
                             icon="user circle"
                             iconPosition="left"
                  />
                  <Form.Field id="form-textarea-control-opinion"
                              control={TextArea}
                              className="msgBox"
                              label="Message"
                              name="user_message"
                              placeholder="Message…"
                              required
                   />
                    <Button className="submitBtn" type="submit" color="black">Submit</Button>
                            
           </Form>          
           </div> 
           </FadeInSection> 
         
    );
}




function Contact() {
    return (<div>
          <ContactUs/>
    </div>  );
}

export default Contact;
