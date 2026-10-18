function Images({src,name}){
    return(
        <div className="conatiner">
            <img src={src} alt={name} className="images" />
            <p>
                {name}
            </p>
        </div>
    )
}
export default Images