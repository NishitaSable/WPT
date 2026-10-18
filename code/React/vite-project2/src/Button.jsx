function Button ({onButtonClick,children}){
    return(
        <button onClick={onButtonClick}>
            {children}
        </button>
    );
}

export default Button;