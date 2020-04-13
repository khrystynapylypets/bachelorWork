import React, { Component } from 'react'
import './style.scss'
import { GeneralSubjectsCell, ProfessionSubjectsCell, SelectiveSubjectsCell, Coefficients} from '../../components/TableCells/index'
import  TableCellContainer from '../../containers/TableCellContainer'
import {
    Container,
} from 'react-bootstrap'



class CreateSchedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isChosen: false,
            discipline: ''
        };
    }

    ChooseDiscipline = () => {
        this.setState({
            isChosen: true
        })
    }

    render() {
        return (
            <div className='headings'>
                <h1 className='main-heading title'>Графік дисциплін</h1>
                <h2 className='subheadings title'>Спеціальність:
                    {this.props.degree === 'Бакалавр' ? <p className='subheadings title'>Автоматизовані системи управління</p>
                        : <p className='subheadings title'>(Уточнити)</p>}</h2>
                <h2 className='subheadings title'>Освітній ступінь: {this.props.degree}</h2>
                <h2 className='subheadings title'>Форма навчання: {this.props.form}</h2>

                {this.props.degree === 'Бакалавр' ?
                    <div className='table-container' >
                        <table className='main-table2'>
                            <tbody>
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
                                <tr className='first-area'>
                                    {/* <GeneralSubjectsCell getAllSubjects={this.props.getAllSubjects} subjects={this.props.subjects} onSelectClick={this.props.onSelectClick} ChooseDiscipline={this.ChooseDiscipline} isChosen={this.state.isChosen}/> */}
                                    <TableCellContainer />
                                    <GeneralSubjectsCell />
                                    <GeneralSubjectsCell />
                                    <GeneralSubjectsCell />
                                    <GeneralSubjectsCell />
                                    <GeneralSubjectsCell />
                                    <GeneralSubjectsCell />
                                    <GeneralSubjectsCell />
                                </tr>
                                <tr className='second-area'>
                                    <ProfessionSubjectsCell />
                                    <ProfessionSubjectsCell />
                                    <ProfessionSubjectsCell />
                                    <ProfessionSubjectsCell />
                                    <ProfessionSubjectsCell />
                                    <ProfessionSubjectsCell />
                                    <ProfessionSubjectsCell />
                                    <ProfessionSubjectsCell />
                                </tr>
                                <tr className='third-area'>
                                    <SelectiveSubjectsCell />
                                    <SelectiveSubjectsCell />
                                    <SelectiveSubjectsCell />
                                    <SelectiveSubjectsCell />
                                    <SelectiveSubjectsCell />
                                    <SelectiveSubjectsCell />
                                    <SelectiveSubjectsCell />
                                    <SelectiveSubjectsCell />
                                </tr>
                                <tr className='fourth-area'>
                                    <Coefficients coefficients={this.props.coefficients}/>
                                    <Coefficients coefficients={this.props.coefficients}/>
                                    <Coefficients coefficients={this.props.coefficients}/>
                                    <Coefficients coefficients={this.props.coefficients}/>
                                    <Coefficients coefficients={this.props.coefficients}/>
                                    <Coefficients coefficients={this.props.coefficients}/>
                                    <Coefficients coefficients={this.props.coefficients}/>
                                    <Coefficients coefficients={this.props.coefficients}/>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    :
                    <Container >
                        <table className='main-table'>
                            <tbody>
                                <tr className='title'>
                                    <td>I семестр</td>
                                    <td>II семестр</td>
                                    <td>III семестр</td>
                                </tr>
                                <tr className='first-area'>
                                    <GeneralSubjectsCell />
                                    <GeneralSubjectsCell />
                                    <GeneralSubjectsCell />
                                </tr>
                                <tr className='second-area'>
                                    <ProfessionSubjectsCell />
                                    <ProfessionSubjectsCell />
                                    <ProfessionSubjectsCell />
                                </tr>
                                <tr className='third-area'>
                                    <SelectiveSubjectsCell />
                                    <SelectiveSubjectsCell />
                                    <SelectiveSubjectsCell />
                                </tr>
                                <tr className='fourth-area'>
                                    <Coefficients coefficients={this.props.coefficients}/>
                                    <Coefficients coefficients={this.props.coefficients}/>
                                    <Coefficients coefficients={this.props.coefficients}/>
                                </tr>
                            </tbody>
                        </table>
                    </Container>
                }
                <button type="submit" className="save-btn btn btn-primary" disabled="">
                    ЗБЕРЕГТИ
                </button>
            </div>
        )
    }
}

export default CreateSchedule