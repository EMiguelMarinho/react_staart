import './styles.css'

import { useState } from 'react'

import { Feed } from '../../components/Feed'
import { PostForm } from '../../components/PostForm'

export const Home = () => {
    const [ posts, setPosts ] = useState([
        {
            id: Math.random(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aut quisquam iure deserunt accusamus vero molestiae cumque mollitia adipisci cupiditate libero sunt, obcaecati, laudantium est ipsum autem pariatur magni necessitatibus.',
            userName: 'Usuário 1',
            PublishedAt: new Date()
        },
        {
            id: Math.random(),
            content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aut quisquam iure deserunt accusamus vero molestiae cumque mollitia adipisci cupiditate libero sunt, obcaecati, laudantium est ipsum autem pariatur magni necessitatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, aut adipisci cupiditate libero sunt, obcaecati, laudantium est ipsum autem pariatur magni necessitatibus.`,
            userName: 'Usuário 2',
            PublishedAt: new Date()
        },
    ]);    
    return (
        <div className='wrapper'>
            <PostForm posts={posts}  setPosts={setPosts} />
            <main>
                <Feed 
                    posts={posts} 
                    title='Seu Feeed' 
                    subTitle='Acompanhe o que seus amigos estão pensando em tempo real'
                />
            </main>
        </div>
    )
}
