import "./App.css";

function App() {
  const name = "Nazar";
  const welcomeText = "Ласкаво просимо до нашого сайту!";
  const image = {
    src: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    alt: "man",
  };
  const webSite = {
    name: "Google",
    url: "https://www.google.com/?hl=uk&zx=1753982697710&no_sw_cr=1",
  };
  const a = 545;
  const b = 785;
  const sum = a + b;
  const color = ["Червоний", "Синій", "Зелений"];
  return (
    <div className="App">
      <h1>{name}</h1>
      <p>{welcomeText}</p>
      <img src={image.src} alt={image.alt} />
      <a href={webSite.url}>{webSite.name}</a>
      <p>{sum}</p>
      <ul>
        {color.map((color, i) => (
          <li key={i}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
