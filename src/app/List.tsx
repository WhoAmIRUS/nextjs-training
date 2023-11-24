import Link from "next/link";
import {Post} from "@/pages/api/posts";

// почему на билд он вызывает запрос?
// почему запрос улетает несколько раз? - это что-то на клиентском компоненте
// почему запрос делается на клиенте а не на сервере? - потому что родительский компонент был клиентским, поэтому этот тоже стал клиентским

// Bundle Sizes: Server Components allow you to keep large dependencies that previously would impact the client JavaScript bundle size on the server.
// This is beneficial for users with slower internet or less powerful devices, as the client does not have to download, parse and execute any JavaScript for Server Components.
// проверить, будет ли отрабатывать серверный компонент при повторном отображении страницы, либо он будет рендерится на сервере.
// то есть повторный рендеринг компонента происходит на сервере или на клиенте

// Server Component
const getPosts = async (): Promise<Post[]> => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }).then((res) => res.json());
    console.log(posts);
    for (const post of posts) {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, { cache: 'no-store' }).then((res) => res.json()) //.then(console.log);
        // await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`, { cache: 'no-store' }).then((res) => res.json());
    }
    console.log('fetched');
    return posts;
}

const PostsList = async () => {
    const posts = await getPosts();

    return posts.map((post) => (
        <li key={post.id}>
            <Link href={`/posts/${post.id}`} prefetch={false}>{post.title}</Link>
        </li>
    ));
}

export default PostsList;