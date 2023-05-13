import React from "react";
import '../css/404.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import img_404 from "../images/404.png";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <Header />
      <main className="main">
        <div className="container">

          <div className="main__body">
            <img src={img_404} alt="img 404" />
            <h3>Page Not Found</h3>
            <Link to="/">Back To Home</Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PageNotFound;
