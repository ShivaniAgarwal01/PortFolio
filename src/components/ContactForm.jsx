import React, { useRef } from "react";
import emailjs from "@emailjs/browser";


function ContactForm() {
    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm(
            "service_89sxqva",
            "template_okhws4o",
            form.current,
            "5FxhOpGM2orsefEEM"
        ).then(
            (result) =>{
                alert("Message sent successfully!");
                console.log(result.text);
            },
            (error) =>{
                alert("An error occurred, please try again later.");
                console.log(error.text);
            }
        );
        form.current.reset();
    };

  return (
    <section id='connect' className="py-8 mt-10 px-3">
        <div className="heading text-center font-bold text-[32px] sm:text-[36px] md:text-[36px] uppercase tracking-wider mb-8">GET IN TOUCH</div>
            <form ref={form} onSubmit={sendEmail} className="max-w-5xl mx-auto container border border-gray-800 grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-6 px-4 py-7 text-white rounded-2xl font-semibold backdrop-blur-md shadow-md shadow-gray-800">
                <input type="text"
                    name="FirstName"
                    placeholder="First Name"
                    className="bg-gray-100/20 px-4 py-3 rounded-xl  "
                    required
                />
                <input type="text" 
                    name="LastName"
                    placeholder="Last Name"
                    className="bg-gray-100/20 px-4 py-3 rounded-xl  "
                    required
                />
                <input type="email" 
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100/20 px-4 py-3 rounded-xl"
                    required
                />
                <input type="tel" 
                    name="phone"
                    placeholder="Phone No."
                    className="bg-gray-100/20 px-4 py-3 rounded-xl"
                />
                <textarea name="message" rows="7" placeholder="Message" className="col-span-2 md:col-span-2 bg-gray-100/20 px-4 py-3 rounded-xl" required />
                <div className="md:col-span-2 col-span-2     flex justify-center items-center">   
                    <button 
                        type="submit" 
                        className="mt-4 bg-gray-400/20 px-10 py-3 rounded-2xl transition hover:bg-gray-600/20 hover:text-gray-200 flex items-center"
                    >
                    Send
                    </button>
                    </div>
            </form>
    </section>
  )
}

export default ContactForm