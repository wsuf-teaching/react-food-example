import {NavLink} from "react-router-dom";

function Layout(props) {


    const customNavLinkStyle = ({isActive, isPending, isTransitioning}) => {
        return {
            fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : "black"
        }
    }

    return (
        <>
            <ul>
                <li><NavLink to="/hello" style={customNavLinkStyle}>Hello</NavLink></li>
                <li><NavLink to="/cart" style={customNavLinkStyle}>Cart</NavLink></li>
                <li><NavLink to="/mylogin" style={customNavLinkStyle}>Login</NavLink></li>
                <li><NavLink to="/" style={customNavLinkStyle}>Home</NavLink></li>
                <li><NavLink to="/second" style={customNavLinkStyle}>Second page</NavLink></li>
            </ul>
            {props.children}
        </>
    )
}

export default Layout;