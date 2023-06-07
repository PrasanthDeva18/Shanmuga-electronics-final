import { Link, useNavigate, } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../images/logo.svg'
import shop from '../../images/shop.svg'
import { useState, useEffect, useContext } from 'react'
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x';;

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }





    return (
        <div class={toggle ? 'navbar expanded' : 'navbar'}>
            <div className='nav-logo'>

                <img src={Logo} alt='img' style={{ width: "47px", height: "47px" }} />

                <h3 className='logo'>Sri Shanmuga Electronics</h3>

            </div>
            <div className='toggle-icon' onClick={handleToggle}>
                {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} color="black" size={28} />}

            </div>

            <div class="navbar-menu">
                <Link class="navbar-item1" to="/">Home</Link>
                <Link class="navbar-item2" to="/gallery">Gallery</Link>
                <Link class="navbar-item1" to="/">Services</Link>
                <Link class="navbar-item2" to="/about">About us</Link>
                <Link to="/"><img src={shop} /></Link>
            </div>
        </div>
    )
}

export default Navbar


