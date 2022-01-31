import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <header>
                <h1>TO DO LIST</h1>
                <nav>
                    <NavLink className="navlink" to="/Tasks">TASKS</NavLink> |{" "}
                    <NavLink className="navlink" to="/Groups">GROUPS</NavLink>
                </nav>
            </header>

            <Outlet />
        </>
    )
}
export default Layout;