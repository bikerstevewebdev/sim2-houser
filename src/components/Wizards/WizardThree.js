import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateMortgage, updateRent, cancelAdd, buildAHome  } from '../../ducks/reducer'


class WizardThree extends Component {
    constructor() {
        super()
        this.state = {
            isAdding: true
        }
        this.cancelProcess = this.cancelProcess.bind(this)
    }

    cancelProcess() {
        this.props.cancelAdd()
        this.setState({
            isAdding: false
        })
    }

    submitForm() {
        const { nameInput, addressInput, cityInput, stateInput, zipInput, imgInput, mortgageInput, rentInput } = this.props        
        this.props.buildAHome({ nameInput, addressInput, cityInput, stateInput, zipInput, imgInput, mortgageInput, rentInput })
        this.setState({
            isAdding: false
        })
    }

    render(){
        return(
            <div className="wizard-three wizard">
                <h2>Add New Listing</h2>
                <button onClick={this.cancelProcess}>Cancel</button>
                <p>Recomended Rent: $ {this.props.recommendedRent}</p>
                <p>Monthly Mortgage</p>
                <input onChange={(e) => this.props.updateMortgage(e.target.value)} value={this.props.mortgageInput} />
                <p>Desired Rent</p>
                <input onChange={(e) => this.props.updateRent(e.target.value)} value={this.props.rentInput} />
                <Link to='/wizardtwo'><button>Previous Step</button></Link>
                <button onClick={(e) => this.submitForm(e.target.value)}>Complete</button>                            
                {this.state.isAdding
                ?
                null
                :
                <Redirect to='/' />
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        mortgageInput: state.mortgageInput,
        rentInput: state.rentInput,
        recommendedRent: state.recommendedRent,
        imgInput: state.imgInput,
        addressInput: state.addressInput,
        nameInput: state.nameInput,
        cityInput: state.cityInput,
        stateInput: state.stateInput,
        zipcodeInput: state.zipInput
        
    }
}

export default connect( mapStateToProps, { updateMortgage, updateRent, buildAHome, cancelAdd })(WizardThree)
