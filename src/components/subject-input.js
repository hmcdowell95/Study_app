import React, {Component} from 'react';

class SubjectInput extends Component {
    state = {
        name: ""
    }

    render() {
        return(
            <div>
                <form>
                    <input 
                    type="text"

                    value={this.state.name} />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

export default SubjectInput