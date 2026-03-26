
import Link from "next/link";
export default function about() {
    return (
        <div>
            <h1>Welcome to /about page</h1>
            <Link href="/">Go to home page</Link>
            <br></br>
            <Link href="/services">Go to services page</Link>
        </div>
    )
}