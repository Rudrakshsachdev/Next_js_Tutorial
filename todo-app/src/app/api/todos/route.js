import { prisma } from "@/lib/prisma";

export async function GET() {
    const todos = await prisma.todo.findMany({
        orderBy: { createdAt: "desc" },
    });
    return Response.json(todos);
}

export async function POST(request) {
    // the body of the request is a stream, we need to parse it to json
    const body = await request.json();

    const newTodo = await prisma.todo.create({
        data: {
            title: body.title,
        },
    });

    return Response.json(newTodo);
}