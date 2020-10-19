import React, {Component} from 'react';
import { StoreInfo } from './setup_storeInfo';
import { Customize } from './setup_customize';
import { Billing } from './setup_billing';
import { Finish } from './setup_finish';
import '../../../Theme/components/RegistrationPages/Register.scss';

export class SetupRoot extends Component{
    constructor(props){
        super(props);
        this.state = {
            step: 1,
        }
    }

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    };

    render(){
        const {step} = this.state;
        switch(step) {
            default: 
                case 1:
                    return(<StoreInfo next={this.nextStep} prev={this.prevStep} />)
                case 2: 
                    return(<Customize next={this.nextStep} prev={this.prevStep} />)
                case 3:
                    return(<Billing next={this.nextStep} prev={this.prevStep} />)
                case 4: 
                    return(<Finish />)
                    
        }
    }
}

export default SetupRoot;