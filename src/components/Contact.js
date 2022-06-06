import React,{useRef} from 'react'
import conTct from "./conTct.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_kzxh7mb', 'portFolio-temp-789', form.current, 'TVCEyBkeglg-AwljO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
   <div className="Container2"  >
        
          <h1 className="heading">GET IN TOUCH!</h1>

          <div className="contactMain">
          <div className="contact1">
          <div className='row-box'>
          <div className='iconEdit'><LocationOnIcon /></div>
          <div> &nbsp; &nbsp; SURAT INDIA</div>
        
          </div>
          <div className='row-box'>
        
          <div className='iconEdit'><EmailIcon /></div>
            <div> &nbsp; &nbsp; dhruv9619@gmail.com</div></div>

           <div className='row-box'>
          <div className='iconEdit'><CodeIcon /></div>
          <a href='https://codeforces.com/profile/dhruv9619' target="_blank" className='cf'><div> &nbsp; &nbsp; Codeforces: dhruv9619</div></a></div>
             
          </div> 
          <div className="contact2">
          <form ref={form} onSubmit={sendEmail}>
           <div className='inputField'>
          <div >
              <input className='nameEdit' type="text" autocomplete="off" name='from_name' placeholder='NAME' required></input>
          </div>
        </div>

        <div className='inputField'>
          <div >
              <input className='nameEdit' name='email' autocomplete="off" type="email" placeholder='EMAIL' required></input>
          </div>
        </div>

        <div className='inputField'>
          <div >
              <textarea className='areaEdit' name='message' autocomplete="off" type="text" placeholder='MESSEGE' required></textarea>
          </div>
        </div>
        
        <div className='inputField'>
          <div >
              <button className='btn btn-submit'>SUBMIT</button>
          </div>
          
        </div>
        </form>
      
                
          </div>

          </div>
      
       
         
           
        </div>
  )
}

export default Contact;