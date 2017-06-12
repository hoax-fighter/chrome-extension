import React from 'react'
import { connect } from 'react-redux'
import { addUserInput } from '../actions';

import SearchResult from './SearchResult'

class HoaxCheckerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInput: ''
        }
    }

    onUserSubmit(e) {
        e.preventDefault();
        // alert('a')
        this.props.addUserInput(this.state.userInput)
    }

    handleChange(e) {
        console.log(e.target.value)
        this.setState({
            userInput: e.target.value,
        });
    }

    render() {
        console.log('data', this.props.hoaxResult)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <form className="text-center" onSubmit={e => this.onUserSubmit(e)}>
                            <div className="form-group">
                                Check Hoax News
                                <textarea
                                    className="form-control"
                                    name="userInput"
                                    rows="3"
                                    onChange={this.handleChange.bind(this)}
                                    placeholder="Hasil akan lebih baik jika konten berisi lebih banyak detail (misal: lebih dari dua kalimat)..."
                                    required></textarea>
                            </div>
                            <button className="btn btn-primary"><i className="fa fa-search"></i> Search</button>
                        </form>
                    </div>
                </div>
                <hr />

                <SearchResult hoaxResult={this.props.hoaxResult} />

            </div>
        )

    }


}

const mapStateToProps = state => ({
    hoaxResult: state.hoaxCheckerReducer.tbh,
    loading: state.hoaxCheckerReducer.loading,
})

const mapDispatchToProps = dispatch => ({
    addUserInput: userInput => dispatch(addUserInput(userInput))
})

export default connect(mapStateToProps, mapDispatchToProps)(HoaxCheckerForm);