import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [projectDetails, setprojectDetails] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [ProjectDetailsError, setProjectDetailsError] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    setPhoneError(false);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    setLocationError(false);
  };
  const handleProjectDetails = (event) => {
    setprojectDetails(event.target.value);
    setProjectDetailsError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formIsValid = true;

    if (name.trim() === "") {
      setNameError(true);
      formIsValid = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
      formIsValid = false;
    }

    if (!/^[0-9]+$/.test(phone)) {
      setPhoneError(true);
      formIsValid = false;
    }

    if (location.trim() === "") {
      setLocationError(true);
      formIsValid = false;
    }

    if (projectDetails.trim() === "") {
      setProjectDetailsError(true);
      formIsValid = false;
    }

    if (formIsValid) {
      console.log(`
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Location: ${location}
        Project Details: ${projectDetails}
      `);

      // TODO: Send form data to server or do something else with it
    } else {
      console.log("Please fill in all required fields");
    }
  };
  return (
    <>
      <div className="w-[100%] bg-[#F9FAFE] pb-16">
        <div className="lg:w-[85%] md:w-[95%] sm:w-[95%]  mx-[auto] pt-5">
          <div className="lg:w-[100%] sm:w-[95%] md:w-[95%] mx-auto lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 gap-4 mt-16">
            <div className="p-4">
              <h1 className=" text-[25px] font-semibold ">GET IN TOUCH</h1>
              <p className=" mt-2 lg:text-[20px] md:text-[20px] sm:text-[16px] md:w-[100%] lg:w-[80%] sm:w-[140%] text-[gray] font-semibold">
                Get in touch with us for a free consult on the scope of your
                project
              </p>

              <div className="flex flex-row">
                <Image
                  src="https://debobrota-haldar.netlify.app/static/media/contact.ec03def613ffe59fb4ce334fcc107c2e.svg"
                  alt="imag"
                  width={500}
                  height={500}
                />
              </div>
              <div className="flex"></div>
            </div>
            <div className="p-4  lg:w-[110%] md:w-[95%] mx-[auto] lg:ml-[-20%]">
              <form onSubmit={handleSubmit}>
                <div className=" lg:w-[100%] md:w-[100%] sm:w-[100%] mx-[auto] lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col gap-5">
                  <div className="w-[100%]">
                    <input
                      className="w-[70%] sm:w-[100%] h-[60px] border border-gray-900 bg-inherit font-semibold p-5  outline-0 text-[20px] rounded-md "
                      placeholder="Full Name"
                      type="text"
                      name="FullName"
                      value={name}
                      onChange={handleNameChange}
                      style={{ borderColor: nameError ? "red" : "" }}
                      maxLength={30}
                      // required
                    />
                    {nameError && (
                      <p style={{ color: "red" }}>Please enter your name</p>
                    )}
                  </div>
                  <div className="w-[100%]">
                    <input
                      className="w-[70%] sm:w-[100%] h-[60px] border border-gray-900 bg-inherit font-semibold p-5 text-[20px] rounded-md outline-0"
                      placeholder="E-mail"
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleEmailChange}
                      style={{ borderColor: emailError ? "red" : "" }}
                    />
                    {emailError && (
                      <p style={{ color: "red" }}>Please enter a valid Email</p>
                    )}
                  </div>
                </div>
                <div className="mt-8 lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col gap-5">
                  <div className="w-[100%]">
                    <input
                      className="w-[70%] sm:w-[100%] h-[60px] border border-gray-900 bg-inherit font-semibold p-5  outline-0 text-[20px] rounded-md "
                      placeholder="Contact Number"
                      type="Number"
                      name="Phone"
                      value={phone}
                      onChange={handlePhoneChange}
                      style={{ borderColor: phoneError ? "red" : "" }}
                    />
                    {phoneError && (
                      <p style={{ color: "red" }}>
                        Please enter your Phone Number
                      </p>
                    )}
                  </div>
                  <div className="w-[100%]">
                    <input
                      className="w-[70%] sm:w-[100%] h-[60px] border border-gray-900 bg-inherit font-semibold p-5 text-[20px] rounded-md outline-0 "
                      placeholder="Location"
                      type="text"
                      name="Location"
                      value={location}
                      onChange={handleLocationChange}
                      style={{ borderColor: locationError ? "red" : "" }}
                    />
                    {locationError && (
                      <p style={{ color: "red" }}>Please enter your Location</p>
                    )}
                  </div>
                </div>
                <div className="mt-10">
                  <div className="w-[100%]">
                    <textarea
                      placeholder="Briefly tell us about your project"
                      type="text"
                      value={projectDetails}
                      onChange={handleProjectDetails}
                      style={{ borderColor: ProjectDetailsError ? "red" : "" }}
                      className="w-[100%] sm:w-[100%] h-[200px] border border-gray-900 bg-inherit font-semibold p-5 text-[20px] rounded-md outline-0 "
                    />
                    {ProjectDetailsError && (
                      <p style={{ color: "red" }}>
                        Please enter your Briefly tell us about your project
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-5">
                  <input
                    type="Submit"
                    className="lg:w-[35%] md:w-[40%] sm:w-[100%] font-semibold text-[20px] rounded-lg bg-black text-[white] h-[50px]"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
