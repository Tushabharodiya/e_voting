import { takeLatest } from "redux-saga/effects";
import { DELETE_CONNECTION_PENDING, DELETE_ELECTION_PENDING, DELETE_PARTY_PENDING, DELETE_VOTER_PENDING, GET_COLLECTION_PENDING, GET_CONNECTION_PENDING, GET_ELECTION_PENDING, GET_PARTY_PENDING, GET_VOTER_PENDING, POST_ADMIN_PENDING, POST_COLLECTION_PENDING, POST_CONNECTION_PENDING, POST_ELECTION_PENDING, POST_PARTY_PENDING, POST_VOTER_PENDING } from "../../admin/action";
import { handle_add_admin, handle_add_election, handle_add_party, handle_add_voter, handle_delete_connection, handle_delete_election, handle_delete_party, handle_delete_voter, handle_get_collection, handle_get_connection, handle_get_election, handle_get_party, handle_get_user, handle_get_voter, handle_post_collection, handle_post_connection, handle_post_voter } from "../admin/manageVoting";
import { GET_USER_PENDING, POST_USER_PENDING } from "../../user/pages/action";


//party
function* handle_get_party_saga() {
    yield takeLatest(GET_PARTY_PENDING, handle_get_party)
}

function* handle_add_party_saga() {
    yield takeLatest(POST_PARTY_PENDING, handle_add_party)
}

function* handle_delete_party_saga() {
    yield takeLatest(DELETE_PARTY_PENDING, handle_delete_party)
}

//voter
function* handle_get_voter_saga() {
    yield takeLatest(GET_VOTER_PENDING, handle_get_voter)
}

function* handle_add_voter_saga() {
    yield takeLatest(POST_VOTER_PENDING, handle_add_voter)
}

function* handle_delete_voter_saga() {
    yield takeLatest(DELETE_VOTER_PENDING, handle_delete_voter)
}

//election

function* handle_get_election_saga() {
    yield takeLatest(GET_ELECTION_PENDING, handle_get_election)
}

function* handle_add_election_saga() {
    yield takeLatest(POST_ELECTION_PENDING, handle_add_election)
}

function* handle_delete_election_saga() {
    yield takeLatest(DELETE_ELECTION_PENDING, handle_delete_election)
}
//connection
function* handle_get_connection_saga() {
    yield takeLatest(GET_CONNECTION_PENDING, handle_get_connection)
}

function* handle_post_connection_saga() {
    yield takeLatest(POST_CONNECTION_PENDING, handle_post_connection)
}

function* handle_delete_connection_saga() {
    yield takeLatest(DELETE_CONNECTION_PENDING, handle_delete_connection)
}
//vote

function* handle_get_user_saga() {
    yield takeLatest(GET_USER_PENDING, handle_get_user)
}

function* handle_post_voter_saga() {
    yield takeLatest(POST_USER_PENDING, handle_post_voter)
}

export {
    handle_get_party_saga, handle_add_party_saga, handle_delete_party_saga, handle_get_voter_saga,
    handle_add_voter_saga, handle_delete_voter_saga, handle_get_election_saga, handle_add_election_saga,
    handle_delete_election_saga, handle_get_connection_saga, handle_post_connection_saga, handle_delete_connection_saga,
    handle_get_user_saga, handle_post_voter_saga
}