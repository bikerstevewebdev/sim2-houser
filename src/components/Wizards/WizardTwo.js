import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateImg , cancelAdd } from '../../ducks/reducer'


class WizardTwo extends Component {
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
            <div className="wizard-two wizard">
                <h2>Add New Listing</h2>
                <button onClick={this.cancelProcess}>Cancel</button>
                <p>Image URL</p>
                <input onChange={(e) => this.props.updateImg(e.target.value)} value={this.props.imgInput} />
                <Link to='/wizardone'><button>Previous Step</button></Link>               
                <Link to='/wizardthree'><button>Next Step</button></Link>               
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
        imgInput: state.imgInput
    }
}

export default connect( mapStateToProps, { updateImg, cancelAdd })(WizardTwo)
