import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import SubjectInput from '../components/subject-input';
import Subject from '../components/subject';
import {Link} from 'react-router-dom';

class SubjectContainer extends Component {

renderSubjects = () => {return this.props.subjects.map(s => 
    <p><Link key={s.id} to={`/subjects/${s.id}`}>{s.name}</Link></p>)};

    render() {
        return(
            <div>list of subjects with links. {JSON.stringify(this.props.subjects)}
                <SubjectInput add={this.props.addSubject} />
                {this.renderSubjects()}
                <Route exact path={this.props.match.url} render={() => <div>test</div>} />
                <Route exact path={`${this.props.match.url}/:id`} 
                render={routerProps => <Subject {...routerProps} subjects={this.props.subjects} /> } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {subjects: state.subjects}
}

const mapDispatchToProps = d => ({
    addSubject: data => d({type: "ADD_SUBJECT", subject: data})
})

export default connect(mapStateToProps, mapDispatchToProps)(SubjectContainer)