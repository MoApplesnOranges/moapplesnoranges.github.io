import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_k313fi3", "template_eoxb5x6", form.current, {
        publicKey: "bmEfw8nCY3g9MocDW",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowPopup(true);

          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED", error.text);
        },
      );
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT SIDE — CONTACT FORM */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">Send a Message</h2>

          <form ref={form} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-gray-400">Name</label>
              <input
                className="mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-indigo-500"
                type="text"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-400">Email</label>
              <input
                className="mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-indigo-500"
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-400">Message</label>
              <textarea
                className="mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg p-3 h-32 resize-none focus:outline-none focus:border-indigo-500"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              value="Send"
              className="bg-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-500 transition w-full"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE — CONTACT INFO */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>

          <p className="text-gray-400 mb-8">
            I'm always open to discussing new projects, collaboration, or
            software engineering opportunities.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>
              📧 Email:
              <span className="ml-2 text-white">will.mo.25890@gmail.com</span>
            </p>

            <p>
              📱 Phone:
              <span className="ml-2 text-white">813-909-5484</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://github.com/MoApplesnOranges"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 border border-gray-800 px-5 py-3 rounded-lg hover:border-indigo-500 transition"
            >
              <FaGithub className="inline mr-2 size-6" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/wmo90258/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 border border-gray-800 px-5 py-3 rounded-lg hover:border-indigo-500 transition"
            >
              <FaLinkedin className="inline mr-2 size-6" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <Modal
        centered
        show={showPopup}
        onHide={() => setShowPopup(false)}
        contentClassName="bg-gray-900 border border-gray-800 text-white rounded-xl"
      >
        <Modal.Header closeButton className="border-b border-gray-800">
          <Modal.Title className="text-lg font-semibold">
            Message Sent
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="text-gray-300">
          Thanks for reaching out! Your message has been sent successfully.
        </Modal.Body>

        <Modal.Footer className="border-t border-gray-800">
          <Button
            className="bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-500 transition"
            onClick={() => setShowPopup(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Contact;
