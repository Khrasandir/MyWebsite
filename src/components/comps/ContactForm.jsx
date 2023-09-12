import { useRef } from 'react';
import { Textarea, Button } from '@mui/joy';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sqb06j8',
        'template_kma5gaj',
        form.current,
        'UwG7NHU9VoLE_Ych9'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Your email has been sent successfully!!');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
      >
        <Textarea
          name="userName"
          placeholder="Enter Name"
          sx={{ mb: 1 }}
        />
        <Textarea
          name="userEmail"
          placeholder="Enter Email"
          sx={{ mb: 1 }}
        />
        <Textarea
          name="userSubject"
          placeholder="Enter Subject"
          sx={{ mb: 1 }}
        />
        <Textarea
          name="userMessage"
          placeholder="Enter Message"
          minRows={3}
          sx={{ mb: 1 }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default ContactForm;
