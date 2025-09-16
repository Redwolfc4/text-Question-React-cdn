const { useState, useEffect } = React;

/**
 * A functional component that renders the footer of the quiz.
 * It uses the useGLobalContext hook to get the quiz data and current question index.
 * It also uses the useState hook to store the ids of the buttons, the class names of the buttons, and the children of the buttons.
 * The useEffect hook is used to handle the loading of buttons based on the given id.
 * If the id is "quiz-container", it will load the buttons for the quiz.
 * If the id is not "quiz-container", it will load the button for retaking the quiz.
 * @param {string} id - The id of the container.
 * @param {string} className - The class name of the footer.
 * @param {string[]} children - The children of the footer.
 * @return {JSX.Element} The rendered footer.
 */
const Footer = ({ children, className, id, setId }) => {
  const {
    quizData,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setUserAnswers,
  } = useGLobalContext();

  /**
   * Handles the prev button click event. If the current question index is greater than 0, it will decrement the current question index by 1.
   * @return {void}
   */
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };
  /**
   * Jika indeks saat ini sudah mencapai batas akhir array quizData,
   * maka tidak ada perubahan indeks.
   */

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData?.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleFinishQuiz = () => {
    setId("result-container");
  };

  const handleRetakeQuiz = () => {
    setId("quiz-container");
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
  };

  // --- Buttons langsung tanpa state ---
  const buttons =
    id === "quiz-container"
      ? [
          {
            id: "prev-btn",
            label: "Sebelumnya",
            className: `bg-slate-200 hover:bg-slate-300 text-slate-700 ${
              currentQuestionIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`,
            onClick: handlePrevQuestion,
            disabled: currentQuestionIndex === 0,
          },
          {
            id: "next-btn",
            label: "Selanjutnya",
            className: `bg-sky-500 hover:bg-sky-600 text-white ${
              currentQuestionIndex === quizData?.length - 1 ? "hidden" : ""
            }`,
            disabled:
              currentQuestionIndex === quizData?.length - 1 ? true : false,
            onClick: handleNextQuestion,
          },
          {
            id: "submit-btn",
            label: "Selesai & Lihat Hasil",
            className: `bg-emerald-500 hover:bg-emerald-600 text-white ${
              currentQuestionIndex === quizData?.length - 1 ? "" : "hidden"
            }`,
            disabled:
              currentQuestionIndex === quizData?.length - 1 ? false : true,
            onClick: handleFinishQuiz,
          },
        ]
      : [
          {
            id: "retake-btn",
            label: "Ulangi Kuis",
            className:
              "bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-colors sm:w-auto md:w-full",
            disabled: false,
            onClick: handleRetakeQuiz,
          },
        ];

  if (buttons !== null && quizData !== null) {
    return (
      <footer className={className} id={id}>
        {buttons.map((btn) => (
          <MyButton
            key={btn.id}
            id={btn.id}
            className={`${btn.className} ${
              btn.disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={btn.onClick}
            disabled={btn.disabled}
          >
            {btn.label}
          </MyButton>
        ))}
      </footer>
    );
  }
};
