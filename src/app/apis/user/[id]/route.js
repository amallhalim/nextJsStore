import data from  "./../../../staticData/data.json"
export async function GET(request,{params}) {
    const id =  await params.id;
    const user = data.find(user => {
        return user.id === parseInt(id)
    })
return  Response.json(user)

}
export async function PATCH(request,{params}) {
    const id =  await params.id;
    console.log("Received ID for PATCH:", id);
    const body = await request.json();
    console.log("Received data for PATCH:", body);
    
    // Here you can process the data, e.g., partially update it in a database
    // For now, we'll just return the received data as a response
    return new Response(JSON.stringify({ message: "Data patched successfully", data: body }), {
        headers: { "Content-Type": "application/json" },
    }); 
    
}
export async function DELETE(request,{params}) {
    const id =  await params.id;
    console.log("Received data for DELETE:", id);
    
    // Here you can process the data, e.g., delete it from a database
    // For now, we'll just return a success message
    return new Response(JSON.stringify({ message: "Data deleted successfully" }), {
        headers: { "Content-Type": "application/json" },
    });
    
}