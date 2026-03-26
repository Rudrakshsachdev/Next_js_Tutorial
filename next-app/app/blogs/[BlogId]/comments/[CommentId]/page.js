// dynamic nested  routing in next js

export default async function CommentId({params}) {
    const { BlogId, CommentId } = await params;

    return (
        <div>
          <h1>
            Welcome to Comment <b>{ CommentId }</b> of Blog <b>{ BlogId }</b> Page
            </h1>  
        </div>
    )
}