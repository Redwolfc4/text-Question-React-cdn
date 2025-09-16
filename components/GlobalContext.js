const { createContext, useContext, useState, useEffect } = React;

// buat context global
const GlobalContext = createContext();

// buat provider untuk bungkus seluruh aplikasi
const GlobalProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // ambil data sekali
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setQuizData(data);
        setUserAnswers(Array(data.length).fill(null));
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        quizData,
        setQuizData,
        userAnswers,
        setUserAnswers,
        currentQuestionIndex,
        setCurrentQuestionIndex,
      }}
    >
      {/* buat appnya kayak header, main, dan footer */}
      {children}
    </GlobalContext.Provider>
  );
};

const useGLobalContext = () => useContext(GlobalContext);
