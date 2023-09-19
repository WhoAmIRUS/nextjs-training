import Link from "next/link";
import Image from "next/image";
import avatar from '../../public/avatar.jpg';
import posts from "../../public/posts.json";
import {FC} from "react";
import {Post} from "@/pages/api/posts";

export const getStaticProps = async () => {
    return { props: { posts } }
}

const Home: FC<{ posts: Post[]}> = ({ posts }) => {
  return (
    <>
        <div className="flex items-center flex-col">
            <Image src={avatar} width={144} height={144} className="rounded-full" alt='Picture of the author' />
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
        </ul>
    </>
  )
}

export default Home;
