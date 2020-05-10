import React, {Component} from 'react'
import {
    InputGroup,
    FormControl,
    Button,
} from 'react-bootstrap'
import './style.scss'
import _ from 'lodash'


export class ProfessorsListHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text || '',
            email: this.props.email || '',
            lastModified: this.props.lastModified,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.lastModified !== prevState.lastModified) {
            const {text, email, lastModified} = nextProps;
            return {
                text,
                email,
                lastModified,
            }
        }

        return null
    }

    handleTextChange = (e) => {
        const text = e.target.value
        const {updateFilter} = this.props;

        clearTimeout(this.timeoutId)

        if(text) {
            this.timeoutId = _.delay(updateFilter,
                300, 'text', text)
        } else {
            updateFilter('text', text)
        }
    }

    clearFilters = () => {
        const {clearFilters} = this.props;
        clearFilters()
    }


    render() {
        return (
            <div className='list-header'>
                <InputGroup className='mb-3 search-panel'>
                    <FormControl
                        placeholder="Ім'я викладача"
                        onChange={this.handleTextChange}
                    />
                </InputGroup>
                <div onClick={this.clearFilters}>Clear filters</div>
            </div>
        )
    }
}