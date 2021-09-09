
import React from "react";

const Modal = (props) => {
    const [show, setDisplay] = React.useState(true);

    const open = () => {
        setDisplay(true)
    }

    const close = () => {
        setDisplay(false)
    }

    return(
        <div className={"modal-wrapper"}>
            <div className={"modal-backdrop"}/>
            <div className={"modal-box"}>
                {props.children}

            </div>

        </div>
    )
};

export default Modal