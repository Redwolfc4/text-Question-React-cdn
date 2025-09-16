const Result = () => {
  <div
    id="results-container"
    class="hidden w-full max-w-3xl bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center"
  >
    <h1 class="text-2xl sm:text-3xl font-bold text-slate-700 mb-2">
      Hasil Kuis Anda
    </h1>
    <p class="text-slate-500 mb-6">Berikut adalah ringkasan performa Anda.</p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div class="chart-container">
        <canvas id="results-chart"></canvas>
      </div>
      <div>
        <p class="text-5xl font-bold text-sky-500" id="score-percentage"></p>
        <p class="text-slate-600 font-medium mt-1">Skor Akhir</p>
        <div class="mt-4 flex justify-center gap-4 text-left">
          <div class="p-4 bg-green-100 rounded-lg w-1/2">
            <p
              class="text-2xl font-bold text-green-700"
              id="correct-answers-count"
            ></p>
            <p class="text-sm font-medium text-green-600">Jawaban Benar</p>
          </div>
          <div class="p-4 bg-red-100 rounded-lg w-1/2">
            <p
              class="text-2xl font-bold text-red-700"
              id="wrong-answers-count"
            ></p>
            <p class="text-sm font-medium text-red-600">Jawaban Salah</p>
          </div>
        </div>
      </div>
    </div>

    <div id="review-section" class="mt-8 pt-6 border-t border-slate-200">
      <h2 class="text-xl font-bold text-slate-700 mb-4 text-left">
        Tinjau Jawaban
      </h2>
      <div id="review-container" class="space-y-4 text-left"></div>
    </div>

    <footer class="mt-8 pt-6 border-t border-slate-200">
      <button
        id="retake-btn"
        class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto"
      >
        Ulangi Kuis
      </button>
    </footer>
  </div>;
};
