import React from 'react'

import ReferenceItem from './ReferenceItem'

class SearchResult extends React.Component {

    render() {
        if (this.props.hoaxResult) {
            const { sources, message } = this.props.hoaxResult
            const conclusion = this.props.hoaxResult.result.conclusion
            return (
                <div className="col-sm-12">
                    <h5 className="text-center"><i className="fa fa-check"></i> {conclusion} </h5>
                    <h5 className="text-center"> Reference</h5>
                    <hr />
                    {sources.map((item, index) => {
                        return (
                            <ReferenceItem message={message} item={item} key={index} />
                        )
                    })}
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default SearchResult