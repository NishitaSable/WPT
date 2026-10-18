import Button from './Button'
function Toolbar({onPlayMovie,onUploadImage}){
    return(
        <div>
            <Button onButtonClick={onPlayMovie}>Play Movie</Button>
            <Button onButtonClick={onUploadImage}>Upload Image</Button>
        </div>
    )
}

export default Toolbar;