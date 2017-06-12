import React from 'react'

const ReferenceItem = (props) => {
    const { description, provider, url, bingUrl, isUrlReputable } = props.item
    var desc = description.split('.')
    console.log(url)
    return (
        <div className="card">
            <div className="card-block">
                <h5 className="card-title text-justify"><a rel="noopener noreferrer" target="_blank" href={bingUrl ? bingUrl : url}>{provider}</a></h5>
                {isUrlReputable ? <h6 className="card-subtitle mb-2 text-muted" style={{ color: '#1EE494' }}>Sumber terpercaya</h6> : <h6 className="card-subtitle mb-2 text-muted" style={{ color: '#BE3144' }}>Sumber tak terpercaya</h6>}
                <p className="card-text text-justify">{desc[0]}</p>
            </div>
        </div>
    )
}

export default ReferenceItem