import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <h1 className='py-[25vh] text-center'>
                Hi, it`s my test task! Check{' '}
                <Link className='underline' href='/contact'>
                    contact page
                </Link>{' '}
                !
            </h1>
        </main>
    );
}
