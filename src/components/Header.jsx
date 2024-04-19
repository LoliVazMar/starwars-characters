import starwars_logo from "../assets/img/starwars_logo.png"

const Header = () => {
    return (
        <nav className="p-10">
            <div className="flex justify-center">
                <img className="w-full max-w-screen-sm" src={starwars_logo} alt={"Logo Star Wars"} />
            </div>
         </nav>
    )
}

export default Header