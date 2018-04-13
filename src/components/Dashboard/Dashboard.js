import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import House from '../House/House'
import { connect } from 'react-redux'
import { demolishHouse, getHomes } from '../../ducks/reducer'

class Dashboard extends Component {    
    componentDidMount() {
        this.props.getHomes()
        console.log(this.props)
    }
    componentDidUpdate() {
        console.log(this.props)
    }
    
    render(){
        const listings = this.props.houses.map((v, i) => {
            return (
                <House key={i} demolish={this.props.demolishHouse} id={v.id} info={v} />
            )
        })
        return(
            <div className="wizard-one wizard">
                <h1>Dashboard</h1>
                <Link to='/wizardone'><button>Add New Property</button></Link>
                <hr />
                <p>Home Listings</p>
                {listings}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        houses: state.houses
    }
}

export default connect( mapStateToProps, { demolishHouse, getHomes })(Dashboard)


///////////PRE-REDUX///////////////
// constructor() {
//     super()
//     this.state = {
//         houses: []
//     }
//     this.demolishHouse = this.demolishHouse.bind(this)
// }

// componentDidMount() {
//     axios.get('/api/houses').then(res => {
//         this.setState({
//             houses: res.data
//         })
//     })
// }

// demolishHouse(id) {
//     axios.delete(`/api/house/${id}`).then(res => {
//         this.setState({
//             houses: res.data
//         })
//     })
// }