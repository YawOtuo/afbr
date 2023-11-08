import CoreMenu from "@/components/CoreMenu";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <CoreMenu>
      <div className="h-fit">{children}</div>{" "}
    </CoreMenu>
  );
}
