import IconWP from '@/svgs/wp.svg'
import IconNext from '@/svgs/next.svg'

export function SmallCardStack() {
    return (
        <div className="flex justify-center gap-48">
            <div className="animate-wp-float inline-block">
                <IconWP className="block fill-base-50" width="80" height="80" />
            </div>
            <div className="animate-float inline-block">
                <IconNext
                    className="block fill-base-50"
                    width="80"
                    height="80"
                />
            </div>
        </div>
    )
}
