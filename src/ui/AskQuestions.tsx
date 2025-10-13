const AskQuestions = () => {
  const questions = [
    {
      question: "What is Netflix?",
    },
    {
      question: "How much does Netflix cost?",
    },
    {
      question: "Where can I watch?",
    },
    {
      question: "How do I cancel?",
    },
    {
      question: "What can I watch on Netflix?",
    },
    {
      question: "Is Netflix good for kids?",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center  px-24 py-16 border-b-8 border-white/40 gap-5">
      <h1 className="text-2xl md:text-4xl font-extrabold">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col gap-3 w-full items-center mt-6 justify-center">
        {questions.map((item, index) => (
          <div
            className="flex bg-white/40 w-full flex-col max-w-[1200px]"
            key={index}
          >
            <div
              className="flex flex-row items-center justify-between p-6"
              key={index}
            >
              <p className="text-xl">{item.question}</p>
              <img
                src="/assets/group3.png"
                alt="add icon"
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-xl md:text-2xl">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="w-full flex flex-col items-center justify-center p-6 gap-3 md:flex-row">
        <div className="flex flex-col w-full max-w-[1000px] md:max-w-[500px] relative">
          <input
            type="email"
            id="email"
            placeholder=" "
            className="peer p-3 pt-4 rounded text-white bg-[#000000a8] border-2 border-white/35 w-full placeholder-transparent focus:border-white focus:outline-none "
            required
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-3 text-white transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-base  peer-focus:top-[3px] peer-focus:text-sm peer-focus:text-white bg-transparent peer-focus:mt-1"
          >
            Email address
          </label>
        </div>
        <button className="bg-red-600 px-10 py-3 font-bold">Get Started</button>
      </div>
    </section>
  );
};

export default AskQuestions;
