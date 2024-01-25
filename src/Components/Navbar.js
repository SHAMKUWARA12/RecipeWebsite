import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {

    const [toggle,setToggle] = useState(false);

    const collapse = () => {
        setToggle(!toggle);
    }

    return (
        <>
            {/* <div className="container"> */}
                <div className="row">
                    <div className="col-12 mx-auto">
                        <header>
                            <div className="navbar">
                                <div className="navlogo">
                                    <h1>Foodie</h1>
                                </div>
                                <div className={toggle?"resnavelements":"navelements"} >
                                    <NavLink to='/' className='navelement' activeClassName='active' onClick={collapse}>
                                        Home
                                    </NavLink>
                                    <NavLink to='/recipies' className='navelement' activeClassName='active' onClick={collapse}>
                                        Recipies
                                    </NavLink>
                                    <NavLink to='/cuisines' className='navelement' activeClassName='active' onClick={collapse}>
                                        Cuisines
                                    </NavLink>
                                    <NavLink to='/about' className='navelement' activeClassName='active' onClick={collapse}>
                                        About Us
                                    </NavLink>
                                </div>
                                <div className="navbartoggle" onClick={collapse}>
                                    <MenuIcon />
                                </div>
                            </div>
                        </header>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}
export default Navbar;
