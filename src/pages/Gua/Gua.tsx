import { ProfileCard } from "../../components/ProfileCard";

export const Gua = () => {
  const profileList = [
    { name: "呱呱蛙", intro: "喜歡大聲唱歌" },
    { name: "美樂蒂", intro: "喜歡睡覺" },
    { name: "桃樂比", intro: "喜歡工作" },
  ];
  return (
    <div>
      {profileList.map((user) => (
        <div key={`profile-${user.name}`}>
          <ProfileCard intro={user.intro} name={user.name}>
            <img alt="呱呱" src="./frog.jpeg" />
          </ProfileCard>
        </div>
      ))}
    </div>
  );
};
