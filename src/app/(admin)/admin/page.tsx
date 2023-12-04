import TotalSales from "@/app/(profile)/components/TotalSales";
import AdminRecentlyRegisteredUsers from "./components/AdminRecentlyRegisteredUsers";
import AdminRecentlyRegisteredDogs from "./components/AdminRecentyRegisteredDogs";

export default function Page() {
  return (
    <div className="flex flex-col gap-5 w-full  justify-start items-start px-5 lg:px-10">
        <div className="flex justify-center items-center w-full border-y-2 border-y-yellow4 py-5">
            <TotalSales filter="dogs" amount={30}/>
            <TotalSales filter="dogs" amount={30}/>
            <TotalSales filter="dogs" amount={30}/>

        </div>
      <div className="flex flex-col gap-5">
        <AdminRecentlyRegisteredDogs />
        <AdminRecentlyRegisteredUsers/>
      </div>{" "}
    </div>
  );
}
