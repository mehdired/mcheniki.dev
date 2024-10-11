type CardStackProps = {
    title: string
    description: string
    icon: React.ReactNode
}

export default function CardStack({
    title,
    description,
    icon,
}: CardStackProps) {
    return (
        <div className="relative h-full overflow-hidden rounded-32 bg-base-700 p-[40px]">
            <div className="clip-path-ellipse-stack absolute left-0 top-0 h-1/2 w-full bg-base-600"></div>
            <div className="relative mb-[40px] flex flex-col items-center gap-6 pb-[23px]">
                {icon}
                <h3 className="text-48 font-bold tracking-tighter text-base-50">
                    {title}
                </h3>
            </div>
            <p className="leading-22 text-base-50">{description}</p>
        </div>
    )
}
