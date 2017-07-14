'use strict';

import axios from 'axios';

/* ---------------------    ACTIONS     ---------------------- */

const INIT = 'INIT_STUDENTS';
const ADD = 'ADD_STUDENT';
const EDIT = 'EDIT_STUDENT';
const DELETE = 'DELETE_STUDENT';

/* ------------------    ACTION-CREATORS     ------------------ */

const init = (students) => ({ type: INIT_STUDENTS, campuses });
const add = (student) => ({ type: ADD_STUDENTS, student });
const update = (student) => ({ type: EDIT_STUDENTS, student });
const remove = (id) => ({ type: DELETE_STUDENTS, id });


/* -----------------------    THUNKS     -------------------- */
export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
        .then(res => dispatch(init(res.data)));
};

export const addStudent = student => dispatch => {
    axios.post('/api/students', student)
        .then(res => {
            dispatch(add(res.data))
        })
        .catch(err => console.error(`Creating student: ${student} unsuccesful`, err));
};

export const updateStudent = (student) => dispatch => {
    axios.put(`/api/students/${student.id}`, student)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error(`Updating student: ${student} unsuccesful`, err));
};

export const removeStudent = id => dispatch => {
    dispatch(remove(id));
    axios.delete(`/api/students/${id}`)
        .catch(err => console.error(`Removing student: ${id} unsuccesful`, err));
};
/* -----------------------    REDUCER     -------------------- */

export default function (students = [], action) {
    switch (action.type) {
        case INIT:
            return action.students

        case ADD:
            return [students, ...action.student];

        case EDIT:
            return students.map((student) => (action.student.id === student.id ? action.student : student));

        case DELETE:
            return students.filter((student) => (student.id !== action.id));

        default:
            return students;

    }
}