
export async function GET() {
  return new Response("hello from user route");
}

export async function POST(request) {
  const body = await request.json();
  console.log("Received data:", body);
  
  // Here you can process the data, e.g., save it to a database
  // For now, we'll just return the received data as a response
  return new Response(JSON.stringify({ message: "Data received successfully", data: body }), {
    headers: { "Content-Type": "application/json" },
  });
}
  export async function PUT(request) {
    const body = await request.json();
    console.log("Received data for PUT:", body);
    
    // Here you can process the data, e.g., update it in a database
    // For now, we'll just return the received data as a response
    return new Response(JSON.stringify({ message: "Data updated successfully", data: body }), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  }

  export async function DELETE(request) {
    const body = await request.json();
    console.log("Received data for DELETE:", body);
    
    // Here you can process the data, e.g., delete it from a database
    // For now, we'll just return a success message
    return new Response(JSON.stringify({ message: "Data deleted successfully" }), {
      headers: { "Content-Type": "application/json" },
    });
  }

  export async function PATCH(request) {
    const body = await request.json();
    console.log("Received data for PATCH:", body);
    
    // Here you can process the data, e.g., partially update it in a database
    // For now, we'll just return the received data as a response
    return new Response(JSON.stringify({ message: "Data patched successfully", data: body }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  