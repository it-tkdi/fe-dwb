import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
import Modal from "./modal";

const ComplaintForm = () => {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [floor, setFloor] = useState("");
    const [unit, setUnit] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [category, setCategory] = useState("");
    const [show, setShow] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name,
      company,
      floor,
      unit,
      phone,
      email,
      description: message,
      complainCategory: category.value,
    };

    // console.log(dataToSubmit);
    // axios({
    //   method: "post",
    //   url: "https://13.214.198.220:3000/api/complain",
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   data: dataToSubmit
    // })
      axios.post('http://13.214.198.220:3000/api/complain', dataToSubmit)
      .then(function (res) {
        console.log(res);
        if (res.status === 200) {
          setShow(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });

      setName("");
      setCompany("");
      setFloor("");
      setUnit("");
      setPhone("");
      setEmail("");
      setMessage("");
  };

  const options = [
    {
      label: "Engineering",
      value: "Engineering",
    },
    {
      label: "Building Service",
      value: "Building Service",
    },
    {
      label: "Others",
      value: "Others",
    }
  ];

  let publicUrl = process.env.PUBLIC_URL + "/";


  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      height: 65,
      border: "2px solid #e4ecf2",
    }),
  };
  
  return (
    <div className="complaint-form pb-120 ">
      <div className="container">
        <div className="ltn__contact-message-area mb-120 mb--100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__form-box contact-form-box box-shadow white-bg">
                  <h4 className="title-2">Form Complaint</h4>
                  <Modal show={show} onClose={() => setShow(false)} />
                  <form id="contact-form" onSubmit={submitHandler}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">
                          <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            name="name"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <p className="alert__text">
                          {/* {error.name ? error.name : ""} */}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-email ltn__office-icon">
                          <input
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            type="text"
                            name="company"
                            placeholder="Enter company name"
                            required
                          />
                          <p className="alert__text">
                            {/* {error.company ? error.company : ""} */}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-phone ltn__custom-icon">
                          <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="text"
                            name="phone"
                            placeholder="Enter phone number"
                            required
                          />
                        </div>
                        <p className="alert__text">
                          {/* {error.phone ? error.phone : ""} */}
                        </p>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-email ltn__custom-icon">
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            required
                          />
                          <p className="alert__text">
                            {/* {error.email ? error.email : ""} */}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-textarea ltn__custom-icon">
                          <input
                            value={floor}
                            onChange={(e) => setFloor(e.target.value)}
                            type="text"
                            name="floor"
                            placeholder="Enter floor"
                            required
                          />

                          <p className="alert__text">
                            {/* {error.floor ? error.floor : ""} */}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-textarea ltn__custom-icon">
                          <input
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            type="text"
                            name="unit"
                            placeholder="Enter unit number"
                            required
                          />
                        </div>
                        <p className="alert__text">
                          {/* {error.unit ? error.unit : ""} */}
                        </p>
                      </div>

                      <div className="col-md-12">
                        <div className="input-item input-item-textarea ltn__chevron-icon">
                          <Select
                            // className="nice-select"
                            components={{
                              DropdownIndicator: () => null,
                              IndicatorSeparator: () => null,
                            }}
                            placeholder="Select Category"
                            defaultValue={category}
                            onChange={setCategory}
                            options={options}
                            styles={customStyles}
                            menuColor="red"
                          />
                        </div>
                        <p className="alert__text">
                          {/* {error.option ? error.option : ""} */}
                        </p>
                      </div>
                    </div>
                    <div className="input-item input-item-textarea">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                        placeholder="Enter message"
                        required
                        // defaultValue={""}
                      />
                    </div>
                    <p className="alert__text">
                      {/* {error.message ? error.message : ""} */}
                    </p>
                    {/* <p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label></p> */}
                    <div className="btn-wrapper mt-0">
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                      >
                        Send Complaint
                      </button>
                    </div>
                    <p className="form-messege mb-0 mt-20" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplaintForm;
