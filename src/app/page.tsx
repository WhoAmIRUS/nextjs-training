import {FC, Suspense} from 'react';
import Image from "next/image";
import Link from "next/link";
import posts from "../../public/posts.json";
import {Post} from "@/pages/api/posts";
import PostsList from './List';


interface PageProps {

}

const Home: FC<PageProps> = (props) => {
    // const [data, setData] = useState<Post[]>([])
    //
    // useEffect( () => {
    //     setTimeout(() => setData(posts), 2000);
    // }, [])

    // const [isOpen, setIsOpen] = useState<boolean>(false)

    // const [counter, setCounter] = useState<number>(0)

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
                {/*<button onClick={() => setIsOpen((prev) => !prev)}>Click</button>*/}
                {/*<button onClick={() => setCounter((prev) => prev + 1)}>Click</button>*/}
                <br/>
                    <Suspense fallback="Loading...">
                        <PostsList counter={0} />
                    </Suspense>
                {/*{posts.length ? posts.map((post) => (*/}
                {/*    <li key={post.id}>*/}
                {/*        <Link href={`/posts/${post.id}`}>{post.title}</Link>*/}
                {/*    </li>*/}
                {/*)) : 'Loading...'}*/}
                {/*<li>*/}
                {/*    <Link href={`/ssr`}>SSR example</Link>*/}
                {/*</li>*/}
            </ul>
        </>
    );
};

export default Home;