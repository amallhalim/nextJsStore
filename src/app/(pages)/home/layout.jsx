

export const metadata = {
  title: {
    default: '3home page3',
    template: '%s | my store app ❤️'
  },
  description: 'home page',
}
export default function layout({children}) {
  return (
    <div style={{backgroundColor:"red",height:"300px",padding:"10px"}}>
        <h1>        layout of  home 
</h1>

        <div style={{backgroundColor:"green" ,color:"white" ,height:"100%"}}>{children}</div>
        </div>
  )
}
