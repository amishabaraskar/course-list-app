import { Link } from "react-router-dom";

function Header({title}) {
    return (
        <>
            <header className="bg-indigo-950 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl">
                <Link to="/">{title}</Link>
                    </h1>
                    <h3><Link to="/enquiry">Any questions?</Link></h3>
            </header>
        </>
    )
}

export default Header;