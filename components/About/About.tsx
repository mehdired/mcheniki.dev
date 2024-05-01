import { Container } from '../Container'
import { Scene } from '../ThreeScene/Scene'

export function About() {
    return (
        <Container className="flex flex-col items-center justify-between gap-32 lg:flex-row-reverse">
            <div className="max-lg:w-full lg:flex-1">
                <h2 className="mb-12 text-36 text-base-50">
                    <span className="mr-[10px] inline-block bg-primary-500 px-[10px]">
                        Extensive
                    </span>
                    web experiences
                </h2>
                <p className="">
                    Facilisi venenatis adipiscing non eleifend ut ultrices
                    scelerisque. Sit erat non augue erat turpis turpis lectus
                    lorem. Feugiat diam tellus id quam imperdiet consectetur a.
                    Pharetra mi arcu condimentum: Tempus velit vel urna nunc
                    vulputate. In hendrerit et ullamcorper ullamcorper. Justo
                    justo lorem laoreet elementum. Tristique id amet adipiscing
                    leo aenean arcu tincidunt eget volutpat.
                </p>
            </div>
            <div className="lg:flex-1">
                <Scene />
            </div>
        </Container>
    )
}
