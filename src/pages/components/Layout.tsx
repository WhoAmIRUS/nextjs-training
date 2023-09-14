import {FC, PropsWithChildren} from 'react';
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

const Layout: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <main
            className={`prose prose-a:text-blue-600 hover:prose-a:text-blue-500 flex min-h-screen flex-col m-auto mt-16 ${inter.className}`}
        >
            {children}
        </main>
    );
};

export default Layout;