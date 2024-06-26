import { all } from "redux-saga/effects";
import { handle_add_admin_saga, handle_add_election_saga, handle_add_party_saga, handle_add_voter_saga, handle_delete_connection_saga, handle_delete_election_saga, handle_delete_party_saga, handle_delete_voter_saga, handle_get_collection_saga, handle_get_connection_saga, handle_get_election_saga, handle_get_party_saga, handle_get_user_saga, handle_get_voter_saga, handle_post_collection_saga, handle_post_connection_saga, handle_post_voter_saga } from "./root/votingSaga";



function* rootSaga() {
    yield all([
        //party
        handle_get_party_saga(),
        handle_add_party_saga(),
        handle_delete_party_saga(),
        //voter
        handle_get_voter_saga(),
        handle_add_voter_saga(),
        handle_delete_voter_saga(),
        //election
        handle_get_election_saga(),
        handle_add_election_saga(),
        handle_delete_election_saga(),
        //connection
       handle_get_connection_saga(),
       handle_post_connection_saga(),
       handle_delete_connection_saga(),

       //vote
       handle_get_user_saga(),
       handle_post_voter_saga()
        
    ])
}

export default rootSaga;