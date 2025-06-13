import Image from "next/image";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Razumly MVP</h1>
      <p>Welcome to our sports event management platform.</p>
      <div style={{ marginTop: '20px' }}>
        <h2>Download Our App</h2>
        <p>Available on Android and iOS</p>
        <div style={{ marginTop: '16px' }}>
          <h3>Deep Link Examples:</h3>
          <ul>
            <li>Event: <code>razumly://mvp/event/12345</code></li>
            <li>Tournament: <code>razumly://mvp/tournament/67890</code></li>
          </ul>
        </div>
      </div>
    </main>
  )
}
