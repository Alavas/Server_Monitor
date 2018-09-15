import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadData } from '../actions'

class Servers extends Component {
    componentWillMount() {
        this.props.loadData()
    }
    render() {
        let servers = this.props.servers
        return(
            <div>
                {Object.keys(servers).map(x => {
                    return (
                        <p>{x}</p>
                    )
                })}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => {
            dispatch(loadData())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        servers: state,
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Servers);