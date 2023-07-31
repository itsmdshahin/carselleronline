import './button.scss';


const Button = () => {

    const ConfirmSubmit = () => {
        alert("Submitted!");
    }

    return (

        <div className="button" onClick={ConfirmSubmit}>
            <Button>Submit</Button>
        </div>

    )
}

export default Button