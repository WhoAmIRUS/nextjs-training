import Link from "next/link";
import Image from "next/image";
import posts from "../../public/posts.json";
import {FC, useEffect, useState} from "react";
import {Post} from "@/pages/api/posts";

export const getServerSideProps = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
    console.log(posts);
    for (const post of posts) {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`).then((res) => res.json()).then(console.log);
        // await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`, { cache: 'no-store' }).then((res) => res.json());
    }
    console.log('fetched');
    return posts;
}

const Home: FC<{ posts: Post[]}> = ({ posts }) => {
    // const [data, setData] = useState<Post[]>([])
    //
    // useEffect(() => {
    //     setTimeout(() => setData(posts), 2000)
    // }, [])

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
            {posts.map((post) => (
                <li key={post.id}>
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            ))}
            <li>
                <Link href={`/ssr`}>SSR example</Link>
            </li>
        </ul>
    </>
  )
}

export default Home;
