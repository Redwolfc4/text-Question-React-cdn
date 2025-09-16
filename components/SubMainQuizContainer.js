const SubMainQuizContainer = () => {
  // ambil pertanyaan yang sudah diload dari global
  const { quizData, userAnswers, setUserAnswers, currentQuestionIndex } =
    useGLobalContext();

  if (!quizData) {
    return <p className="text-gray-500">Loading...</p>;
  }

  const selectAnswer = (optionKey) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionKey;
    setUserAnswers(newAnswers);
  };

  const optionLabels = ["A", "B", "C", "D"]; // console.log(quizData);

  return (
    <>
      <h2
        id="question-text"
        className="text-lg font-semibold mb-6 min-h-[56px]"
      >
        {currentQuestionIndex + 1}. {quizData[currentQuestionIndex].question}
      </h2>
      <div
        id="options-container"
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {quizData[currentQuestionIndex].options.map((option, index) => {
          const optionKey = optionLabels[index];
          const isSelected = userAnswers[currentQuestionIndex] === optionKey;

          return (
            <Option
              onClick={() => selectAnswer(optionKey)}
              key={index}
              optionKey={optionKey}
              isSelected={isSelected}
            >
              {option}
            </Option>
          );
        })}
      </div>
    </>
  );
};
