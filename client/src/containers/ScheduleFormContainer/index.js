import React, { Component } from 'react'
import './style.scss'
import {ScheduleForm} from '../../components/ScheduleForm/index'
import CreateSchedule from '../../components/CreateSchedule/index'
import { getAllSubjects } from '../../store/actions'
import { connect } from 'react-redux'

class ScheduleFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            isSubmitted: false,
            degree: 'Бакалавр',
            form: 'Денна',
            coefficients: 30
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

    getCoefficients = () => {
        return(this.state.coefficients)
    }

    handleSubmit = (event) => {
        this.setState({ isSubmitted: true });
        // alert('Degree: ' + this.state.degree + '\nForm: ' + this.state.form + '\nCoefficients: ' + this.state.coefficients);
        event.preventDefault();
    }

    handleOnClickSelect = () => {
        const { getAllSubjects } = this.props
        console.log(this.props)
        getAllSubjects()
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => {this.setState({ show: true , isSubmitted: false}); };
    
    render() {
        console.log(this.state.show)
        return (
            <>
                <ScheduleForm
                    handleSubmit={this.handleSubmit}
                    handleChangeDegree={this.handleChangeDegree}
                    handleChangeForm={this.handleChangeForm}
                    handleChangeCoef={this.handleChangeCoef}
                    handleShow={this.handleShow}
                    handleClose={this.handleClose}
                    show={this.state.show}
                />
                {this.state.isSubmitted ? <CreateSchedule degree={this.state.degree} form={this.state.form} coefficients={this.state.coefficients} /> : null}
            </>
        )
    }
}

const mapDispatchToProps = {
    getAllSubjects,
}

const mapStateToProps = ({ subjects }) => ({
    subjects: subjects.subjects,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ScheduleFormContainer)