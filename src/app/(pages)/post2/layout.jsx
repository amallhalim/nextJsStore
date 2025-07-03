
export default function layout({children}) {
  return (
    <div style={{backgroundColor:"red",height:"300px"}}>
        <h1>        layout of test product 
</h1>

        <div style={{backgroundColor:"green" ,color:"white" ,height:"100%"}}>{children}</div>
        </div>
  )
}
