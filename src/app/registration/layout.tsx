import CoreMenu from "@/components/CoreMenu";

export default function Layout({ children }) {
  return (
    <CoreMenu>
      <div className="h-fit">{children}</div>{" "}
    </CoreMenu>
  );
}
