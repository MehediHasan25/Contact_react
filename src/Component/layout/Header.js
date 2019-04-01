import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Header = (props) => {
    const { branding } = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">{branding}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      {/* <li className="nav-item ">
        <Link to="/"> Home <span className="sr-only">(current)</span></Link>
      </li> */}
      <li className="nav-item" style={{ padding:'7px'}}>
      <Link to="/" className="nav-link"> 
      <i className="fas fa-home"/> Home</Link>
      </li>

      <li className="nav-item" style={{ padding:'7px'}}>
      <Link to="/contact/add" className="nav-link"> 
      <i className="fas fa-plus"/> Add</Link>
      </li>
      
      <li className="nav-item" style={{ padding:'7px'}}>
      <Link to="/about" className="nav-link"> 
      <i className="fas fa-question"/> About</Link>
      </li>
    </ul>
  </div>
</nav>
    );
}

Header.defaultProps = {
    branding: 'My App'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};



export default Header;