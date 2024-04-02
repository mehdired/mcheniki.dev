import { FC, SVGProps } from 'react'

type StackCardProps = {
    name: string
    icon: FC<SVGProps<SVGElement>>
    description?: string
}

export function StackCard({ name, icon, description }: StackCardProps) {
    const Icon = icon

    return (
        <div className="border-6 h-[511px] w-[367px] overflow-hidden rounded-32 border-secondary-50">
            <div className="relative h-1/2">
                <div className="clip-bg-secondary clip-bg absolute left-0 top-0 -z-10 h-full w-full">
                    <span></span>
                </div>
                <h3 className="text-center font-jetbrains text-36 text-base-800">
                    {name}
                </h3>
                <Icon
                    className="mx-auto block fill-base-800"
                    width="118"
                    height="118"
                />
            </div>
            {description && (
                <p className="text-center font-medium text-base-50">
                    {description}
                </p>
            )}
        </div>
    )
}
