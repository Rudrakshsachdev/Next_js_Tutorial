export default async function Blogs({params}) {
    console.log(await params);
    return (
        <div>
            <h1>
                Welcome to Blogs Page
            </h1>
            <p>
                Blog 1
            </p>
            <p>
                Blog 2
            </p>
            <p>
                Blog 3
            </p>
        </div>
    )
}