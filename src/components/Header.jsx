import Search from "./Search"

const Header = ({ title, handleSubmit, handleInputChange }) => {
    return (
        <nav className="navbar" style={{ backgroundColor: '#EC8305' }}>
            <div className="container">
                <a className="navbar-brand">{title}</a>
                <Search handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
            </div>
        </nav>
    )
}

export default Header