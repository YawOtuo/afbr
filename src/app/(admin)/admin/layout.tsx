import SideNavAdmin from "./components/sideNav";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-6 bg-yellow4 min-h-[100vh] ">
      <SideNavAdmin />
      <div className="col-span-5 bg-white flex flex-col items-center justify-start py-10">{children}</div>{" "}
    </div>
  );
}
