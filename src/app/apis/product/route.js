export async function GET() {
    return new Response("hello from product route");
}

export async function POST(request) {
    const body = await request.json();
    console.log("Received data:", body);
    return new Response(JSON.stringify({ message: "Data received successfully", data: body }), {
        headers: { "Content-Type": "application/json" },
    });
}