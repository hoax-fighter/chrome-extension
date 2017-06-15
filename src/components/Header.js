import React from 'react'
import logo from '../assets/lie.png'

const styles = {
    logo: {
        marginTop: 30
    }
}

class Header extends React.Component {

    render() {
        return (
            <div className="card card-inverse card-primary mb-3 text-center">
                <img className="card-img-top text-center rounded mx-auto d-block" src={logo} alt="logo" height='64' width='64' style={styles.logo} />
                <div className="card-block">
                    <h3 className="card-title">LIE</h3>
                    <h5>Logical Information E-dentification</h5>
                </div>
            </div>
        )
    }

}

export default Header