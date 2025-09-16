const ProgressBar = ({ children, id }) => {
  const { quizData, currentQuestionIndex } = useGLobalContext();
  const progressPercentage =
    ((currentQuestionIndex + 1) / quizData?.length) * 100;
  return (
    <>
      {id === "quiz-container" && (
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <div
            id="progress-bar"
            className={`bg-sky-500 h-2.5 rounded-full transition-all duration-300 w-[${progressPercentage}%]`}
          ></div>
        </div>
      )}
    </>
  );
};
