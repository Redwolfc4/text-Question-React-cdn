/**
 * A functional component that renders either the SubMainQuizContainer
 * or the SubMainResultContainer depending on the given id.
 * @param {string} id - The id of the main container.
 * @returns {JSX.Element} The rendered element.
 */
const Main = ({ id }) => {
  const isQuiz = id === "quiz-container";

  const classMain = isQuiz
    ? ""
    : "grid grid-cols-1 md:grid-cols-2 gap-6 items-center";

  return (
    <main className={classMain}>
      {isQuiz ? <SubMainQuizContainer /> : <SubMainResultContainer />}
    </main>
  );
};
