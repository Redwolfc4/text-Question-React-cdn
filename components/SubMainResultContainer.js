const SubMainResultContainer = () => {
  const { useState, useEffect, useRef } = React;

  const { quizData, userAnswers } = useGLobalContext();

  const [correctAnswersAmmount, setCorrectAnswersAmmount] = useState(0);

  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // cek quizData sudah render
  if (!quizData) {
    return <p className="text-gray-500">Loading...</p>;
  }

  useEffect(() => {
    quizData?.forEach((question) => {
      if (question.correct === userAnswers[quizData.indexOf(question)]) {
        setCorrectAnswersAmmount((correct) => correct + 1);
      }
    });
  }, []);

  // load chart
  useEffect(() => {
    // cek dulu sudah render atau belum
    if (!chartRef.current) {
      return;
    }

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstanceRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Benar", "Salah"],
        datasets: [
          {
            data: [
              correctAnswersAmmount,
              quizData?.length - correctAnswersAmmount,
            ], //right and wrong
            backgroundColor: ["#10b981", "#ef4444"],
            borderColor: ["#ffffff"],
            borderWidth: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
      },
    });
  }, [correctAnswersAmmount, quizData]);

  return (
    <>
      <div class="chart-container">
        <canvas ref={chartRef} id="results-chart"></canvas>
      </div>
      <div>
        {/* score */}
        <p
          class="text-5xl font-bold text-sky-500"
          id="score-percentage"
        >{`${Math.round(
          (correctAnswersAmmount / quizData?.length) * 100
        )}%`}</p>
        {/* end */}
        <p class="text-slate-600 font-medium mt-1">Skor Akhir</p>
        <div class="mt-4 flex justify-center gap-4 text-left">
          <div class="p-4 bg-green-100 rounded-lg w-1/2">
            <p
              class="text-2xl font-bold text-green-700"
              id="correct-answers-count"
            >
              {correctAnswersAmmount}
            </p>
            <p class="text-sm font-medium text-green-600">Jawaban Benar</p>
          </div>
          <div class="p-4 bg-red-100 rounded-lg w-1/2">
            <p class="text-2xl font-bold text-red-700" id="wrong-answers-count">
              {quizData?.length - correctAnswersAmmount}
            </p>
            <p class="text-sm font-medium text-red-600">Jawaban Salah</p>
          </div>
        </div>
      </div>
    </>
  );
};
