// This is a dynamic route in Next.js that captures all paths under the specified route. The file name [ ...filePath ] indicates that it will match any path and capture it as an array of segments in the params object.

// Capture or catch all routes

export default async function FilePath({params}) {
    console.log(await params);

    const { filePath } = await params;

    return (
        <div>
            <h1>
                Welcome to FilePath Page
            </h1>
            <h2>
                The file path is: { filePath?.join("/") }
            </h2>
        </div>
    )
}