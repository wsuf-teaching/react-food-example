import {Link} from "react-router-dom";

function Layout(props) {
    return (
        <>
            <ul>
                <li><Link to="/hello">Hello</Link></li>
                <li><Link to="/mylogin">Login</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/second">Second page</Link></li>
            </ul>
            {props.children}
        </>
    )
}

export default Layout;