import axios from 'axios'
const initialState = {
    houses: [],
    nameInput: '',
    addressInput: '',
    cityInput: '',
    stateInput: '',
    zipInput: 0,
    imgInput: '',
    mortgageInput: 0,
    rentInput: 0,
    recommendedRent: ''
}

const ADD_HOUSE = 'ADD_HOUSE'
const UPDATE_NAME = 'UPDATE_NAME'
const UPDATE_ADDRESS = 'UPDATE_ADDRESS'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_STATE = 'UPDATE_STATE'
const UPDATE_ZIP = 'UPDATE_ZIP'
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE'
const UPDATE_IMG = 'UPDATE_IMG'
const UPDATE_RENT = 'UPDATE_RENT'
const DELETE_HOUSE = 'DELETE_HOUSE'
const CANCEL_ADD = 'CANCEL_ADD'

export function getHomes() {
    let houses = axios.get('/api/houses').then(res => {
            return res.data
    })
    return {
        type: ADD_HOUSE,
        payload: houses
    }
}

export function buildAHome(props) {
    const {nameInput, addressInput, cityInput, stateInput, zipInput, imgInput, mortgageInput, rentInput} = props
    let houses = axios.post('/api/house', {name: nameInput, address: addressInput, city: cityInput, state: stateInput, zip: zipInput, img: imgInput, mortgage: mortgageInput, rent: rentInput}).then(res => {
        return res.data
    })
    return {
        type: ADD_HOUSE,
        payload: houses
    }
}

export function updateName(name) {
    return {
    type: UPDATE_NAME,
    payload: name
    }
}

export function updateAddress(address) {
    return {
    type: UPDATE_ADDRESS,
    payload: address
    }
}

export function updateCity(city) {
    return {
    type: UPDATE_CITY,
    payload: city
    }
}

export function updateState(state) {
    return {
    type: UPDATE_STATE,
    payload: state
    }
}

export function updateZip(zip) {
    return {
    type: UPDATE_ZIP,
    payload: zip
    }
}

export function updateMortgage(mortgage) {
    return {
    type: UPDATE_MORTGAGE,
    payload: {
        mortgage,
        suggestedRent: mortgage * 1.25
        }
    }
}

export function updateRent(rent) {
    return {
    type: UPDATE_RENT,
    payload: rent
    }
}

export function updateImg(img) {
    return {
    type: UPDATE_IMG,
    payload: img
    }
}

export function cancelAdd() {
    return{
        type: CANCEL_ADD
    }
}

export function demolishHouse(id) {
    let newHouses = axios.delete(`/api/house/${id}`).then(res => {
        return res.data
    })
    return{
        type: DELETE_HOUSE,
        payload: newHouses
    }
}


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_HOUSE + '_FULFILLED':
            return {
                ...state,
                nameInput: '',
                addressInput: '',
                cityInput: '',
                stateInput: '',
                zipInput: 0,
                imgInput: '',
                mortgageInput: 0,
                rentInput: 0,
                recommendedRent: '',
                houses: action.payload
            }
            case UPDATE_ADDRESS:
                return {
                    ...state,
                    addressInput: action.payload
                }
            case UPDATE_NAME:
                return {
                    ...state,
                    nameInput: action.payload
                }
            case UPDATE_CITY:
                return {
                    ...state,
                    cityInput: action.payload
                }
            case UPDATE_STATE:
                return {
                    ...state,
                    stateInput: action.payload
                }
            case UPDATE_ZIP:
                return {
                    ...state,
                    zipInput: action.payload
                }
            case UPDATE_MORTGAGE:
                return {
                    ...state,
                    mortgageInput: action.payload.mortgage,
                    recommendedRent: action.payload.suggestedRent
                }
            case UPDATE_RENT:
                return {
                    ...state,
                    rentInput: action.payload
                }
            case UPDATE_IMG:
                return {
                    ...state,
                    imgInput: action.payload
                }
            case CANCEL_ADD: 
                return {
                    ...state,
                    nameInput: '',
                    addressInput: '',
                    cityInput: '',
                    stateInput: '',
                    zipInput: 0,
                    imgInput: '',
                    mortgageInput: 0,
                    rentInput: 0,
                    recommendedRent: ''
                 }
            case DELETE_HOUSE + '_FULFILLED': 
            return {
                ...state,
                houses: action.payload
                }
        default:
            return state
    }
}