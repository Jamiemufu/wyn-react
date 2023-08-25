import Image from 'next/image'
export default function regulated() {
    return (
        <section className='flex flex-wrap flex-row items-center justify-evenly p-6'>
            <Image src="/register.jpg" alt="registered electrician" width={200} height={200} className='mb-2' />
            <Image src="/cityandguilds.png" alt="registered electrician" width={100} height={100} className='mb-5' />
            <Image src="/expert.jpg" alt="registered electrician" width={200} height={200}/>
        </section>
    )
}