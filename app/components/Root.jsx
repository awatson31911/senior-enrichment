import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './navBar';
import StudentList from './Student/StudentList';
import CampusList from './Campus/CampusList';


/* -----------------    COMPONENT     ------------------ */

class Root extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.fetchInitialData;
    }

    render() {
        return (
            <Router>
                <div id="root" className="container-fluid">
                    <div className="row">
                        <div className="col 6">
                            <NavBar />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col 10">
                            <Switch>
                                <Route exact path="/campuses" component={CampusList} />
                                <Route path="/students" component={StudentList} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

/* -----------------    CONTAINER     ------------------ */
import fetchCampuses from '../reducers/campuses';
import fetchStudents from '../reducers/students';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
    fetchInitialData: () => {
        dispatch(fetchCampuses());
        dispatch(fetchStudents());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Root);



