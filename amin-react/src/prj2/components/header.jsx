export default function Header(){
    return(
        <>
        <header>
            <div className="header-left">
                    <h3>airbnb</h3>
                    <img src="/src/prj2/components/icons8-airbnb-50.png" alt="" />
            </div>
            <div className="header-right">
            <div className="header-right-div">   <a href="#"><h3>home</h3></a></div>
            <div className="header-right-div">   <a href="#"><h3>city</h3></a></div>
            <div className="header-right-div">   <a href="#"><h3>reserv</h3></a></div>
            <div className="header-right-div">   <a href="#"><h3>abot</h3></a></div>
            </div>
        </header>
        </>
    )
}