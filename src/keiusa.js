(() => {
  let csvData = new Array();
  let srt = new XMLHttpRequest();

  srt.open("GET", "./src/rank.csv", false);
  srt.send(null);
  let rank = srt.responseText.split(/\r\n|\n/);

  //関数を呼び出す変数
  let button = document.getElementById("button");
  const selectKeiusa = document.querySelector(".keiusa");
  const selectManabi = document.querySelector(".manabi");
  const selectSpot = document.querySelector(".spot");
  let button2 = document.getElementById("button2");

  //デフォルトの経験値

  let kyukyoku = 2200;
  const def = document.querySelector(".def");
  def.textContent = `${kyukyoku}`;
  //設定した最終的な経験値
  let kyukyokuSum = 2200;
  const final = document.querySelector(".final");
  final.textContent = `${kyukyokuSum}`;

  let sum = 0;
  let m = 1;
  let s = 1;

  const clickedButton = (e) => {
    e.preventDefault();

    // 2つの入力フォームの値を取得
    let numForm1 = document.getElementById("numForm1").value;
    // 0から1500までのランクを取得
    if (numForm1 > 1500 || numForm1 < 0) {
      alert("0から1500までの数字を入力してください");
      return;
    }
    let numForm2 = document.getElementById("numForm2").value;
    // 0から1500までのランクを取得
    if (numForm2 > 1500 || numForm2 < 0) {
      alert("0から1500までの数字を入力してください");
      return;
    }

    // 2つの数値を足す
    sum = rank[numForm2] - rank[numForm1];

    // 足し算の結果を別の入力フォームに表示
    const result = document.querySelector(".result");
    result.textContent = `${sum}`;
  };

  const clickedButton2 = (e) => {
    e.preventDefault();
    kyukyokuSum = kyukyoku * m * s;
    final.textContent = `${kyukyokuSum}`;

    const countResult = document.querySelector(".countResult");
    countResult.textContent = `${Math.round(sum / kyukyokuSum)}回`;
  };

  const SelectKeiusa = (e) => {
    if (e.target.value == "one") {
      kyukyoku = 66000;
    } else if (e.target.value == "two") {
      kyukyoku = 132000;
    } else if (e.target.value == "three") {
      kyukyoku = 198000;
    } else {
      kyukyoku = 2200;
    }
    kyukyokuSum = kyukyoku;
    def.textContent = `${kyukyoku}`;
  };

  const SelectManabi = (e) => {
    if (e.target.value == "l") {
      m = 1.6;
    } else if (e.target.value == "el") {
      m = 1.65;
    } else {
      m = 1;
    }
  };

  const SelectSpot = (e) => {
    if (e.target.value == "low") {
      s = 1.25;
    } else if (e.target.value == "normal") {
      s = 1.5;
    } else if (e.target.value == "high") {
      s = 1.75;
    } else {
      s = 1;
    }
  };

  // ボタンをクリックした時の処理
  button.addEventListener("click", (e) => clickedButton(e));
  button2.addEventListener("click", (e) => clickedButton2(e));
  //けいうさの数
  selectKeiusa.addEventListener("change", (e) => SelectKeiusa(e));

  //学びの力
  selectManabi.addEventListener("change", (e) => SelectManabi(e));

  //モンスポット
  selectSpot.addEventListener("change", (e) => SelectSpot(e));
})();
