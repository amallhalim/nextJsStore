import Link from 'next/link'
import ServerComponent from './components/ServerComponent'
import ClientComponent from "../product/components/ClientComponent"

export const metadata = {
  title: {
    default: "PRODUCT PAGE",
  },
  description: 'home page',
}
export default function page() {
  return (
    <div>
      <br />
      ----------ssssssss
      <br />

      <Link href="/home">go to home page</Link>

      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px' }}>
          <h3>Server Component</h3>
          <ServerComponent />
        </div>

        <div style={{ flex: 1, border: '1px solid #ccc', padding: '10px' }}>
          <h3>Client Component</h3>
          <ClientComponent />
        </div>
      </div>
    </div>
  )
}
