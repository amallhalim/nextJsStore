import data from  "./../../../staticData/data.json"
export async function GET(request,{params}) {
    const id =  await params.id;
    const user = data.find(user => {
        return user.id === parseInt(id)
    })
return  Response.json(user)

}