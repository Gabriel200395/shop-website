import { useState } from "react";

export default function useHome() {
  const [slide, setSlide] = useState(3);

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

  return [produtos, prevSlide, nextSlide, slide];
}
