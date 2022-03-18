import React from "react";


function NavBar(){

    return(
        <header className="main-header">
            <div className='contImg'>
                <img src="logo192.png" className="App-logo" alt="logo" />
            </div>
            <ul className='navBar'>
                <li><button>HOME</button></li>
                <li><button>CONTACTO</button></li>
                <li><button>PRODUCTOS</button></li>
            </ul>
      </header>
    )
}
export default NavBar;