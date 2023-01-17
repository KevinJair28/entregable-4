import React from 'react';
import { useModal } from '../Hooks/useModal';
import UserModal from './UserModal';

const UserModals = () => {

    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)

    return (
        <div>
            <h2>Modales</h2>
            <button onClick={openModal1}>Modal 1</button>
            <UserModal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>Modal 1</h3>
                <p>Hola este es el contenido de mi modal 1</p>
                <img src="https://placeimg.com/400/400/animals" alt="Animals" />
            </UserModal >
            <button onClick={openModal2}>Modal 2</button>
            <UserModal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla fugiat corporis voluptates beatae ullam obcaecati tenetur ratione. Nemo temporibus eligendi officiis repellendus doloremque dolore explicabo corrupti modi, unde ex.</p>
            </UserModal>
        </div>
    );
};

export default UserModals;