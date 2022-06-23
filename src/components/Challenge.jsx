export const Challenge = () => {
  return (
    <div id="challenge" className="challenge">
      <div className="container">
        <div className="challenge-contents">
          <h2>新しいページを追加してみる</h2>
          <p className="description">まずは Presentational Components なページを作成してみる</p>
          <div className="challenge-contents__gallery">
            <figure><img src={require("../images/Kawanabe_Kyosai's_-The_lazy_one_in_the_middle-.jpg")} /><figcaption>河鍋暁斎</figcaption></figure>
            <figure><img src={require("../images/Kyosai_Funayurei.jpg")} /><figcaption>河鍋暁斎</figcaption></figure>
            <figure><img src={require("../images/Kyosai_Hundred_Pictures_2.jpg")} /><figcaption>河鍋暁斎</figcaption></figure>
            <figure><img src={require("../images/Kyosai_Mount_Akiba.jpg")} /><figcaption>河鍋暁斎</figcaption></figure>
          </div>
          <small>
          <a href="https://en.wikipedia.org/wiki/en:Kawanabe_Ky%C5%8Dsai">Kawanabe Kyōsai</a> creator QS:P170,Q2838030, <a href="https://commons.wikimedia.org/wiki/File:Kawanabe_Kyosai%27s_%22The_lazy_one_in_the_middle%22.jpg">Kawanabe Kyosai's "The lazy one in the middle"</a>, marked as public domain, more details on <a href="https://commons.wikimedia.org/wiki/Template:PD-Japan">Wikimedia Commons</a>
          </small>
        </div>
      </div>
    </div>
  );
};
