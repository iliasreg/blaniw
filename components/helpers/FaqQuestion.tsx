type IQuestion = {
    question: string,
    answer: string
}

const FaqQuestion = ({question, answer}: IQuestion) => {
    return (
        <div className="w-[95%] h-[40%] text-justify flex flex-col justify-center items-start gap-4 bg-white p-8 rounded-xl shadow-lg shadow-stone-500 ">
            <h3 className="font-semibold text-sm md:text-md">{question}</h3>
            <p className="font-thin text-[.6rem] md:text-sm">{answer}</p>
        </div>
    )
}

export default FaqQuestion