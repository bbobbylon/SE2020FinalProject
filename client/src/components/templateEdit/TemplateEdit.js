import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditTemplate extends Component {

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
      }
    

  componentDidMount() {
    axios.get('http://localhost:5000/templates/editTemplate/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno
        });
      })
      .catch((error) => {
        console.log(error);
      })
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
    axios.put('http://localhost:5000/templates/updateTemplate/' + this.props.match.params.id, templateObject)
      .then((res) => {
        console.log(res.data)
        console.log('Template successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/templates')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Template
        </Button>
      </Form>
    </div>);
  }
}