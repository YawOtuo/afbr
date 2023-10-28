import { Textarea } from "@/components/ui/textarea"
import { styled } from "@stitches/react"

type Props = {
    label: string
    rows? : number
    classes: string
    onChange : (e: any) => void
    placeholder: string
    name ? : string
}

const CustomTextAreaInput = ({label,  classes, onChange, placeholder, name}: Props) => {
    return(
        <Root className="">
            <label htmlFor="">{label}</label>
            <textarea className={`form-input bg-transparent ${classes} rounded-[32px] border-yellow1 border-2`} 
            placeholder={placeholder}
            onChange={onChange} name={name} />
        </Root>
    )
}

const Root = styled("div", {
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.9375rem",
    ".form-input": {
      padding: "15px",
      fontSize: " 0.8125rem",
    },
  });

export default CustomTextAreaInput