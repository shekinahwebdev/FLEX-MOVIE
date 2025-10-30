interface AskQuestionsProps {
  getStarted: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  error: string | null;
}

const AskQuestions = ({
  onChange,
  onBlur,
  value,
  getStarted,
  error,
}: AskQuestionsProps) => {
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
    <section className="flex flex-col items-center justify-center  px-14 py-16 border-b-8 border-white/40 gap-5">
      <h1 className="text-2xl md:text-3xl font-extrabold">
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
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-xl md:text-2xl">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form
        onSubmit={getStarted}
        className="w-full flex flex-col items-center justify-center p-6 gap-3 md:flex-row  md:items-start"
      >
        <div className="flex flex-col w-full max-w-[1000px] md:max-w-[500px] relative">
          <input
            type="email"
            id="email"
            name="email"
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            placeholder=" "
            className="peer p-3 pt-9 text-base rounded text-white bg-[#000000a8] border border-white/40 w-full placeholder-transparent focus:border-green-600 focus:outline-none"
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-2 text-white transition-all duration-200 text-base
              peer-placeholder-shown:top-6 peer-placeholder-shown:text-white/50 peer-placeholder-shown:text-base  
              peer-focus:top-[3px] peer-focus:text-sm peer-focus:text-white bg-transparent peer-focus:mt-1"
          >
            Email address
          </label>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 md:pt-6 md:pb-14 xl:pt-6 xl:py-12 text-center font-bold rounded md:ml-2 md:h-[52px] hover:bg-red-700 transition text-xl"
        >
          Get Started
        </button>
      </form>
    </section>
  );
};

export default AskQuestions;
