import {FC} from 'react';
import Image from "next/image";
import posts from "../../../public/posts.json";
import {GetStaticPaths, GetStaticProps} from "next";
import {ParsedUrlQuery} from "querystring";
import {Post} from "@/pages/api/posts";
import Link from "next/link";

interface PageParams extends ParsedUrlQuery {
    slug: string;
}

interface SlugProps {
    post: Post;
}

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
    const paths = posts.map((post) => ({
        params: { slug: post.id },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<SlugProps, PageParams> = async ({ params }) => {
    console.log('getStaticProps');
    return { props: { post: posts.find(post => post.id === params!.slug)! } }
}

const Slug: FC<SlugProps> = ({ post }) => {
    return (
        <>
            <div className="flex items-center flex-col">
                <Image src='/images/avatar.jpg' width={144} height={144} className="rounded-full" alt='Picture of the author' />
                <h2 className="mt-0">Dmitrii Glazkov</h2>
            </div>
            <h1>{post.title}</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
};

export default Slug;