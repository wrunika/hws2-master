import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string)=>void // need to fix any
}

export const pureAddUser = (name: string, setError: (s: string)=>void, setName: (s: string)=>void, addUserCallback: (name: string)=>void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    const newName = name.trim();
    if (!newName) {
        setError('Ошибка! Введите имя!');
        return
    }
    addUserCallback(newName)
    setName('')
}

export const pureOnBlur = (name: string, setError: (s: string)=>void) => { // если имя пустое - показать ошибку
    const newName = name.trim();
    if (!newName) setError('Ошибка! Введите имя!');
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=>void) => { // если нажата кнопка Enter - добавить
    e.key==='Enter' && addUser()
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        //debugger
        setName(e.currentTarget.value) // need to fix

        error && setError('')
        //console.log(error);
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    console.log(users.length, users[0]);
    const lastUserName = users.length > 0 ? users[users.length-1].name : '' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
