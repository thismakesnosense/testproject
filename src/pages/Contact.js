import React from "react";

function Contact() {
    return (
        <div className="container2 ">
            <section id="tact">
                <h1>Contact</h1>

                <form action="https://formspree.io/nolenik23@outlook.com" method="POST">
                    <label>
                        Your Name:
          <input type="text" name="name" />
                    </label>
                    <label>
                        Your Email:
          <input type="email" name="_replyto" />
                    </label>
                    <label>
                        Message:
          <textarea name="message"></textarea>
                    </label>
                    <input type="submit" value="Send" />
                </form>



            </section>

        </div>
    )
}

export default Contact;