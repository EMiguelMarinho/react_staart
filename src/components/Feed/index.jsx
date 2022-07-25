import emptyFodlerIcon from '../../images/empty-folder.svg';
import userIcon from '../../images/user.svg'
import clockIcon from '../../images//clock.svg'

import './styles.css'

export const Feed = ({ posts, title, subTitle}) => {
    if(posts.length === 0){
        return (
            <div className='feed-status'>
                <img src={emptyFodlerIcon} alt="Empty Folder" />

                <h1>Não encontramos nada</h1>
                <h2>Parece que você e seus amigos ão postaram nada. Comece a escrever uma nova história!</h2>
            </div>
        )
    };

    return (
        <>
            <header>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
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
    );
};