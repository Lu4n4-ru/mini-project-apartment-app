import logo from "/src/assets/logo.png"

function Navbar() {
    return (
        <>
        <header id="title" ><img id="logo-img" src={logo} alt="logo"/>
            <b style={{fontSize: "150px", letterSpacing: "2px"}}>APP'Art</b>
        
        </header>
        
        </>
    )
}

export default Navbar