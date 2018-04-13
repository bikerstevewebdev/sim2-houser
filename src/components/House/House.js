import React from 'react'

function House(props) {
    const { info } = props
    return(
        <div className="house-comp">
            <button onClick={() => props.demolish(info.id)} >X</button>
            <img src={info.img} alt={info.name} />
            <p>Property Name: {info.name}</p>
            <p>Address: {info.address}</p>
            <p>City: {info.city}</p>
            <p>State: {info.state}</p>
            <p>Zip: {info.zip}</p>
            <p>Monthly Mortgage: {info.mortgage}</p>
            <p>Desired Rent: {info.rent}</p>
        </div>
    )
}

export default House