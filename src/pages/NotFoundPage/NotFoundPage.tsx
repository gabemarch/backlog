import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page-title">Ooops...</h1>
      <p className="not-found-page-text">Something went wrong</p>
      <Link to="/">
        Go back to homepage
      </Link>
    </div>
  )
}

export default NotFoundPage;