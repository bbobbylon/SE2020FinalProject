import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
class CreateSyllabus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      courseNumber: '',
      officeNumber: '',
      officeHours: '',
      
    };

    this.onChange = this.onChange.bind(this);
  }

  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
              <form>
                <div>
                  <label>Class Title: </label>
                  <br />
                  <input type="text" name="title" onChange={this.onChange} value={this.state.title} />
                </div>
                <br />
                <div>
                  <label>Course Number: </label>
                  <br />
                  <input type="text" name="courseNumber" onChange={this.onChange} value={this.state.courseNumber} />
                </div>
                <div>
                  <label>Office Number: </label>
                  <br />
                  <input type="text" name="officeNumber" onChange={this.onChange} value={this.state.officeNumber} />
                </div>
                <div>
                  <label>Office Hours: </label>
                  <br />
                  <input type="text" name="officeHours" onChange={this.onChange} value={this.state.officeHours} />
                </div>
              </form>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
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