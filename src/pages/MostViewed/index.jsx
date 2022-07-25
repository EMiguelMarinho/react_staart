import { Feed } from '../../components/Feed';

export const MostViewed = () => {
    const posts = [        {
        id: Math.random(),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium est ipsum autem pariatur magni necessitatibus.',
        userName: 'Mateus',
        PublishedAt: new Date()
    }];
    
    return (
        <main>
            <Feed 
                posts={posts}
                title='Mais vistos'
                subTitle='Acompanhe os assuntos mais comentados no momento e fique por dentro de qualquer novidade'
            />
        </main>
    );
}