import React, { Component } from 'react'
import {
    Button,
    OverlayTrigger,
    Popover,
    Form
} from 'react-bootstrap'


export class GeneralSubjectsCell extends Component {
    componentDidMount() {
        let {getAllSubjects} = this.props;
        getAllSubjects()
    }

    render () {
        let {subjects,} = this.props;
        let listSubjects = subjects ? subjects.map((subject) => <option>{subject}</option>) : <option>-</option>
    return(
        < td >
            <div>Загальні дисципліни</div>
            {/* {isChosen ? <div>Done</div> : <div>Not done</div>} */}
            <OverlayTrigger trigger="click" placement="right" overlay={
                <Popover id="popover-basic">
                    <Popover.Title as="h3">Оберіть дисципліну</Popover.Title>
                    <Popover.Content>
                        <Form.Control as="select">
                            {listSubjects}
                        </Form.Control>
                    </Popover.Content>
                    <Form.Group controlId='button'>
                        <button type="submit" className="center btn btn-primary " disabled="">
                            Додати
                                        </button>
                    </Form.Group>

                </Popover>} rootClose>

                <Button>+ додати дисципліну</Button>
            </OverlayTrigger>
        </td >
    )}
    
}

// const Popup = ({ ChooseDiscipline }) => {
//     <OverlayTrigger trigger="click" placement="right" overlay={
//         <Popover id="popover-basic">
//             <Popover.Title as="h3">Оберіть дисципліну</Popover.Title>
//             <Popover.Content>
//                 <Form.Control as="select">
//                     <option className='select-width'>Бакалавр</option>
//                     <option>Магістр</option>
//                     <option>Доктор філософії</option>
//                     <option>Доктор наук</option>
//                 </Form.Control>
//             </Popover.Content>
//             <Form.Group controlId='button'>
//                 <button type="submit" class="center btn btn-primary " disabled="" onClick={ChooseDiscipline}>
//                     Додати
//                                         </button>
//             </Form.Group>

//         </Popover>} rootClose>

//         <Button>+ додати дисципліну</Button>
//     </OverlayTrigger>
// }

export const ProfessionSubjectsCell = () => (
    <td>
        <div>Фахові дисципліни</div>
        <Button>+ додати дисципліну</Button>
    </td>
)

export const SelectiveSubjectsCell = () => (
    <td>
        <div>Вибіркові дисципліни</div>
        <Button>+ додати дисципліну</Button>
    </td>
)

export const Coefficients = ({ coefficients }) => (
    <td>
        <div>Сума коефіцієнтів: 0/{coefficients}</div>
    </td>
)

