import RegisterModal from "./RegisterModal";

type Props = {
  label: string;
  subText?: string;
  active: boolean;
  price: string
};
export default function SelectRegistration({ label, subText, active, price }: Props) {
  return (
    <div className="flex flex-col gap-3 w-fit">
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-semibold">{label}</p>
        <p>{subText}</p>
        <p><span className="text-xs ">Price:</span> {price}</p>
      </div>
      {active && <RegisterModal />}{" "}
    </div>
  );
}
