import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from "react-redux"
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ReactDOM from "react-dom"

import ProjectList from "../components/projects/projectList";
import ProjectPage from "../pages/projectpage"
import { getProjects } from "../actions/projects/projectActions";

import { Motion, spring } from 'react-motion';

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componantDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500); // simulates loading of data
  }

  componantWillMount() {

  }

  render() {
    return (<div class="project-container">
      <div class="page-heading">projects</div>
      <ProjectList projects={this.props.projects} />
    </div>)
  }
}

ProjectsPage.PropTypes = {
  pages: React.PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    pages: state.pages,
  }
}

export default connect(mapStateToProps)(ProjectsPage);