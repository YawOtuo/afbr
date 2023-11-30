import HomeNewlyRegisteredCard from "./HomeNewlyRegisteredCard";

export default function HomeNewlyRegistered() {
  return (
    <div className="flex flex-col gap-10 px-5 lg:px-20">
      <p className="text-2xl font-semibold">
        See the newly registered dogs on the block
      </p>

      <div className="flex flex-col lg:grid grid-cols-3 gap-x-5 gap-y-5 ">
        <HomeNewlyRegisteredCard image={"/images/testdog.png"} />
        <HomeNewlyRegisteredCard
          image={
            "https://res.cloudinary.com/daurieb51/image/upload/v1695976909/ryw2tirvpu9sgifhx8no.jpg"
          }
        />
        <HomeNewlyRegisteredCard
          image={
            "https://res.cloudinary.com/daurieb51/image/upload/v1689031930/fjgwst2glwih9libefzy.jpg"
          }
        />
        <HomeNewlyRegisteredCard image="https://res.cloudinary.com/daurieb51/image/upload/v1686491827/scfgx9yzpizrpccuuq6s.jpg" />
        <HomeNewlyRegisteredCard image="https://res.cloudinary.com/daurieb51/image/upload/v1684274276/rbxklklg8zffqvlm4q06.jpg" />
        <HomeNewlyRegisteredCard image="https://res.cloudinary.com/daurieb51/image/upload/v1684248154/xtyxhwwspmtpxzylwmkq.jpg" />
      </div>
    </div>
  );
}
