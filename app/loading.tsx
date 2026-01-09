
export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-[50vh] w-full bg-black">
            <div className="relative w-12 h-12">
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-2 border-white/10"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            </div>
        </div>
    )
}
