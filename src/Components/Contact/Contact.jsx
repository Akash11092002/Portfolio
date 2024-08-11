import React from 'react'
import './Contact.css';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "78d058fe-d82c-4e5f-b989-91429d1e2a69");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };


  return (
    <div className='contact'>
    <div className='contact-title'>
    <h1> Get  In  Touch</h1>


    </div>
    <div  id='contact'  className='contact-section'>
    <div className='contact-left'>
    <h1>
        Lets Talk
    </h1>
    <p>
        I'm currently available to take on new projects ,so feel free to contact me.
    </p>
    <div className='contact-details'>
    <div className='contact-detail'>
 <p>mauryaakash3965@gmail.com</p>
    </div>
    <div className='contact-detail'>
+91- 6387417082
    </div>
    <div className='contact-detail'>
   Ghaziabad ,India
    </div>

    </div>
    </div>
    <form   onSubmit={onSubmit}          className='contact-right'>
    <label>Your Name</label>
    <input type="text" placeholder='enter your name' name='name'/>
    <label>Your Email</label>
    <input type="email" placeholder='enter your email' name='email'/>
    <label>Write your message here</label>
    <textarea name='message' rows='8' placeholder='enter your message'>

    </textarea>
    <button type='submit ' className='contact-submit'>
Submit Now
    </button>
    </form>

    </div>

    
    </div>
  )
}

export default Contact