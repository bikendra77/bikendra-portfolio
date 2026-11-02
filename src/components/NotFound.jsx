import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="not-found-page" id="main">
      <div className="not-found-card">
        <span className="eyebrow">404 · LOST IN THE ORBIT</span>
        <h1 className="h1">This page drifted off course.</h1>
        <p className="lede">No worries — your portfolio is still right where you left it.</p>
        <a className="btn btn-primary" href="/">
          <ArrowLeft size={17} />
          Back home
        </a>
      </div>
    </main>
  )
}
