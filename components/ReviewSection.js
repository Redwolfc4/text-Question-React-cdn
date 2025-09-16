const ReviewSection = () => {
  // ambil soal, kunci jawaban dan jawaban yang dipilih
  const { quizData, userAnswers } = useGLobalContext();

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div id="review-section" className="mt-8 pt-6 border-t border-slate-200">
      <h2 className="text-xl font-bold text-slate-700 mb-4 text-left">
        Tinjau Jawaban
      </h2>
      <div id="review-container" className="space-y-4 text-left">
        {/* looping quizdata ambil  user answernya lalu cek dengan jawaban benarnya */}
        {quizData.map((question, index) => {
          const isCorrect = userAnswers[index] === question.correct;
          const correctAnswerText =
            question.options[optionLabels.indexOf(userAnswers[index])];

          return (
            <div
              key={index}
              className={`p-4 rounded-lg border ${
                isCorrect
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              {/* pertanyaan */}
              <p className="font-semibold text-slate-800">
                {index + 1}. {question.question}
              </p>
              {/* end */}
              <div className="mt-3 text-sm">
                <ChoiceResult
                  textFirst="Jawaban Anda"
                  className={
                    isCorrect
                      ? "text-green-700 font-bold ms-2"
                      : "text-red-700 font-bold ms-2"
                  }
                >
                  {userAnswers[index]
                    ? `${userAnswers[index]}. ${correctAnswerText}`
                    : "Tidak dijawab"}
                </ChoiceResult>

                {!isCorrect && (
                  <ChoiceResult
                    textFirst="Jawaban Anda"
                    className="text-green-700 font-bold ms-2"
                  >
                    {`${question.correct}. ${
                      question.options[optionLabels.indexOf(question.correct)]
                    }`}
                  </ChoiceResult>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
