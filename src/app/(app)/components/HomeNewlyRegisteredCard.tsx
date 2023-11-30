import Image from "next/image";

type Props = {
    image: string
}

export default function HomeNewlyRegisteredCard({image} : Props){
    return(
        <div className="w-full rounded-2xl border-[7px] border-yellow1 overflow-hidden">
            <div className="relative w-full aspect-[458/352] ">
                <Image src={image} fill alt="Dog" objectFit="cover"/>
            </div>
        </div>
    )
}