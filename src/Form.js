import React,{Component} from 'react';
import { TextField,Button } from "@material-ui/core";
import './App.css';

class Form extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            name:'',
            pass:''
             
        }
    }
    nameChange = (e)=>{
        this.setState({
            name:e.target.value
            
        })
    }
    passChange = (e)=>{
        this.setState({
            pass:e.target.value
            
        })
    }
    
    handle = (e)=>{
        e.preventDefault();
        alert(`Username: ${this.state.name} Pass: ${this.state.pass} ` )

    }


    render() {

        return(
            <div>
                <h1>14. Form</h1>
                <form onSubmit={this.handle}>
                    <div>
                        <label><span className="true">{this.state.name}</span>:Username</label>

                        <TextField value={this.state.name} name="name" onChange={this.nameChange} placeholder="Enter username" />
                        
                    </div>
                    <div>
                        <label><span className="true">{this.state.pass}</span>:Password</label>
                        <TextField value={this.state.pass} name="pass" onChange={this.passChange} placeholder="Enter password" />
                    </div>
                    <div>
                        <Button variant="contained" color="primary" type="submit">SHow me This alert</Button>
                    </div>

                    
                </form>
                <hr></hr>
            </div>
        )
    }

}
export default Form;