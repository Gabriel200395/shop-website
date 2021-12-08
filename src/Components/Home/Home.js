import { useState } from "react";
import "./style.css";
import useHome from "./useHome";

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

  const [produtos, prevSlide, nextSlide, slide] = useHome()

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
