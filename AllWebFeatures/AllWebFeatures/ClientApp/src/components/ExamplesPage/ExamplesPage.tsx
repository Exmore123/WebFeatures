import * as React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


const ExamplesPage = () => (
    <div>
        <h1>Login Forms:</h1>
        <NavLink tag={Link} className="text-dark" to="/glass_login">GlassLogin</NavLink>
    </div>
);

export default connect()(ExamplesPage);
