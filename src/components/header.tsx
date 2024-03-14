function Header({title}) {
    return (
        <>
            <header className="bg-indigo-950 text-white p-4 flex justify-between items-center">
                <h1 className="text-2xl">
                    {title}</h1>
            </header>
        </>
    )
}

export default Header;