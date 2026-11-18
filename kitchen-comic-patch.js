/* 草本小廚房｜漫畫風格補丁
   放在 index.html 原本 <script> 之後載入即可，不需要修改原本的程式碼。 */
(function () {
  "use strict";

  const heartsHTML = (score, total = 5) => {
    const n = Math.round(score / 100 * total);
    return '<div class="hearts">' +
      Array.from({ length: total }, (_, i) =>
        '<b class="' + (i < n ? "" : "off") + '">♥</b>').join("") +
      "</div>";
  };

  const originalRender = renderGame;

  renderGame = function () {
    originalRender();

    const g = current();
    const stage = document.querySelector("#stage");
    if (!g || !stage) return;

    const r = recipeOf(g);

    // 新訂單：ROUND 對話框
    if (game.phase === "order") {
      stage.innerHTML =
        '<div class="stage-inner">' +
          '<div class="round-bubble">' +
            "<strong>ROUND " + (game.index + 1) + "</strong>" +
            "<span>" + r.name + "</span>" +
          "</div>" +
          '<div class="stage-illustration">' + foodSVG(r.shape) + "</div>" +
        "</div>";
    }

    // 單張訂單成績：愛心
    if (game.phase === "result") {
      const score = game.scores[game.scores.length - 1];
      const el = stage.querySelector(".result-score");
      if (el) el.insertAdjacentHTML("beforebegin", heartsHTML(score));
    }

    // 總成績：每道菜一排愛心
    if (game.phase === "summary") {
      stage.querySelectorAll("li").forEach((li, i) => {
        li.insertAdjacentHTML("beforeend", heartsHTML(game.scores[i]));
        li.style.listStyle = "none";
      });
    }
  };
})();
