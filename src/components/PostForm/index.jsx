import './styles.css'
import paperPlaneIcon from '../../images/paper-plane.svg'
import userIcon from '../../images/user.svg'

import { useState, useRef } from 'react'

export const PostForm = ({ posts, setPosts }) => {
    const [ history, setHistory ] = useState('')
    const [ name, setName ] = useState('');

    const inputHistory = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        setPosts([ ...posts, {
            id: Math.random(),
            content: history,
            userName: name,
            PublishedAt: new Date()
        } ])

        setHistory('')
        setName('')
        inputHistory.current.focus();
    }


    return (
        <form className='post-form' onSubmit={handleSubmit}>
            <input 
                ref={inputHistory}
                value={history}
                placeholder='Escreva uma nova história'
                onChange={(event) => setHistory(event.target.value) } 
            />

            <div>
                <img src={userIcon} alt='User' />

                <input
                    value={name}
                    onChange={(event) => setName(event.target.value)} 
                    placeholder='Digite seu nome...' 
                />

                <button type='submit'>
                    <img src={paperPlaneIcon} alt='Paper plane' />
                    Publicar
                </button>
            </div>
        </form>
    )
}