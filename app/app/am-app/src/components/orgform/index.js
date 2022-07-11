// This component is used to render a form which is used to upload the details of the resume.
import React, { useState, useEffect,Component } from "react";
import axios from 'axios';
import "./index.css";
import Cookies from "js-cookie";

export default class Organization extends Component {
  constructor(props) {
    super(props);

    this.onChangeOrgname = this.onChangeOrgname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      orgname: '',
      description: '',
      start: new Date(),
    }
  }


  onChangeOrgname(e) {
    this.setState({
      orgname: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      start: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      orgname: this.state.orgname,
      description: this.state.description,
      start: this.state.start
    }

    console.log(exercise);

    axios.post('http://localhost:5000/organizations/add', exercise)
      .then(res => console.log(res.data));

  }


  // Displaying the form
  render(){
    return (
      <div className="grad">
        <form method="" onSubmit={this.onSubmit}>
          <div className="resume-card-container">
            <h1 className="resume-card-container-heading">
              Post a Job
            </h1>
              <div className="">
                <div className="resume-card-column">
                  <div className="">
                    <h3>Job Description</h3>
                    <div className="form-group"> 
                  <label>Organization Name: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.orgname}
                      onChange={this.onChangeOrgname}
                      />
                </div>
                <div className="form-group"> 
                  <label>Description: </label>
                  <input  type="text"
                      required
                      className="form-control"
                      value={this.state.description}
                      onChange={this.onChangeDescription}
                      />
                </div>
                <div className=" resume-btn-div">
                  <button className="resumebtn btn-lg btn-outline-primary">
                    submit
                  </button>
                </div>
              </div>
            </div>
            </div>
          </div>
        </form>
      </div>
      
      
      
      
      
      
      
      
      
      
      
      
        );
      }
  }
  

