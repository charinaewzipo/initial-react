import React from "react";
import { useForm } from "react-hook-form";
import "./contact.scss";

const Contact = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  return (
    <>
      <div className="contactContainer" id="contact">
        <div className="Container">
          <div className="left">
            <h1> GET IN TOUCH</h1>
            <div className="circle2"></div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="item">
                <input
                  {...register("firstName", { required: true })}
                  placeholder="FirstName"
                />

                <input {...register("lastName")} placeholder="LastName " />
              </div>

              <div className="item">
                <input
                  {...register("mail", {
                    required: "Email Address is required",
                  })}
                  placeholder="Email"
                />
              </div>
              <div className="item">
                <textarea
                  name=""
                  id=""
                  cols="60"
                  rows="10"
                  placeholder="Message"
                  {...register("message", { required: true })}
                ></textarea>
              </div>
              <p>
                {" "}
                {(errors.firstName?.type === "required" &&
                  "First name is required") ||
                  errors.mail?.message}
              </p>

              <button type="submit">Send</button>
            </form>
          </div>
          <div className="right">
            <img
              src="https://images.unsplash.com/photo-1570610198943-d7134265c617?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
