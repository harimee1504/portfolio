import Image from "next/image";

const Education = () => {
    return (
        <div className="flex h-full w-full flex-col items-center gap-y-8 mt-16 bg-neutral-950">
            <div className="flex h-[40vh] flex-col mt-12 w-[75%]">
                <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">Education</h2>
                <div className="flex gap-y-4 mt-6 p-4">
                    <div className="relative w-[60px] h-[60px] rounded-lg overflow-hidden bg-neutral-900 shadow-lg">
                        <Image
                            src="/images/mkce-rounded.jpg"
                            alt="MKCE" 
                            fill 
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 60px, 60px"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 w-full rounded-lg px-4">
                        <h2 className="text-lg md:text-xl text-black dark:text-white max-w-4xl">M.Kumarasamy College of Engineering</h2>
                        <p className="text-md text-white">Bachelor of Engineering</p>
                        <p className="text-sm text-white">[2017 - 2021]</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;       