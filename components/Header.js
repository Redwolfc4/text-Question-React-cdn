const Header = ({ children, id }) => {
  // ambil pertanyaan yang sudah diload dari global
  const { quizData, userAnswers, currentQuestionIndex } = useGLobalContext();
  console.log(id);
  return (
    <header className="mb-6">
      <div
        className={`flex ${
          id === "quiz-container"
            ? "justify-between"
            : "flex-col justify-center"
        } items-center mb-2`}
      >
        <Heading1>
          {id === "quiz-container"
            ? "Kuis: Java Collection Framework"
            : "Hasil Kuis Anda"}
        </Heading1>
        <p
          id={id === "quiz-container" ? "progress-text" : ""}
          className={`text-slate-500 ${
            id === "quiz-container" ? "text-sm font-medium" : "mb-6"
          }`}
        >
          {id === "quiz-container"
            ? `${currentQuestionIndex + 1}/${quizData?.length}`
            : "Berikut adalah ringkasan performa Anda."}
        </p>
      </div>

      {children ?? ""}
    </header>
  );
};
