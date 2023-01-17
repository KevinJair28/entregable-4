import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import UserModal from './UserModal';
import { useModal } from '../Hooks/useModal'


const initialValue = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    birthday: ""
}

const UserForm = ({ getUsers, userSelected, deselectUser}) => {

    const { handleSubmit, register, reset } = useForm();

    useEffect(() => {
        if (userSelected) {
            console.log(userSelected)
            reset(userSelected)
        } else {
            reset(initialValue)
        }
    }, [userSelected])

    const submit = (data) => {
        console.log(data)
        if (userSelected) {
            axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
                .then(() => {
                    getUsers()
                    deselectUser()
                })
                .catch(error => console.log(error.response?.data));
        } else {
            axios.post(`https://users-crud.academlo.tech/users/`, data)
              .then(() => getUsers())
                .catch(error => console.log(error.response?.data));
                
        }

    }

    const [visible, setVisible] = useState(true)

    const showPassword = () => {
        //alert("mostrando password..")
        setVisible(!visible)
    }

    const [isOpenForm, openForm, closeForm] = useModal(false)

    return (
        <div className='formulary'>
            <h2>New User</h2>
            <form className='user-form' onSubmit={handleSubmit(submit)}>
                <div className='input-container'>
                    <label htmlFor="first_name">
                        <i class="fa-solid fa-user"></i>
                    </label>
                    <input className='input-name'
                        type="text"
                        id='first_name'
                        placeholder="First Name"
                        {...register("first_name")}

                    />
                    <input className='input-name'
                        type="text"
                        id='last_name'
                        placeholder="Last Name"
                        {...register("last_name")}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="email">
                        <i class="fa-regular fa-envelope"></i>
                    </label>
                    <input className='input-register'
                        type="text"
                        id='email'
                        placeholder='Email'
                        {...register("email")}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="password">
                        <i class="fa-solid fa-lock"></i>
                    </label>
                    <input className='input-register-password'
                        type={visible ? "password" : "text"}
                        id='password'
                        placeholder='Password'
                        {...register("password")}
                    />
                    <span className='visible-password'>
                        {visible ? <i onClick={showPassword} class="fa-solid fa-eye"></i> : <i onClick={showPassword} class="fa-solid fa-eye-slash"></i>}
                    </span>
                </div>
                <div className='input-container'>
                    <label htmlFor="birthday">
                        <i class="fa-solid fa-cake-candles"></i>
                    </label>
                    <input className='input-register'
                        type="date"
                        id='birthday'
                        {...register("birthday")}
                    />
                </div>
                <button className='upload'><b> Upload </b></button>
            </form>
        </div>
    );
};

export default UserForm;