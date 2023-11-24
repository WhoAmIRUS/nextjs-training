import {FC} from 'react';
import Image from "next/image";
import avatar from "../../../public/images/avatar.jpg";
import Link from 'next/link';

export const getServerSideProps = async () => {
    console.log('getServerSideProps');
    return { props: {} }
}

const SSR: FC = (props) => {
    const {} = props;


    return (
        <>
            <div className="flex items-center flex-col">
                <Image src={avatar} width={144} height={144} className="rounded-full" alt='Picture of the author' />
                <h2 className="mt-0">Dmitrii Glazkov</h2>
            </div>
            <h1>SSR example</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <button onClick={() => console.log(123)}>123</button>
        </>
    );
};

export default SSR;