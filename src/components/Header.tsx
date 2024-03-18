import SearchBar from "./Searchbar"

function Header(){
    return (
        <header className="w-full h-[22rem] bg-my-image bg-cover bg-center">
            <div className="pt-6">
                <SearchBar />
            </div>
        </header>
    )
}

export default Header