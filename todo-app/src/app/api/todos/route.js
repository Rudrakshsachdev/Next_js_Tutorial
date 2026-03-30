let todos = [];

export function GET() {
    return Response.json(todos); 
}

export async function POST(request) {
    // the body of the request is a stream, we need to parse it to json
    const body = await request.json();

    const newTodo = {
        id: Date.now(),
        title: body.title,
    };

    todos.push(newTodo);

    return Response.json(newTodo);
}