import { useRouter } from "next/navigation";
import RegisterForm from "../components/RegisterForm";

function Page() {
 

  return (
    <div className="dog_reg_full w-full h-[100vh]">
      <RegisterForm  />
    </div>
  );
}

export default Page;
