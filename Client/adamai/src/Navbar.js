import {Link, useMatch, useResolvedPath, useNavigate} from "react-router-dom"
export default function Navbar(){
    const loggedInUser = localStorage.getItem('loggedInUser');
    const hasPurchased = localStorage.getItem('hasPurchased');
    const navigate = useNavigate();

    const handleSignOut = (event) => {
        event.preventDefault();
        localStorage.clear();
        navigate("/Login");
    };

    return <nav className="nav">
    <Link to="/" className ="site-title">ADAM.AI</Link>
    <ul>
            <li>
                <CustomLink to="/">Home</CustomLink>
            </li>
            {!hasPurchased && 
                <li>
                    <CustomLink to="/Login">Subscribe</CustomLink>
                </li>
            }
            {loggedInUser ? (
                <li>
                    <CustomLink to="/Login">Create</CustomLink>
                </li>
            ):(
                <li>
                    <CustomLink to="/CreateChatbot">Create</CustomLink>
                </li>
            )  
            }
            {!loggedInUser &&
                <li>
                    <CustomLink to="/">My account</CustomLink>
                </li>
            }
            {loggedInUser ? (
                <li>
                    <CustomLink to="/Login">Log in</CustomLink>
                </li>
            ):(
                <li>
                    <CustomLink to="/" onClick={handleSignOut}>Sign out</CustomLink>
                </li>
            )  
            }
            {loggedInUser &&
                <li>
                    <CustomLink to="/Signup">Signup</CustomLink>
                </li>
            }
    </ul>

</nav>
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}