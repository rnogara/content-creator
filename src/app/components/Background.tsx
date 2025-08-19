import Image from 'next/image'

const Background = () => {
  return (
    <div className='absolute w-full h-full z-0'>
      <Image src='/background/background-top.png' width={2560} height={1440} alt='background'/>
      <Image src='/background/background-mid.png' width={2560} height={1440} alt='background'/>
      <Image src='/background/background-mid.png' width={2560} height={1440} alt='background'/>
      <Image src='/background/background-mid.png' width={2560} height={1440} alt='background'/>
      <Image src='/background/background-bottom.png' width={2560} height={1440} alt='background'/>
    </div>
  )
}

export default Background