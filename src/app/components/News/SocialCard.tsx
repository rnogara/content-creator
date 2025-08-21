import { ThumbsUp, Tv } from "lucide-react";

interface SocialCardProps {
  name: string;
  lastPost?: string;
  watched?: string;
  likes?: string;
}

const SocialCard = ({data}: {data: SocialCardProps}) => {
  return (
    <div className="relative rounded-2xl h-[25rem]">
      {/* Linha superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent z-10"></div>
      {/* Linha direita */}
      <div className="absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-400 to-transparent z-10"></div>
      {/* Linha inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent z-10"></div>
      {/* Linha esquerda */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-amber-200 to-transparent z-10"></div>
      
      <div className="bg-black/40 rounded-lg p-1 relative z-0 h-full flex flex-col justify-between py-6 px-2">
        <h2 className="text-2xl font-bold font-yatra-one text-center">{data.name}</h2>
        {
          data.lastPost ? (
            <div className="relative pb-[56.25%] h-0 overflow-hidden mt-4">
              <iframe 
                src={data.lastPost} 
                className='absolute w-full h-full top-0 left-0 rounded-lg' 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
              </iframe>
            </div>
          ) : (
            <p className="text-center">Nenhum post recente</p>
          )
        }
        <div className="w-full flex justify-evenly items-center">
          {data.watched && <p className="flex items-center gap-2"><Tv />{data.watched}</p>}
          {data.likes && <p className="flex items-center gap-2"><ThumbsUp />{data.likes}</p>}
        </div>
      </div>
    </div>
  )
}

export default SocialCard