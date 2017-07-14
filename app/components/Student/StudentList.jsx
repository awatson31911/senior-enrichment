import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateStudent, removeStudent, addStudent } from '../../reducers/students';



class StudentList extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="continer">
                <div className="row">
                    <ul className="collection col 6">
                        {
                            this.props.students.map((student) => {

                                return (
                                    <li class="collection-item">
                                        <h3>{student.name}</h3>
                                        <h4>{student.id}</h4>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="col 6">
                        {"addstudentForm HERE"}
                    </div>
                </div>
            </div>
        )
    }
}
/* -----------------    CONTAINER     ------------------ */

const mapStateToProps = (stateValue) => ({ students: stateValue.students });

const mapDispatchToProps = (dispatch) => ({ updateStudent, removeStudent, addStudent });//need remove student btn/action

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);