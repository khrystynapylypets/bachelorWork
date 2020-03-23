import React, { Component } from 'react'
import {
    Modal,
    Container,
    Row,
    Col,
    Button,
    Form,
    Spinner,
    DropdownButton,
    Dropdown,
    InputGroup,
    FormControl
} from 'react-bootstrap'
import './style.scss'
import {ScheduleForm} from '../../components/ScheduleForm/index'


class ScheduleFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            degree: '',
            form: '',
            coefficients: 0
        };
    }

    handleChangeDegree = (event) => {
        this.setState({ degree: event.target.value });
    }

    handleChangeForm = (event) => {
        this.setState({ form: event.target.value });
    }

    handleChangeCoef = (event) => {
        this.setState({ coefficients: event.target.value });
    }

    handleSubmit = (event) => {
        
        alert('Degree: ' + this.state.degree + '\nForm: ' + this.state.form + '\nCoefficients: ' + this.state.coefficients);
        event.preventDefault();
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => {this.setState({ show: true }); };
    
    render() {
        console.log(this.state.show)
        return (
            <ScheduleForm
                handleSubmit={this.handleSubmit}
                handleChangeDegree={this.handleChangeDegree}
                handleChangeForm={this.handleChangeForm}
                handleChangeCoef={this.handleChangeCoef}
                handleShow={this.handleShow}
                handleClose={this.handleClose}
                show={this.state.show}
            />
        )
    }
}

export default ScheduleFormContainer