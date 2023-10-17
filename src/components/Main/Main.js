import '../Main/MainStyles.css'

function Main (props){
    return(<>
        <div className={props.cName}>
            <img alt="MainImg" src={props.MainImg}></img>

            <div className="main-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
        </div>
        </>
    )
}

export default Main;