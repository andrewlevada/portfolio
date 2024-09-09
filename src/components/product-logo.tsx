"use client"

import Image from "next/image";
import { useState } from "react";

export interface ProductLogoProps {
    name: string;
    logoSrc: string;
    description: string;
}

export default function ProductLogo({ name, logoSrc, description }: ProductLogoProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [xDelta, setXDelta] = useState(0);
    const [yDelta, setYDelta] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top } = e.currentTarget.getBoundingClientRect();
        setXDelta(clientX - left);
        setYDelta(clientY - top);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }   

    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const moveStyles = {
        transform: `translate(-50%, 0)`,
        left: `${xDelta}px`,
        top: `${yDelta + 8}px`
    }

    return (
        <div className="relative">
            <Image src={logoSrc} alt={name} width={13} height={13} className="h-[13px] rounded-[4px]" />

            <div className="absolute -left-[2px] -top-[2px] -right-[2px] -bottom-[2px] bg-transparent" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}></div>

            <div className={`flex flex-col gap-[2px] absolute w-max max-w-[320px] p-[20px] z-10 bg-white transition-all duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`} style={moveStyles}>
                <p className="text-center">{description}</p>
                <p className="opacity-40 text-center">{name}</p>
            </div>
        </div>
    )
}