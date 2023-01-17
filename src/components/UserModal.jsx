import React from 'react';

const UserModal = ({children, isOpen,closeModal}) => {

    const handleModal = (e) => e.stopPropagation();

    return (
        <article className={`modal ${isOpen && `is-open`}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModal}>
                <button className='modal-close' onClick={closeModal}><b>X</b></button>
                {children}
            </div>
        </article>
    );
};

export default UserModal;