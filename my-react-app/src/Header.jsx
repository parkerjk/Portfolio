
function Header(){

    const darkMode = () => {
        document.body.classList.toggle("dark-mode");
        console.log("Clicked");
    }
    
    return(
        <header class="flex-container">
            <h1>Intro Website</h1>
            
            <button id="darkButton" onClick={darkMode}>Click Here</button>

        </header> 
    );
}

export default Header

