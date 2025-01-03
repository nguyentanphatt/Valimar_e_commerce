import Arrowright from '@/public/assets/icon/arrow-up-right.svg'
export default function Footer(){
    return(
        <div className="mt-6 md:mt-10 relative -z-10 overflow-x-clip">
        <div className="absolute h-[400px] md:h-[500px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-darkblue/50 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
        <div className="border-t-2 border-white/30 py-6 flex flex-col items-center justify-center gap-2 md:gap-5 lg:gap-10">
          <p className="uppercase font-bold text-base md:text-2xl lg:text-3xl text-white">
            Let's grow stronger together
          </p>
          <div className="flex flex-col items-center lg:flex-row gap-2 md:gap-5 lg:gap-80">
            <div className="text-white/70 text-xs md:text-xl lg:text-2xl">
              Copyright &copy; 2024. All right reserved.
            </div>
            <nav className="flex gap-1 md:gap-3">
              <a href="" className="flex">
                <span className="font-medium text-xs md:text-xl lg:text-2xl text-white">
                  Youtube
                </span>
                <Arrowright className="text-white size-4 md:size-5" />
              </a>
              <a href="" className="flex">
                <span className="font-medium text-xs md:text-xl lg:text-2xl text-white">
                  Facebook
                </span>
                <Arrowright className="text-white size-4 md:size-5" />
              </a>
              <a href="" className="flex">
                <span className="font-medium text-xs md:text-xl lg:text-2xl text-white">
                  Instagram
                </span>
                <Arrowright className="text-white size-4 md:size-5" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    )
}