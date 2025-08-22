import Section from "../Section"
import FollowersChart from "./FollowersChart"

export const followersChartData = [
  {
    socialMedia: "Youtube",
    followers: 3000,
    color: "#FF0000",
  },
  {
    socialMedia: "Twitch",
    followers: 2000,
    color: "#9147FF",
  },
  {
    socialMedia: "Instagram",
    followers: 6000,
    color: "#E1306C",
  },
  {
    socialMedia: "Twitter",
    followers: 1000,
    color: "#1DA1F2",
  },
]

const Stats = () => {
  return (
    <Section>
      <div className="w-full p-24">
        <h2 className="text-[4rem] font-bold font-protest-revolution text-center">Seguidores</h2>
        <div className="flex items-center justify-evenly mt-10">
          <FollowersChart />
          <div className="flex flex-col items-center font-bold font-yatra-one text-amber-300">
            <h3 className="text-[5rem]">Total</h3>
            <p className="text-[3rem]">
              {followersChartData.reduce((total, item) => total + item.followers, 0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Stats