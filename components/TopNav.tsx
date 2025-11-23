export default function TopNav() {
    return (
        <nav className="blue" style={{position: 'sticky', top: '0px', zIndex: '999'}}>
            <div className="nav-wrapper">
                <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large">
                    <i className="material-icons">menu</i>
                </a>
                <a href="#!" className="brand-logo center">SalesFlow</a>
            </div>
        </nav>
    )
}