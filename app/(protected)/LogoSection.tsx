import Image from 'next/image'
import Logo from "@/assets/img/logo.png"
const LogoSection = ({ isMinimized, toggleWidth }: { isMinimized: boolean, toggleWidth: (value: boolean) => void }) => {
    return (
        <div className=" h-[90px] flex flex-col  justify-center  bg-prim-color bg-opacity-50  ">
            <div className={(isMinimized ? " justify-center" : "pl-10 pr-2") + " flex"}>
                <div className={isMinimized ? "hidden" : ""}>
                    <div className="flex h-full">
                        <Image width={60} src={Logo} alt="UPF Logo" />
                    </div>
                </div>
                <div className="flex flex-col justify-center flex-grow text-white">
                    <span onClick={() => toggleWidth(!isMinimized)} className={(isMinimized ? " justify-center" : " justify-end") + " flex cursor-pointer"}>
                        {isMinimized ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" /></svg>
                        }
                    </span>
                </div>
            </div>
        </div>
    )
}
export default LogoSection;