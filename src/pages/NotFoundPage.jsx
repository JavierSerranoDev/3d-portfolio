import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="grid place-items-center h-screen">
        <h1>Not Found Page ❌</h1>
        <Link to={"/"}>
            <button className="md:w-80 md:h-16 w-60 h-12 cta-wrapper">
                <div className="cta-button group">
                    <div className="bg-circle"/>
                    <p className="text">Go back Home</p>
                    <div className="arrow-wrapper">
                        <img src="/images/arrow-right.svg" alt="arrow"/>
                    </div>
                </div>
            </button>
        </Link>
    </div>
  )
}

export default NotFoundPage