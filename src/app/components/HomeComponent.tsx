import Image from "next/image"

const Home = () => {
  return (
    <div className='relative flex h-full w-full z-10 p-24 flex-col items-center justify-center'>
      <h1 className='text-[5rem] font-bold text-amber-300 font-protest-revolution mt-5'>Infested Side</h1>
      <div className="flex items-center justify-between my-10 mx-30 relative pb-4 group">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-200 to-amber-400"></div>
        <Image src='/SD.png' alt='infested side photo' width={563} height={443} className="-ml-30 -mb-3.5" />
        <div className="flex flex-col gap-8 max-w-[50%]">
          <h2 className="text-4xl font-bold font-yatra-one">Quem sou eu?</h2>
          <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus corrupti sequi delectus ab sed, similique numquam aliquam, cupiditate saepe quis architecto? Ex tempore aspernatur excepturi fugit inventore veritatis quam commodi.</p>
        </div>
      </div>
    </div>
  )
}

export default Home