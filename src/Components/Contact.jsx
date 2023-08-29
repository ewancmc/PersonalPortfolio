import React from "react";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const animation = useAnimation();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [emailStatus, setEmailStatus] = React.useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setEmailStatus("empty");
      return;
    }
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailStatus("success")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <InView onChange={(inView) => inViewHandler(inView, animation)}>
      <section id="contact" className="section bg-primary">
        <motion.div
          className="container mx-auto"
          initial={{ opacity: 0 }}
          animate={animation}
        >
          <div className="flex flex-col lg:gap-x-8 lg:flex-row">
            <form
              onSubmit={sendEmail}
              className="space-y-8 w-full max-w-[700px]"
            >
              <div className="flex gap-8">
                <input
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="input"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                className="input"
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                className="textarea"
                type="text"
                name="message"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="btn btn-lg bg-blue-700 hover:bg-blue-900">
                Send
              </button>
            </form>
          </div>
          <div className="email-status mt-4">
            {emailStatus === "empty" && (
              <p className="text-yellow-400">
                Please fill in all fields before submitting
              </p>
            )}
            {emailStatus === "success" && (
              <p className="text-green-400">Email sent successfully</p>
            )}
          </div>
        </motion.div>
      </section>
    </InView>
  );
};
