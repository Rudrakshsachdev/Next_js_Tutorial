export default async function Insta({params}) {
    const {instaid} = await params;

    return (
        <>
        <h1>
            Hello to the {instaid}
        </h1>
        </>
    )
}