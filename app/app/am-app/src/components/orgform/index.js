// This component is used to render a form which is used to upload the details of the resume.
import React, { useState, useEffect } from "react";
import "./index.css";
import Cookies from "js-cookie";

function Resume(props) {
  const [values, setValues] = useState({
    orgname: '',
    description: '',
    // start: new Date(),
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // The below functions are used to update state when the respective input changes.
  const handleOrgNameInputChange = (event) => {
    setValues({ ...values, orgName: event.target.value });
  };

  const handleDescriptionInputChange = (event) => {
    setValues({ ...values, description: event.target.value });
  };
  const handleDateInputChange = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  // This function is executed when user submits the form.
  const handleSubmit = (event) => {
    event.preventDefault();
    // setFormErrors(validate(values));

    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      const apiUrl = `http://localhost:5000/resume`;
      const jwtToken = Cookies.get("jwt_token");
      const options = {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      };

      async function fetchData() {
        const response = await fetch(apiUrl, options);
        if (response.ok === true) {
          alert(
            "Resume submitted successfully, You will be redirected to home page..."
          );
          window.location = "/";
        }
      }
      fetchData();
    }
  }, [formErrors]);


  // Displaying the form
  return (
    <div className="grad">
      <form method="" onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="resume-submit-msg">Submitted successfully</div>
        ) : (
          ""
        )}
        <div className="resume-card-container">
          <h1 className="resume-card-container-heading">
            Post a Job
          </h1>
          <div className="resumeCard">
            <div className="resume-card-column">
              <div className="">
                <h3>Job Description</h3>

                  <div className="resume-card-name-in">
                    <label>
                      orgName{" "}
                      <a
                        type="button"
                        className="hover-button firstName"
                        placeholder="i"
                      >
                        <i class="fas fa-info-circle" aria-hidden="true"></i>
                      </a>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="resume-fname-input"
                      value={values.orgname}
                      onChange={handleOrgNameInputChange}
                    />
                  </div>


                  <div className="resume-card-name-in">
                    <label>
                      Description{" "}
                      <a
                        type="button"
                        className="hover-button lastname"
                        placeholder="i"
                      >
                        <i class="fas fa-info-circle" aria-hidden="true"></i>
                      </a>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="resume-fname-input"
                      value={values.description}
                      onChange={handleDescriptionInputChange}
                    />
                  </div>
                </div>
                </div>
                <div className="mb-3 offset-5 resume-sub-btn-div">
                <button className="resumebtn btn btn-outline-primary">
                  Submit
                </button>
              </div>
              </div>
            </div>
      </form>
    </div>
  );
}

export default Resume;
