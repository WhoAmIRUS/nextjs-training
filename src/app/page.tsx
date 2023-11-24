import {FC, Suspense} from 'react';
import Image from "next/image";
import PostsList from './List';

interface PageProps {

}

const Home: FC<PageProps> = async () => {

    return (
        <>
            <div className="flex items-center flex-col">
                <Image src='/images/avatar.jpg' width={144} height={144} className="rounded-full" alt='Picture of the author' />
                <h1 className="text-center">Dmitrii Glazkov</h1>
            </div>
            <p>Hello, I’m <b>Dmitrii</b>. I’m a Frontend Developer. You can contact me on <a href={"https://web.telegram.org/k/#@dmglazkov"} target="_blank">Telegram</a>.
                (This is a sample website)</p>
            <h3>Blog</h3>
            <ul>
                <Suspense fallback="Loading...">
                    <PostsList />
                </Suspense>
            </ul>
        </>
    );
};

export default Home;