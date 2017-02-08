import { Fetch_Weather } from '../actions/index';

export default function(state = [], action){
    switch (action.type) {
        case Fetch_Weather:
            return state.concat([action.payload.data]); // we can write also in this way [action.payload.data, ...state]
    }
    return state;
}