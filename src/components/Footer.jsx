import '../index.css';
function Footer(){
    const date = new Date().getFullYear();
    return(
        <>
        <div className="footer">
            <p>Copyright &#169; {date}</p>
        </div>
        </>
    )
}

export default Footer;