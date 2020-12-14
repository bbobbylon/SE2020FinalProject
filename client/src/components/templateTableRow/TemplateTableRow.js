import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default class TemplateTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.couseNumber}</td>
                <td>{this.props.obj.emailAddress}</td>
                <td>
                    <Link className="edit-link" to={"/editTemplate/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}