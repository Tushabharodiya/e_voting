import logo from "../images/logo.png"

let Navbar = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <div className="container">
                        <div className="head-logo d-flex align-items-center">
                            <img src={logo} alt="logo image" />
                            <h4 className="mb-0 ms-2">E-ELECTION</h4>
                        </div>
                        <div className="user">
                            <button><i className="fa-solid fa-user"></i></button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

let Button=({content,style})=>(
    <button className={style}>{content}</button>
)

export { Navbar ,Button}