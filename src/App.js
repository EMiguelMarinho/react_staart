import './styles/App.css'
import './styles/PostForm.css'
import './styles/Feed.css'

import userIcon from './images/user.svg'
import paperPlaneIcon from './images/paper-plane.svg'
import clockIcon from './images/clock.svg'
import emptyFodlerIcon from './images/empty-folder.svg'

console.log(userIcon)

export const App = () => {
    const posts = [
        {
            id: Math.random(),
            content: 'Conteudo do post',
            userName: 'Mateus',
            PublishedAt: new Date()
        },
        {
            id: Math.random(),
            content: 'Conteudo do post 2',
            userName: 'Usuário 2',
            PublishedAt: new Date()
        },
    ]
    
    // const posts = [];

    return (
        <div className='wrapper'>
            <form className='post-form' onSubmit={(e) => {
            e.preventDefault();
            console.log('Formulário não enviado');
        }}>
                <input placeholder='Escreva uma nova história' />

                <div>
                    <img src={userIcon} alt='User' />

                    <input placeholder='Digite seu nome...' />

                    <button type='submit'>
                        <img src={paperPlaneIcon} alt='Paper plane' />
                        Publicar
                    </button>
                </div>
            </form>

            <main>
                {posts.length === 0 && (
                    <div className='feed-status'>
                        <img src={emptyFodlerIcon} alt="Empty Folder" />

                        <h1>Não encontramos nada</h1>
                        <h2>Parece que você e seus amigos ão postaram nada. Comece a escrever uma nova história!</h2>
                    </div>
                )}

                {posts.length > 0 && (
                    <>
                        <header>
                            <h1>Seu Feeed</h1>
                            <h2>Acompanhe o que seus amigos estão pensando em tempo real</h2>
                        </header>
                        <section className='feed'>
                            {posts.map((post) => (
                                <article key={post.id}>
                                    <p>{post.content}</p>
                                    <footer>
                                        <div className='user-details'>
                                            <img src={userIcon} alt='User' />
                                            <strong>{post.userName}</strong>
                                        </div>
                                        <div className="time">
                                            <img src={clockIcon} alt='Clock' />
                                            <span>{post.PublishedAt.toLocaleDateString()}</span>
                                        </div>
                                    </footer>
                                </article>
                            ))}
                        </section>
                    </>
                )}
            </main>
        </div>
    )
}
