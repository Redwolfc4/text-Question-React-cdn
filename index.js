const { useState, useEffect } = React;

function MyApp() {
  //buat state untuk cek id dan menentukan classnya
  const [id, setId] = useState("quiz-container"); // untuk ambil quiz

  return (
    <div
      id={id}
      className={`w-full max-w-3xl bg-white p-6 sm:p-8 rounded-2xl shadow-lg ${
        id === "quiz-container" ? "" : "text-center"
      }`}
    >
      {/* header */}
      <Header id={id}>
        <ProgressBar id={id} />
      </Header>
      {/* end header */}

      {/* main */}
      <Main id={id} />
      {/* end main */}

      {/* pengecekan id bahwasannya jika id bukan "quiz-container" maka tampilkan ReviewSection */}
      {id !== "quiz-container" && <ReviewSection />}
      {/* end */}

      {/* footer */}
      <Footer
        className={`mt-8 pt-6 border-t border-slate-200 ${
          id === "quiz-container" ? "flex justify-between items-center" : ""
        }`}
        id={id}
        setId={setId}
      />
      {/* end footer */}
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <GlobalProvider>
    <MyApp />
  </GlobalProvider>
);
