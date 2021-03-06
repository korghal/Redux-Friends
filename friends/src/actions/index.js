import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';

export const fetchFriends = () => {
    return dispatch => {
        dispatch({type: FETCHING});
        axios.get('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({type: SUCCESS, payload: response.data})
        })
        .catch(response => {
            dispatch({type: FAILURE, payload: 'Error getting friend'});
        })
    }
}

export const addFriend = friendObj => {
    return dispatch => {
        dispatch({type: ADDING_FRIEND});
        axios.post('http://localhost:5000/api/friends', friendObj)
        .then(response => {
            dispatch({type: SUCCESS, payload: response.data});
        })
        .catch(()=> {
            dispatch({type: FAILURE, payload: 'Error adding friend.'});
        })
    }
}

export const updateFriend = (id, friendObj) => {
    return dispatch => {
        dispatch({type: UPDATING_FRIEND});
        axios.put(`http://localhost:5000/api/friends/${id}`, friendObj)
        .then(response => {
            dispatch({type: SUCCESS, payload: response.data});
        })
        .catch(() => {
            dispatch({type: FAILURE, payload: 'Error updating friend.'});
        })
    }
}

export const deleteFriend = id => {
    return dispatch => {
        dispatch({type: DELETING_FRIEND});
        axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then(response => {
            dispatch({type: SUCCESS, payload: response.data});
        })
        .catch(response => {
            dispatch({type: FAILURE, payload: 'Error deleting friend.'});
        })
    }
}

