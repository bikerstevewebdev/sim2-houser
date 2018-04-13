import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateAddress, updateCity, updateName, updateState, updateZip, cancelAdd  } from '../../ducks/reducer'


class WizardOne extends Component {
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
    
    render(){
        return(
            <div className="wizard-one wizard">
                <h2>Add New Listing</h2>
                <button onClick={this.cancelProcess}>Cancel</button>                
                <p>Property Name</p>
                <input onChange={(e) => this.props.updateName(e.target.value)} value={this.props.nameInput} />
                <p>Address</p>
                <input onChange={(e) => this.props.updateAddress(e.target.value)} value={this.props.addressInput} />
                <p>City</p>
                <input onChange={(e) => this.props.updateCity(e.target.value)} value={this.props.cityInput} />
                <p>State</p>
                <input onChange={(e) => this.props.updateState(e.target.value)} value={this.props.stateInput} />
                <p>Zip</p>
                <input onChange={(e) => this.props.updateZip(e.target.value)} value={this.props.zipInput} />                
                <Link to='/wizardtwo'><button>Next Step</button></Link>                               
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
        addressInput: state.addressInput,
        nameInput: state.nameInput,
        cityInput: state.cityInput,
        stateInput: state.stateInput,
        zipInput: state.zipInput
    }
}

export default connect( mapStateToProps, { updateAddress, updateCity, updateName, updateState, updateZip, cancelAdd })(WizardOne)



/////////// ORIGINAL CODE BEFORE REDUX////////////////////


// constructor() {
//     super()
//     this.state = {
            // nameInput: '',
            // addressInput: '',
            // cityInput: '',
            // stateInput: '',
            // zipcodeInput: 0,
            // imgInput: '',
            // mortgageInput: 0,
            // rentInput: 0,
            // recommendedRent: '',
            // isAdding: true,

//         stepOne: true,
//         stepTwo: false,
//         stepThree: false
//     }

//     this.setStepOne = this.setStepOne.bind(this)
//     this.setStepTwo = this.setStepTwo.bind(this)
//     this.setStepThree = this.setStepThree.bind(this)
// }



// setStepOne() {
//     this.setState({
//         stepOne: true,
//         stepTwo: false,
//         stepThree: false
//     })
// }

// setStepTwo() {
//     this.setState({
//         stepOne: false,
//         stepTwo: true,
//         stepThree: false
//     })
// }

// setStepThree() {
//     this.setState({
//         stepOne: false,
//         stepTwo: false,
//         stepThree: true
//     })
// }

// 

// this.updateAddressInput = this.updateAddressInput.bind(this)
// this.updateNameInput = this.updateNameInput.bind(this)
// this.updateCityInput = this.updateCityInput.bind(this)
// this.updateZipcodeInput = this.updateZipcodeInput.bind(this)
// this.updateStateInput = this.updateStateInput.bind(this)
// this.updateImgInput = this.updateImgInput.bind(this)
// this.updateMortgageInput = this.updateMortgageInput.bind(this)
// this.updateRentInput = this.updateRentInput.bind(this)
// this.buildAHome = this.buildAHome.bind(this)
// this.cancelAdd = this.cancelAdd.bind(this)
// updateNameInput(e) {
//     this.setState({
//         nameInput: e.target.value
//     })
// }
// updateAddressInput(e) {
//     this.setState({
//         addressInput: e.target.value
//     })
// }
// updateCityInput(e) {
//     this.setState({
//         cityInput: e.target.value
//     })
// }
// updateStateInput(e) {
//     this.setState({
//         stateInput: e.target.value
//     })
// }
// updateZipcodeInput(e) {
//     this.setState({
//         zipcodeInput: e.target.value
//     })
// }
// updateImgInput(e) {
//     this.setState({
//         imgInput: e.target.value
//     })
// }
// updateMortgageInput(e) {
//     this.setState({
//         mortgageInput: e.target.value,
//         recommendedRent: e.target.value * 1.25
//     })
// }
// updateRentInput(e) {
//     this.setState({
//         rentInput: e.target.value
//     })
// }
// buildAHome() {
//     const { nameInput, addressInput, cityInput, stateInput, zipInput, imgInput, mortgageInput, rentInput } = this.state
//     axios.post('/api/house', {name: nameInput, address: addressInput, city: cityInput, state: stateInput, zip: zipInput, img: imgInput, mortgage: mortgageInput, rent: rentInput}).then(res => {
//         this.setState({
//         nameInput: '',
//         addressInput: '',
//         cityInput: '',
//         stateInput: '',
//         zipcodeInput: 0,
//         imgInput: '',
//         mortgageInput: 0,
//         rentInput: 0,
//         recommendedRent: ''
//         })
//     })
// }

// cancelAdd() {
//     this.setState({
//         nameInput: '',
//         addressInput: '',
//         cityInput: '',
//         stateInput: '',
//         zipcodeInput: 0,
//         imgInput: '',
//         mortgageInput: 0,
//         rentInput: 0,
//         recommendedRent: ''
//     })
//     this.setState({
//         isAdding: false
//     })
// }