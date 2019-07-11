import React from 'react';

const Modal = ({ closeModal, title, message })  => {
    return (
        <div className="ui modal">
            <i className="close icon"></i>
            <div className="header">
                {title}
            </div>
            <div className="image content">
                <div className="ui medium image">
                    <img src="/images/avatar/large/chris.jpg" alt="" />
                </div>

                <div className="description">
                    <div className="ui header">We've auto-chosen a profile image for you.</div>
                    <p>{message}</p>
                </div>
            </div>
            <div className="actions">
                <div className="ui black deny button" onClick={closeModal}>
                    Nope
                </div>
                <div className="ui positive right labeled icon button" onClick={closeModal}>
                    Yep, that's me
                    <i className="checkmark icon"></i>
                </div>
            </div>
        </div>
    )
}
        
export default Modal;