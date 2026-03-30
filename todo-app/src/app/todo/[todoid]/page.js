export default async function todoid({params}) {
    const {todoid} = await params;

    return (
        <div>
            <h1>Todo ID: {todoid}</h1>
            <p>This is the page for todo with ID: {todoid}</p>
        </div>
    )
}