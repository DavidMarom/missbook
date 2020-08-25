const { NavLink, withRouter } = ReactRouterDOM

function _NavBar(props) {

    function goBack() {
        props.history.goBack()
    }

    return <section className="navbar">

        <nav>
            <NavLink exact activeClassName='active-nav' className="nav-btn" to="/">Home</NavLink>
            <NavLink activeClassName='active-nav' className="nav-btn" to="/book">Store</NavLink>
            <NavLink activeClassName='active-nav' className="nav-btn" to="/add">Add a book</NavLink>

            <button onClick={goBack}>Back</button>
        </nav>

    </section>
}

export const NavBar = withRouter(_NavBar)