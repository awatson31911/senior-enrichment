import React, { Component } from 'react';
import { connect } from 'react-redux';


/* -----------------    COMPONENT     ------------------ */

class CampusList extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        console.log(this.props.campuses)
        return (
            <div className="continer">
                <div className="row">
                    <ul className="collection col 6">
                        {
                            this.props.campuses.map((campus) => {

                                return (
                                    <div>
                                        <li class="collection-item">
                                            <h3>{campus.name}</h3>
                                            <h4>{campus.id}</h4>
                                        </li>
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <div className="col 6">

                    </div>
                </div>
            </div>
        )
    }

    handleClick(event) {
        const campus = event.target
        this.props.removeCampus(campus);
    }
}

/* -----------------    CONTAINER     ------------------ */
import { removeCampus, addCampus } from '../../reducers/campuses';

const mapStateToProps = (stateValue) => ({ campuses: stateValue.campuses });

const mapDispatchToProps = (dispatch) => ({ removeCampus, addCampus });//need remove campus btn/action

export default connect(mapStateToProps, mapDispatchToProps)(CampusList);
