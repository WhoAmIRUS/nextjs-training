import {FC} from 'react';
import Image from "next/image";
import posts from "../../../public/posts.json";
import {GetStaticPaths, GetStaticProps} from "next";
import {ParsedUrlQuery} from "querystring";
import Link from "next/link";
import {serialize} from "next-mdx-remote/serialize";
import {MDXRemote, MDXRemoteSerializeResult} from "next-mdx-remote";
import {getPostContent} from "@/lib/posts";

interface PageParams extends ParsedUrlQuery {
    slug: string;
}

interface SlugProps {
    post: MDXRemoteSerializeResult;
}

export const getStaticPaths: GetStaticPaths<PageParams> = async () => {
    const paths = posts.map((post) => ({
        params: { slug: post.id },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<SlugProps, PageParams> = async ({ params }) => {
    console.log('getStaticProps');
    const fileContents = getPostContent(params!.slug)
    const mdxSource = await serialize(fileContents)

    return { props: { post: mdxSource } }
}

const Slug: FC<SlugProps> = ({ post }) => {
    return (
        <>
            <div className="flex items-center flex-col">
                <Image src='/images/avatar.jpg' width={144} height={144} className="rounded-full" alt='Picture of the author' />
                <h2 className="mt-0">Dmitrii Glazkov</h2>
            </div>
            <MDXRemote {...post} />
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
};

export default Slug;