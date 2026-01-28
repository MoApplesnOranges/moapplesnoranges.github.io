import React, { use, useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_mrr02qy", "template_lnsaz9x", form.current, {
        publicKey: "pLnI_3agFktkr1zzG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED", error.text);
        },
      )
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
      })
      .then(setShowPopup(true));
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900">
      <form ref={form} className="form">
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Name</label>
          <input
            className="form-input mt-1 block w-half bg-white"
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Email</label>
          <input
            className="form-input mt-1 block w-half bg-white"
            type="text"
            value={email}
            name="user_email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">
            Message
          </label>
          <textarea
            className="form-input mt-1 block w-half bg-white"
            placeholder="Type your message here.."
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleSubmit}
            type="submit"
            value="Send"
          >
            Leave a message!
          </Button>
        </div>
      </form>
      <section className="mt-8 text-center text-white">
        <h2 className="text-lg font-semibold">Contact Info</h2>
        <p className="mt-2">
          Email: <span className="font-medium">will.mo.25890@gmail.com</span>
        </p>
        <p>
          Phone: <span className="font-medium">813-909-5484</span>
        </p>
      </section>
      <div className="grid h-screen place-items-center">
        <Modal
          className="flex flex-col items-center justify-center"
          show={showPopup}
          onHide={() => setShowPopup(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Message Submitted</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your message has been successfully submitted!</Modal.Body>
          <Modal.Footer>
            <Button
              className="px-6 py-3 bg-red text-red-600 rounded-lg shadow-lg hover:bg-blue-200 transition-all transform active:scale-95 text-xl delay-75 font-bold"
              onClick={() => setShowPopup(false)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Contact;
