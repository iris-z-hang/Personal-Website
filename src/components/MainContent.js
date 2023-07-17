import Boats from "./boats-in-victoria.jpeg"

function MainContent() {
    return (
        <div className="main--content">
            <h1 className="main--title">Welcome to my website!</h1>
            <p className="main--text">There is nothing here.</p>
            <img className="boats" src={Boats} width="50%"></img>
        </div>

    )
}

export default MainContent