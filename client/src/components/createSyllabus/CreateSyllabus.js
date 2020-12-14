import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import axios from "axios";

class CreateSyllabus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      instructorName: '',
      courseNumber: '',
      creditHours: '',
      officeNumber: '',
      officeHours: '',
      phoneNumber: '',
      emailAddress: '',     
      courseDescription: '',
      meetingTimes: '',
      meetingLocation: '',
      courseMaterials: '',
      courseSchedule: '',
      gradingScale: '',
      extraInfo: ''
    };

    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault()
    const templateObject = {
      title: this.state.title,
      instructorName: this.state.instructorName,
      courseNumber: this.state.courseNumber,
      courseCreditHours: this.state.courseCreditHours,
      officeNumber: this.state.officeNumber,
      officeHours: this.state.officeHours,
      phoneNumber: this.state.phoneNumber,
      emailAddress: this.state.emailAddress,
      courseDescription: this.state.courseDescription,
      meetimgTimes: this.state.meetingTimes,
      meetingLocation: this.state.meetingLocation, 
      courseMaterials: this.state.courseMaterials,
      gradingScale: this.state.gradingScale,
      extraInfo: this.state.extraInfo
    };
    axios.post('http://localhost:5000/templates/add' , templateObject)
    .then(res => console.log(res.data));
    console.log('Template succesfully created !')
    this.setState({title: '' , instructorName:'' , courseNumber:'' , creditHours:'' , officeNumber:'', officeHours:'' , phoneNumber:'' , emailAddress:'' , courseDescription:'', meetingTimes:'' , meetingLocation:'', courseMaterials:'', courseSchedule:'' , gradingScale:'' , extraInfo:''})
  }
  
  
render() {
return (
      <div style={{ height: "100%", margins: "auto"}}>
            <h4 style={{textAlign:"center"}}>
              <b>Create Syllabus</b>
            </h4>
            <p className="flow-text grey-text text-darken-1" style={{textAlign:"center"}}>
              Fill out the information below to start making your syllabus!
              </p>
              <form onSubmit={this.onSubmit}>
                <div>
                  <label>Class Title: </label>
                  <br />
                  <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                </div>
                <br/>
                <div>
                  <label>Instructor's Name: </label>
                  <br />
                  <input type="text" name="instructorName" onChange={this.onChange} value={this.state.instructorName} />
                </div>
                <br/>
                <div>
                  <label>Course Number: </label>
                  <br />
                  <input type="text" name="courseNumber" onChange={this.onChange} value={this.state.courseNumber} />
                </div>
                <br/>
                <div>
                  <label>Course Credit Hours: </label>
                  <br />
                  <input type="text" name="creditHours" onChange={this.onChange} value={this.state.creditHours} />
                </div>
                <br/>
                <div>
                  <label>Office Number: </label>
                  <br />
                  <input type="text" name="officeNumber" onChange={this.onChange} value={this.state.officeNumber} />
                </div>
                <br/>
                <div>
                  <label>Office Hours: </label>
                  <br />
                  <input type="text" name="officeHours" onChange={this.onChange} value={this.state.officeHours} />
                </div>
                <br/>
                <div>
                  <label>Phone number: </label>
                  <br />
                  <input type="text" name="phoneNumber" onChange={this.onChange} value={this.state.phoneNumber} />
                </div>
                <br/>
                <div>
                  <label>Email Address: </label>
                  <br />
                  <input type="text" name="emailAddress" onChange={this.onChange} value={this.state.emailAddress} />
                </div>
                <br/>
                <div>
                  <label>Course Description: </label>
                  <br />
                  <input type="text" name="courseDescription" onChange={this.onChange} value={this.state.courseDescription} />
                </div>
                <br/>
                <div>
                  <label>Course Meeting Times: </label>
                  <br />
                  <input type="text" name="meetingTimes" onChange={this.onChange} value={this.state.meetingTimes} />
                </div>
                <br/>
                <div>
                  <label>Course Meeting Location: </label>
                  <br />
                  <input type="text" name="meetingLocation" onChange={this.onChange} value={this.state.meetingLocation} />
                </div>
                <br/>
                <div>
                  <label>Course Materials: </label>
                  <br />
                  <input type="text" name="courseMaterials" onChange={this.onChange} value={this.state.courseMaterials} />
                </div>
                <br/>
                <div>
                  <label>Course Schedule: </label>
                  <br />
                  <input type="text" name="courseSchedule" onChange={this.onChange} value={this.state.courseSchedule} />
                </div>
                <br/>
                <div>
                  <label>Grading Scale: </label>
                  <br />
                  <input type="text" name="gradingScale" onChange={this.onChange} value={this.state.gradingScale} />
                </div>
                <br/>
                <div>
                  <label>Extra Information: </label>
                  <br />
                  <input type="text" name="extraInfo" onChange={this.onChange} value={this.state.extraInfo} />
                </div>
              </form>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "2rem"
              }}
              
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              type= "submit"
            >
              Submit
            </button>
            <Link
                to="/dashboard"
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "2rem",
                  float: "right"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Home
              </Link>
          </div>
    );
  }
}
CreateSyllabus.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(CreateSyllabus);