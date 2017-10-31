import React, {Component} from 'react';
import AgeStats from './AgeStats';
import { Form, FormControl, Button} from 'react-bootstrap';
import Moment from 'react-moment';

class App extends Component{   
    constructor() {
        super();

        this.state = {
            newDate: '',
            birthday: '2000-09-23'
        }
    }

    changeBirthday() {
        console.log(this.state);
        this.setState({birthday: this.state.newDate})
    }
    render(){
        return(
            <div>
            <Moment>{'1976-04-19T12:59-0500'}</Moment>
            <Form inline>
            <h2> Imput your birthday</h2>
            <FormControl type = "date" onChange = {(event) => {this.setState({
                newDate : event.target.value
            })}}></FormControl>
            {' '}
            <Button onClick = {() => this.changeBirthday()}>Submit</Button>
            <AgeStats date = {this.state.birthday}/>
            </Form>
            </div>
        )
    }
}

export default App;