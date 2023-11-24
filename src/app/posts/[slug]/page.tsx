import Image from "next/image";
import Link from "next/link";
import {MDXRemote} from "next-mdx-remote/rsc";
import {Post} from "@/pages/api/posts";

export async function generateStaticParams() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

    return posts.map((post: Post) => ({
        slug: post.id.toString(),
    }))
}

const getPost = async (id: string) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' }).then((res) => res.json());

    return post;
}

const Slug = async ({ params }: { params: { slug: string }}) => {
    const post: Post = await getPost(params!.slug)

    return (
        <>
            <div className="flex items-center flex-col">
                <Image src='/images/avatar.jpg' width={144} height={144} className="rounded-full" alt='Picture of the author' />
                <h2 className="mt-0">Dmitrii Glazkov</h2>
            </div>
            <MDXRemote source={post.body} />
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </>
    );
};

export default Slug;