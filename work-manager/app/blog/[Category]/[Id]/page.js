export default function BlogPost({params}) {
    const {Category, Id} = params;
    return (
        <div>
            <h1>
                Hello to the {Category} and the id is {Id}
            </h1>
        </div>
    )
}   