import '../index.css';
function Notes(props){
    return(
        <>
            <div className="note">
                <h1 className="text-black font-bold">
                    {props.title}
                </h1>
                <p className="font-thin">
                    {props.content}
                </p>
            </div>
        </>
    )
}

export default Notes;