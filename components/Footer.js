import React from "react"

function Footer(){
    return (
            <section className="footer">
                <section className="footer-info">
                    <section className="footer-info-left">
                        <h4 className="footer-titles">Product Related</h4>
                        <a href="/" >Our Guarantee</a>
                        <a href="/" >Payments</a>
                        <a href="/" >Quality</a>
                    </section>

                    <section className="footer-info-center">
                        <h4 className="footer-titles">Quick Links</h4>
                        <a href="/" >Terms and Conditions</a>
                        <a href="/" >Copyright</a>
                        <a href="/" >E-mail</a>
                    </section>

                    <section className="footer-info-right">
                        <h4 className="footer-titles">About Us</h4>
                        <a href="/" >0777-777-777</a>
                        <a href="/" >Contact Us</a>
                        <a href="/" >Our Story</a>
                    </section>
                </section>

                <p className="footer-bottom">
                    &copy; 2021 Copyright: Picosa™
                </p>
            </section>
          )
}

export default Footer