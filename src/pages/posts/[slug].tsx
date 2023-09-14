import {FC} from 'react';
import { useRouter } from 'next/router'
import Image from "next/image";
import avatar from "../../../public/avatar.jpg";
import {Post} from "@/pages/api/posts";

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/posts')
    const posts: Post[] = await res.json()

    const paths = posts.map((post) => ({
        params: { slug: post.id },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps() {
    return { props: {} }
}

const Slug: FC = (props) => {
    const router = useRouter();
    console.log(router);
    return (
        <>
            <div className="flex items-center flex-col">
                <Image src={avatar} width={144} height={144} className="rounded-full" alt='Picture of the author' />
                <h2 className="mt-0">Dmitrii Glazkov</h2>
            </div>
            <h1>When to Use Static Generation v.s. Server-side Rendering</h1>
            <div>{router.query.slug}</div>
        </>
    );
};

export default Slug;