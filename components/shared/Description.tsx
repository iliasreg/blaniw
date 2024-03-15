"use client";

import DescriptionCard from "../helpers/DescriptionCard"
import { Variants, motion } from "framer-motion";


const Description = () => {

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

    return (
        <section className='w-full h-screen bg-stone-50 flex flex-col justify-center items-center gap-2 px-12 py-8'>
            <motion.div
                className="w-full flex flex-col justify-center items-center gap-4"
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introHeaderVariants}
            >
                <h1 className="text-3xl md:text-5xl font-extrabold main-text">Blaniw</h1>
                <p className="hidden md:block w-[650px] text-center">Our unique approach to event creation and management in Morocco sets us apart. With our expertise and attention to detail, we ensure that every event is a memorable experience for all attendees.!</p>
            </motion.div>
            <motion.div
                className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 h-[80%]"
                initial="hide"
                whileInView="show"
                exit="hide"
                variants={introHeaderVariants}
            >
                <DescriptionCard
                    title="Simplify Your Event Planning"
                    description="organizing events has never been easier. From birthday parties to corporate gatherings, our app streamlines the entire event planning process."
                    buttonText="Login"
                    btnLink="/sign-in"
                    />
                <DescriptionCard
                    title="All-in-One Event Management Solution"
                    description="Seamlessly create, manage, and share events with friends, family, or colleagues. Whether it's a small get-together or a large-scale conference."
                    buttonText="Explore Events"
                    btnLink="#events"
                />
                <DescriptionCard
                    title="Personal Event Assistant"
                    description="Our app provides a comprehensive suite of features to help you plan, execute, and coordinate events flawlessly. "
                    buttonText="Login"
                    btnLink="/sign-in"
                />
            </motion.div>
        </section>
    )
}

export default Description