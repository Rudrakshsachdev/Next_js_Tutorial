export default async function User({params}) {
    const {userid} = await params;
    return (
        <>
        <h1>
            Hello to the {userid}
        </h1>
        </>
    )
}