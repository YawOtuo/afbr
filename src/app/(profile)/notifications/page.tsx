import IconButton from "@/components/Buttons/IconButton";
import NotificationCard from "../components/NoticationCard";

export default function Page() {
  return (
    <div className="px-5 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row justify-between w-full items-start lg:items-center">
        <p className="text-3xl font-semibold mb-5">My notifications</p>
        <IconButton label="Mark All As read" variant="read" />
      </div>{" "}
      <div className="flex flex-col gap-3 ">
        {Array.from({ length: 3 }).map((r, index) => (
          <NotificationCard key={index} variant={"caution"} />
        ))}
        {Array.from({ length: 3 }).map((r, index) => (
          <NotificationCard key={index} variant={"success"} />
        ))}{" "}
        {Array.from({ length: 3 }).map((r, index) => (
          <NotificationCard key={index} variant={"info"} />
        ))}
      </div>
    </div>
  );
}
