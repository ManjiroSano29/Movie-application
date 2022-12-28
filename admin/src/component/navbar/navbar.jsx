import './navbar.scss'
const NavBar = () => {
    return (
        <div className='admin_navbar'>
            <img
                className="admin_logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""
            />
            <p className='admin_name'>ADMIN</p>
        </div>
    )
}

export default NavBar