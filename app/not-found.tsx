import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6 text-center">
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] opacity-50 pointer-events-none" />

            <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-transparent">404</h1>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight">Page Not Found</h2>
            <p className="mt-4 text-foreground-secondary max-w-md">
                The page you are looking for doesn't exist or has been moved.
            </p>

            <Link href="/" className="mt-10 btn-primary">
                Return Home
            </Link>
        </div>
    )
}
