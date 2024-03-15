"use client";

import Link from "next/link"
import FaqQuestion from "../helpers/FaqQuestion"

import { Variants, motion } from "framer-motion";

const Faq = () => {

    const introHeaderVariants: Variants = {
        hide: {
            opacity: 0,
            x: -500,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
            },
        },
    };

    const introPannelVariants: Variants = {
        hide: {
            opacity: 0,
            y: 300,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-4 px-12 scroll-smooth snap-center bg-stone-100 py-16 overflow-scroll">
            <motion.div
                className="text-justify flex flex-col justify-between items-center gap-4"
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introHeaderVariants}
            >
                <h1 className="text-black text-2xl md:text-5xl font-bold">FAQs</h1>
                <h6 className="hidden md:block">Make sure to contact us for any other inquiries</h6>
                <Link href="mailto:iliasreg18@gmail.com"><button className="hidden md:block main-fill button w-full sm:w-fit main-fill px-8 h-12 text-white">Contact</button></Link>
            </motion.div>
            <motion.div
                className="flex flex-col justify-center items-center gap-4"
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introPannelVariants}
            >
                <FaqQuestion
                    question="How do I create an event?"
                    answer="To create an event, simply sign up for our platform and follow the step-by-step process to set up your event details, ticketing, and promotion."
                />
                <FaqQuestion
                    question="How can I sell tickets?"
                    answer="You can easily sell tickets for your event through our platform. Just set the ticket prices and quantities, and we'll handle the rest, including secure payment processing."
                />
                <FaqQuestion
                    question="Can I customize my event page?"
                    answer="Absolutely! Our event management platform allows you to customize your event page with your branding, images, and event details to create a unique and professional look."
                />
            </motion.div>
        </div>
    )
}

export default Faq