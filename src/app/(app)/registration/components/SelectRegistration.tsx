import RegisterModal from "./RegisterModal";

type Props = {
  label: string;
  subText?: string;
};
export default function SelectRegistration({ label, subText }: Props) {
  return (
    <div className="flex flex-col gap-3 w-fit">
      <div className="flex flex-col gap-1">
        <p className="text-2xl">{label}</p> <p>{subText}</p>
      </div>

      <RegisterModal />
    </div>
  );
}
