import MailchimpSubscribe from "react-mailchimp-subscribe"
import React, { Component } from "react";
import './App.css';


// a basic form
const CustomForm = ({ status, message, onValidated }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME : name.value
    });

    

  return (
   
    <div  className="containerModal">
      {status === "sending" && <div style={{ color: "blue" }}>Enviando...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: "Obrigado por se inscrever" }}
        />
      )}
   
      
      <input
        className="EmailInput"
        ref={node => (name = node)}
        type="text"
        placeholder="Seu Primeiro Nome"
      />
      <br />
      <input
        className="EmailInput"
        ref={node => (email = node)}
        type="email"
        placeholder="Digite seu melhor E-mail"
      />
      <br />

      <button className="button2" onClick={submit}>
       Se inscrever
      </button>
      
    

    </div>
  );
};

class Formulario extends Component {
  render() {
    const url ="https://gmail.us11.list-manage.com/subscribe/post?u=83594bd74eafb1b9866b7f7b9&amp;id=a5579730fb";
    return (

      <div >
     
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />
          )}
        />
      </div>
    );
  }
}

export default Formulario