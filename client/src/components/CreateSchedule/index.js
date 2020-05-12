import React, { Component } from 'react';
import './style.scss';
import GeneralSubjectsCellContainer from '../../containers/GeneralSubjectsCellContainer';
import SpecialitySubjectsCellContainer from '../../containers/SpecialitySubjectsCellContainer';
import SelectiveSubjectsCellContainer from '../../containers/SelectiveSubjectsCellContainer';
import CoefficientsCellContainer from '../../containers/CoefficientsCellContainer';
import {
  Container,
  Table
} from 'react-bootstrap';



class CreateSchedule extends Component {

  render() {
    return (
      <div className='headings'>
        <h1 className='main-heading title'>Навчальний план</h1>
        <h2 className='subheadings title'>Спеціальність:
                    {this.props.degree === 'Бакалавр' ? " Комп'ютерні науки"
            : " Комп'ютерні науки та системи управління"}</h2>
        <h2 className='subheadings title'>Кафедра: Автоматизовані системи управління</h2>
        <h2 className='subheadings title'>Освітній ступінь: {this.props.degree}</h2>
        <h2 className='subheadings title'>Форма навчання: {this.props.form}</h2>

        {this.props.degree === 'Бакалавр' ?
          <div className='table-container' >
            <Table className='main-table2'>
              <thead>
                <tr className='title'>
                  <td>I семестр</td>
                  <td>II семестр</td>
                  <td>III семестр</td>
                  <td>IV семестр</td>
                  <td>V семестр</td>
                  <td>VI семестр</td>
                  <td>VII семестр</td>
                  <td>VIII семестр</td>
                </tr>
              </thead>
              <tbody>
                <tr className='first-area'>
                  <GeneralSubjectsCellContainer semester='1' />
                  <GeneralSubjectsCellContainer semester='2' />
                  <GeneralSubjectsCellContainer semester='3' />
                  <GeneralSubjectsCellContainer semester='4' />
                  <GeneralSubjectsCellContainer semester='5' />
                  <GeneralSubjectsCellContainer semester='6' />
                  <GeneralSubjectsCellContainer semester='7' />
                  <GeneralSubjectsCellContainer semester='8' />
                </tr>
                <tr className='second-area'>
                  <SpecialitySubjectsCellContainer semester='1' />
                  <SpecialitySubjectsCellContainer semester='2' />
                  <SpecialitySubjectsCellContainer semester='3' />
                  <SpecialitySubjectsCellContainer semester='4' />
                  <SpecialitySubjectsCellContainer semester='5' />
                  <SpecialitySubjectsCellContainer semester='6' />
                  <SpecialitySubjectsCellContainer semester='7' />
                  <SpecialitySubjectsCellContainer semester='8' />
                </tr>
                <tr className='third-area'>
                  <SelectiveSubjectsCellContainer semester='1' />
                  <SelectiveSubjectsCellContainer semester='2' />
                  <SelectiveSubjectsCellContainer semester='3' />
                  <SelectiveSubjectsCellContainer semester='4' />
                  <SelectiveSubjectsCellContainer semester='5' />
                  <SelectiveSubjectsCellContainer semester='6' />
                  <SelectiveSubjectsCellContainer semester='7' />
                  <SelectiveSubjectsCellContainer semester='8' />
                </tr>
                <tr className='fourth-area'>
                  <CoefficientsCellContainer coefficients={this.props.coefficients} semester='1' />
                  <CoefficientsCellContainer coefficients={this.props.coefficients} semester='2' />
                  <CoefficientsCellContainer coefficients={this.props.coefficients} semester='3' />
                  <CoefficientsCellContainer coefficients={this.props.coefficients} semester='4' />
                  <CoefficientsCellContainer coefficients={this.props.coefficients} semester='5' />
                  <CoefficientsCellContainer coefficients={this.props.coefficients} semester='6' />
                  <CoefficientsCellContainer coefficients={this.props.coefficients} semester='7' />
                  <CoefficientsCellContainer coefficients={this.props.coefficients} semester='8' />
                </tr>
              </tbody>
            </Table>
          </div>
          :
          <Container >
            <Table className='main-table'>
              <thead>
                <tr className='title'>
                  <td>I семестр</td>
                  <td>II семестр</td>
                  <td>III семестр</td>
                </tr>
              </thead>
              <tbody>
                <tr className='first-area'>
                  <GeneralSubjectsCellContainer semester='1' />
                  <GeneralSubjectsCellContainer semester='2' />
                  <GeneralSubjectsCellContainer semester='3' />
                </tr>
                <tr className='second-area'>
                  <SpecialitySubjectsCellContainer semester='1' />
                  <SpecialitySubjectsCellContainer semester='2' />
                  <SpecialitySubjectsCellContainer semester='3' />
                </tr>
                <tr className='third-area'>
                  <SelectiveSubjectsCellContainer semester='1' />
                  <SelectiveSubjectsCellContainer semester='2' />
                  <SelectiveSubjectsCellContainer semester='3' />
                </tr>
                <tr className='fourth-area'>
                  <CoefficientsCellContainer coefficients={this.props.coefficients} semester='1' />
                  <CoefficientsCellContainer coefficients={this.props.coefficients} semester='2' />
                  <CoefficientsCellContainer coefficients={this.props.coefficients} semester='3' />
                </tr>
              </tbody>
            </Table>
          </Container>
        }
        <button type='submit' className='save-btn btn btn-primary' disabled=''>
          ЗБЕРЕГТИ
                </button>
      </div>
    );
  }
}

export default CreateSchedule;