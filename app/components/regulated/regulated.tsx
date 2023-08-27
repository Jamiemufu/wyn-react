import Image from 'next/image'
export default function regulated() {
    return (
        <section className='grid  grid-rows-3 align-middle justify-center items-center justify-items-center p-5 pt-10 max-w-6xl m-auto sm:grid-cols-3 sm:grid-rows-none gap-10'>
            <Image src="/register.jpg" alt="registered electrician" width={200} height={200} className='justify-self-start' />
            <Image src="/cityandguilds.png" alt="registered electrician" width={100} height={100} />
            <Image src="/expert.jpg" alt="registered electrician" width={200} height={200} className='justify-self-end'/>
        </section>
    )
}