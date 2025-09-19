
interface HamburgerIconProps {
    isHamburgerOpen: boolean;
}

export default function HamburgerIcon({ isHamburgerOpen }: HamburgerIconProps) {

    const hamburgerLinesClass = `w-full h-1 bg-black absolute transition-all duration-300 ease-in-out`
    const topLine = isHamburgerOpen ? "top-0 rotate-45" : "top-1/4"
    const middleLine =  `top-1/2 -translate-y-1/2 ${isHamburgerOpen ? "opacity-0" : "opacity-100"}`;
    const bottomLine = isHamburgerOpen ? "bottom-0 -rotate-45" : "bottom-1/4"
    return (
        <>
            <div className={`${topLine} ${hamburgerLinesClass} `}></div>
            <div className={`${middleLine} ${hamburgerLinesClass} `}></div>
            <div className={`${bottomLine} ${hamburgerLinesClass} `}></div>
        </>

    );
}
