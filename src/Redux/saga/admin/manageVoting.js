import { call, put } from "redux-saga/effects";
import { add_election, add_party, add_voter, delete_election, delete_party, delete_voter, get_election, get_party, get_voter } from "../../admin/api";
import { DELETE_ELECTION_ERROR, DELETE_ELECTION_SUCCESS, DELETE_PARTY_ERROR, DELETE_PARTY_PENDING, DELETE_PARTY_SUCCESS, DELETE_VOTER_ERROR, DELETE_VOTER_SUCCESS, GET_ELECTION_ERROR, GET_ELECTION_SUCCESS, GET_PARTY_ERROR, GET_PARTY_SUCCESS, GET_VOTER_ERROR, GET_VOTER_SUCCESS, POST_ELECTION_ERROR, POST_ELECTION_SUCCESS, POST_PARTY_ERROR, POST_PARTY_SUCCESS, POST_VOTER_ERROR, POST_VOTER_SUCCESS } from "../../admin/action";



function* handle_get_party(action) {
    try {
        let { data, status } = yield call(get_party, action)
        // console.log(data);
        yield put({ type: GET_PARTY_SUCCESS, payload: data.data })
    } catch (error) {
        yield put({ type: GET_PARTY_ERROR, payload: error })
    }
}

function* handle_add_party(action) {
    try {
        let { data, status } = yield call(add_party, action)
        yield put({ type: POST_PARTY_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_PARTY_ERROR, payload: error })
    }
}

function* handle_delete_party(action) {
    console.log(action, "action");
    try {
        let { data, status } = yield call(delete_party, action)
        console.log(data);
        yield put({ type: DELETE_PARTY_SUCCESS, payload: action.payload })
    } catch (error) {
        yield put({ type: DELETE_PARTY_ERROR, payload: error })
    }
}

//voter
function* handle_get_voter(action) {
    try {
        let { data, status } = yield call(get_voter, action)
        // console.log(data);
        yield put({ type: GET_VOTER_SUCCESS, payload: data.data })
    } catch (error) {
        yield put({ type: GET_VOTER_ERROR, payload: error })
    }
}

function* handle_add_voter(action) {
    // let {data,status} = yield call(add_voter, action)
    // console.log(res);
    try {
        let { data, status } = yield call(add_voter, action)
        yield put({ type: POST_VOTER_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_VOTER_ERROR, payload: error })
    }
}

function* handle_delete_voter(action) {
    // console.log(action);
    try {
        let { data, status } = yield call(delete_voter, action)
        yield put({ type: DELETE_VOTER_SUCCESS, payload: action.payload })
    } catch (error) {
        yield put({ type: DELETE_VOTER_ERROR, payload: error })
    }
}

//election

function* handle_get_election(action) {
    try {
        let { data, status } = yield call(get_election, action)
        yield put({ type: GET_ELECTION_SUCCESS, payload: data.data })
    } catch (error) {
        yield put({ type: GET_ELECTION_ERROR, payload: error })
    }

}

function* handle_add_election(action) {
    try {
        let { data, status } = yield call(add_election, action)
        yield put({ type: POST_ELECTION_SUCCESS, payload: data })
    } catch (error) {
        yield put({ type: POST_ELECTION_ERROR, payload: error })
    }
}

function* handle_delete_election(action) {
    try {
        let res = yield call(delete_election, action)
        yield put({ type: DELETE_ELECTION_SUCCESS, payload: action.payload })
    } catch (error) {
        yield put({ type: DELETE_ELECTION_ERROR, payload: error })
    }
}

export {
    handle_get_party, handle_add_party, handle_delete_party, handle_get_voter, handle_add_voter,
    handle_delete_voter, handle_get_election, handle_add_election, handle_delete_election
}