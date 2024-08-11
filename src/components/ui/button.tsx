interface ButtonProps {
    children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
    return (
        <div className="flex flex-row w-fit justify-center items-center h-[32px] px-[16px] rounded-[8px] bg-[#3E68FF] text-white/90">
            {children}
        </div>
    )
}