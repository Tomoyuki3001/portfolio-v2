"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please input your name");
      return;
    }
    if (email === "") {
      alert("Please input your email address");
      return;
    }
    if (subject === "") {
      alert("Please input the subject");
      return;
    }
    if (text === "") {
      alert("Please input some messages");
      return;
    }

    emailjs
      .sendForm(
        "service_k9qfmdv",
        "template_2kegrbn",
        form.current,
        "2ZrJYgCWQbrUz3Hz4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setSubject("");
    setText("");
    alert("Your form has been sent!");
  };
  return (
    <section
      id="contact"
      className="w-full flex flex-col items-center py-20 lg:py-36"
    >
      <div className="text-center mb-12">
        <p className="uppercase text-xl tracking-widest text-gray-500">
          Contact
        </p>
        <h2 className="pt-4">Let&apos;s Talk!</h2>
      </div>
      <div className="flex w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326937.7401162046!2d137.12935345851028!3d35.48046824965551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo!5e0!3m2!1sen!2sjp!4v1725334804086!5m2!1sen!2sjp"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="google-map w-full p-4"
        ></iframe>
        <div className="col-span-3 w-full px-4 lg:px-0">
          <div className="p-2">
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="py-2 font-bold">Name</label>
                  <input
                    type="text"
                    className="border-solid border p-3 flex border-gray-300"
                    name="user_name"
                    value={name}
                    onChange={handleChangeName}
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="py-2 font-bold">Email</label>
                  <input
                    type="email"
                    className="border-solid border p-3 flex border-gray-300"
                    name="user_email"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="py-2 font-bold">Subject</label>
                <input
                  type="text"
                  className="border-solid border p-3 flex border-gray-300"
                  name="user_subject"
                  value={subject}
                  onChange={handleChangeSubject}
                  placeholder="Subject"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="py-2 font-bold">Message</label>
                <textarea
                  className="border-solid border p-3 flex border-gray-300"
                  rows={10}
                  value={text}
                  onChange={handleChangeText}
                  name="message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button className="btn btn-outline-secondary !px-36 !py-4 mt-8">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
