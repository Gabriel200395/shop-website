import { useState } from "react";
import "./style.css";

const Conteudo = ({ active, tamanhos, produto, preco }) => {
  const [count, setCount] = useState(1);

  if (!active) return null;
  return (
    <div className="conteudo-slider">
      <div>
        <h2>{produto}</h2>
        <strong>${preco}</strong>
      </div>
      <div>
        <ul>
          {tamanhos.map((t) => (
            <li key={t} role="menuitem">
              {t}
            </li>
          ))}
        </ul>
        <div className="buttons">
          <button onClick={() => setCount((prev) => prev - 1)}>-</button>{count}
          <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        </div>
        <button className="card">add to Cart</button>
      </div>
    </div>
  );
};

function Home() {
  const [slide, setSlide] = useState(0);

  const produtos = [
    {
      id: "1",
      produto: "women",
      preco: 1000,
      tamanhos: ["s", "m", "l"],
    },

    {
      id: "2",
      produto: "men",
      preco: 2000,
      tamanhos: ["s", "m", "l"],
    },

    {
      id: "3",
      produto: "shoes",
      preco: 3000,
      tamanhos: ["s", "m", "l"],
    },
    {
      id: "4",
      produto: "brand sweatshirt",
      preco: 4000,
      tamanhos: ["s", "m", "l"],
    },
  ];

  function nextSlide() {
    if (slide < produtos.length - 1) {
      setSlide((prev) => prev + 1);
    }
  }

  function prevSlide() {
    if (produtos.length - 1 >= slide) {
      setSlide((prev) => prev - 1);
    }

    if (slide <= 0) {
      setSlide(0);
    }
  }

  return (
    <div className="home-c">
      <ul className="dropdown-c">
        <li aria-label="women" className={`${produtos[slide].produto === "women" ? "menu-item": ""}`}>Women</li>
        <li aria-label="men" className={`${produtos[slide].produto === "men" ? "menu-item": ""}`}>Men</li>
        <li aria-label="shoes" className={`${produtos[slide].produto === "shoes" ? "menu-item": ""}`}>Shoes</li>
        <li aria-label="brand-sweatshirt" className={`${produtos[slide].produto === "brand sweatshirt" ? "menu-item": ""}`}>Brand</li>
      </ul>
      <div className="slider">
        <div>
          <div className="next">
            <button onClick={nextSlide}>next</button>
            <i className="fas fa-arrow-right" />
          </div>

          {produtos.map((i, index) => (
            <Conteudo key={i.id} active={slide === index} {...i} />
          ))}

          <div className={`prev ${produtos[slide].produto === "brand sweatshirt" && "prev-brand"}`}>
            <i className="fas fa-arrow-left" />
            <button onClick={prevSlide}>prev</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
