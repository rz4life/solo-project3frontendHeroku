import {Link} from 'react-router-dom'

const Navbar = (props) =>{

  const userId = localStorage.getItem('userId')

    return(
        <nav className = 'navbar'>  
            {
                props.user ?
                <>
                <Link to = '/friends' className = 'navtext'> Friends</Link>
                {' | -- |'} {' -- | '}
                <Link to = '/newfriend' className = 'navtext'> Add a new Friend</Link>
                {' | -- |'} {' -- | '}
                <Link to = '/chat' className = 'navtext'> Chats</Link>
                {' | -- |'} {' -- | '}
                <Link to = '/keepup' className = 'navtext'> Keep Up</Link>
                {' | -- |'} {' -- | '}
                <Link to = '/profile' className = 'navtext'> Profile</Link>
                {' | -- |'} {' -- | '}
                <span onClick={() => {
                            localStorage.removeItem('userId')
                            localStorage.removeItem('chatId')
                             props.setUser(null)
                }}><Link className="navLink" to="/login" className = 'navtext'>Logout</Link></span>
                </>
                :
                <>
                <Link to = '/signup' className = 'navtext'> Signup</Link>
                {' | -- |'} {' -- | '}
                <Link to = '/login' className = 'navtext'> Login</Link> 
                </> 
            }
                  
        </nav>
    )
}
export default Navbar