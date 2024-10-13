import { useState, forwardRef } from "react";
import { contactData } from "../../utils/staticData";
import Button from "../Elements/Button";

const Contact = forwardRef((props, ref) => {
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, email, message } = contact;

        if (!firstName || !lastName || !email || !message) {
            alert("Field tidak boleh kosong");
        } else {
            alert("Data Kamu Terkirim");
            setFormData(contact);
            setContact({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
            });
        }
    };

    return (
        <section className="bg-[#181818] py-[162px]" ref={ref}>
            <h1 className="font-poppins text-[52px] font-normal text-white text-center">{contactData.head}</h1>
            <p className="font-normal text-[20px] leading-[30px] tracking-[0.2px] text-center w-[582px] mx-auto text-white mt-[27px] mb-[80px]">{contactData.paragraph}</p>
            <div className="text-center mx-auto max-w-[385px]">
                <form onSubmit={handleSubmit}>
                    <div className="max-w-sm space-y-3 mx-auto mb-5">
                        <div className="sm:flex rounded-lg shadow-sm">
                            <span className="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg light:bg-neutral-700 light:border-neutral-700 light:text-neutral-400 ">
                                First and last name
                            </span>
                            <input
                                type="text"
                                placeholder="John"
                                className="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white dark:bg-white dark:text-black outline-none"
                                onChange={handleChange}
                                name="firstName"
                                value={contact.firstName}
                            />
                            <input
                                type="text"
                                placeholder="Doe"
                                className="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white dark:bg-white dark:text-black outline-none"
                                onChange={handleChange}
                                name="lastName"
                                value={contact.lastName}
                            />
                        </div>
                    </div>

                    <div className="max-w-sm mx-auto mb-5">
                        <div className="flex rounded-lg shadow-sm">
                            <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 text-sm text-gray-500 light:bg-neutral-700 light:border-neutral-700 light:text-neutral-400">
                                Email
                            </span>
                            <input
                                type="email"
                                placeholder="your@mail.com"
                                className="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none light:bg-neutral-900 light:border-neutral-700 light:text-neutral-400 light:placeholder-neutral-500 light:focus:ring-neutral-600 outline-none"
                                onChange={handleChange}
                                name="email"
                                value={contact.email}
                            />
                        </div>
                    </div>
                    <div className="max-w-sm space-y-3 mx-auto mb-5">
                        <textarea
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            rows={3}
                            placeholder="Ask me anything..."
                            defaultValue={""}
                            onChange={handleChange}
                            name="message"
                            value={contact.message}
                        />
                    </div>
                    <Button label="Submit" type="submit" variant="submit" />
                </form>

                <div>
                    <p className="text-white">First Name : {formData.firstName}</p>
                    <p className="text-white">Last Name : {formData.lastName}</p>
                    <p className="text-white">Email : {formData.email}</p>
                    <p className="text-white">Message : {formData.message}</p>
                </div>
            </div>
        </section>
    );
});

export default Contact;

// export default function Contact({ ref }) {}
