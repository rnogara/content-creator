import Section from "../Section";
import SocialCard from "./SocialCard";

const News = () => {
  const socialMediaData = [
    {
      name: 'Youtube',
      lastPost: 'https://www.youtube.com/embed/eveZ4HE627Y',
      watched: '1000',
      likes: '1000',
    },
    {
      name: 'Twitch',
    },
    {
      name: 'Instagram',
      lastPost: 'https://www.youtube.com/embed/eveZ4HE627Y',
      likes: '1000',
    },
    {
      name: 'Twitter',
      lastPost: 'https://www.youtube.com/embed/eveZ4HE627Y',
      likes: '1000',
    },
  ];

  return (
    <Section>
      <div className="w-full p-24">
        <h2 className="text-[4rem] font-bold font-protest-revolution text-center">Novidades</h2>
        <div className="relative grid grid-cols-4 gap-4 pt-10">
          {socialMediaData.map((social) => (
            <SocialCard key={social.name} data={social} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default News