import React from 'react'

export default function Header(props) {
    return (
        <nav className={props.darkMode ? "dark" : ""}>
            <img
                className='header--image' 
                src='favicon.png'
                alt=''
            />
            <h2 className='header--title'>Meme Generator</h2>

            <div className='toggler'>
                <p className='toggler--light'>Light</p>

                <div className='toggler--slider' onClick={props.toggleDarkMode}>
                    <div className='toggler--slider--circle'></div>
                </div>

                <p className='toggler--dark'>Dark</p>
            </div>
        </nav>
    )
}