import React from 'react';
import { useModal } from '../Hooks/useModal'

const UserList = ({ userList, selectUsers, deleteUser }) => {
    const [ openModalForm] = useModal(false)
    return (
        <div className='user-list'>   
            {
                userList.map(users => (
                    <div className='list-map'>
                        <li key={users.id} className='list-container'>
                            <div className='div-data'>
                                <div>
                                    <h2><b>{users.first_name}</b> <b>{users.last_name}</b></h2>
                                </div>
                                <div>{users.email}</div>
                                <div className='birthday'>
                                    <i class="fa-solid fa-cake-candles"></i>
                                    <b>{users.birthday}</b>
                                </div>
                            </div>
                            <div className='div-button'>
                                <b className='delete'><i onClick={() => deleteUser(users.id)} class="fa-solid fa-trash"></i></b>
                                <b className='selected' ><i onClick={() => selectUsers(users)} class="fa-solid fa-pencil"></i></b>
                            </div>
                        </li>
                    </div>

                ))
            }
        </div>
    );
};

export default UserList;