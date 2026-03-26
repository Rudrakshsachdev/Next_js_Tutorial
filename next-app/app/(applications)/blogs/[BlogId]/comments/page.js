// dynamic nested   routing in next js 

export default async function Comments({params}) {
   const { BlogId } = await params;

    return (
        <div>
          <h1>
            Welcome to Comments of Blog <b>{ BlogId }</b> Page
            </h1>  
        </div>
    )
}