import { type SVGComponent } from './StackConstellation'

type CardStackProps = {
    title: string
    description: string
    Icon: SVGComponent
}

export default function CardStack({
    title,
    description,
    Icon,
}: CardStackProps) {
    return (
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-32 bg-base-700 p-[40px]">
            <div className="absolute left-0 top-0 h-1/2 w-full bg-base-600 clip-path-ellipse-stack"></div>
            <div className="relative mb-[40px] flex flex-col items-center gap-6 pb-[23px]">
                <Icon width="80px" height="80px" fill="#fff" />
                <h3 className="text-48 font-bold tracking-tighter text-base-50">
                    {title}
                </h3>
            </div>
            <p className="leading-22 text-base-50">{description}</p>
        </div>
    )
}
