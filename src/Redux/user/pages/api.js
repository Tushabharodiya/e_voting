import { add_data, get_data } from "../../api/Api";
import { ADD_VOTE, GET_VOTE } from "../../constnt";


let get_user = async (action) => {
    let { data, status } = await get_data(GET_VOTE)
    return { data, status }
}

let post_voter = async (action) => {
    console.log(action);
    let { data, status } = await add_data(ADD_VOTE, action.payload)
    return { data, status }
}

export { get_user, post_voter }