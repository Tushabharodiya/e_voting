import { add_data, delete_data, get_data } from "../api/Api"
import { ADD_ADMIN, DELETE_CONNECTION, DELETE_ELECTION, DELETE_PARTY, DELETE_VOTER, GET_CONNECTION, GET_ELECTION, GET_PARTY, GET_VOTER, POST_CONNECTION, POST_ELECTION, POST_PARTY, POST_VOTER } from "../constnt"



let get_party = async (action) => {
    let { data, status } = await get_data(GET_PARTY)
    return { data, status }
}

let add_party = async (action) => {
    let { data, status } = await add_data(POST_PARTY, action.payload)
    return { data, status }
}

let delete_party = async (action) => {
    console.log(action);
    let { data, status } = await delete_data(DELETE_PARTY, action.payload)
    // console.log(data);
    return { data, status }
}

//get voter
let get_voter = async (action) => {
    let { data, status } = await get_data(GET_VOTER)
    return { data, status }
}

let add_voter = async (action) => {
    let { data, status } = await add_data(POST_VOTER, action.payload)
    // console.log(res);
    return { data, status }
}

let delete_voter = async (action) => {
    let { data, status } = await delete_data(DELETE_VOTER, action.payload)
    return { data, status }
}

//election

let get_election = async (action) => {
    let { data, status } = await get_data(GET_ELECTION)
    return { data, status }
}

let add_election = async (action) => {
    let { data, status } = await add_data(POST_ELECTION, action.payload)
    return { data, status }
}

let delete_election = async (action) => {
    let { data, status } = await delete_data(DELETE_ELECTION, action.payload)
    return { data, status }
}
//collection

let get_connection = async (action) => {
    let { data, status } = await get_data(GET_CONNECTION)
    return { data, status }
}

let post_connection = async (action) => {
    let { data, status } = await add_data(POST_CONNECTION, action.payload)
    return { data, status }
}

let delete_connection = async (action) => {
    console.log(action, "api");
    let { data, status } = await delete_data(DELETE_CONNECTION, action.payload)
    return { data, status }
}

export {
    get_party, add_party, delete_party, get_voter, add_voter, delete_voter, get_election, add_election, delete_election,
    get_connection, post_connection, delete_connection
}