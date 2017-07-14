'use strict';

import axios from 'axios';

/* ---------------------    ACTIONS     ---------------------- */

const INIT = 'INIT_CAMPUSES';
const ADD = 'ADD_CAMPUSES';
const EDIT = 'EDIT_CAMPUSES';
const DELETE = 'DELETE_CAMPUSES';

/* ------------------    ACTION-CREATORS     ------------------ */

const init = (campuses) => ({ type: INIT_CAMPUSES, campuses });
const add = (campus) => ({ type: ADD_CAMPUS, campus });
const update = (campus) => ({ type: EDIT_CAMPUS, campus });
const remove = (id) => ({ type: DELETE_CAMPUS, id });


/* -----------------------    THUNKS     -------------------- */
export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
        .then(res => dispatch(init(res.data)));
};

export const addCampus = campus => dispatch => {
    axios.post('/api/campuses', campus)
        .then(res => {
            dispatch(add(res.data))
        })
        .catch(err => console.error(`Creating campus: ${campus} unsuccesful`, err));
};

export const updateCampus = (campus) => dispatch => {
    axios.put(`/api/campuses/${campus.id}`, campus)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error(`Updating campus: ${campus} unsuccesful`, err));
};

export const removeCampus = id => dispatch => {
    dispatch(remove(id));
    axios.delete(`/api/campuses/${id}`)
        .catch(err => console.error(`Removing campus: ${id} unsuccesful`, err));
};
/* -----------------------    REDUCER     -------------------- */

export default function (campuses = [], action) {
    switch (action.type) {
        case INIT:
            return action.campuses

        case ADD:
            return [campuses, ...action.campus];

        case EDIT:
            return campuses.map((campus) => (action.campus.id === campus.id ? action.campus : campus));

        case DELETE:
            return campuses.filter((campus) => (campus.id !== action.id));

        default:
            return campuses;

    }
}