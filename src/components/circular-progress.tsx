"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const CircularProgressBar = () => {
  const size = 300;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [percentage, setPercentage] = useState(0); // Estado da porcentagem

  // Animação do progresso usando react-spring
  const springProps = useSpring({
    progress: percentage,
    from: { progress: 0 },
    config: { duration: 1000 },
  });

  useEffect(() => {
    // Função que atualiza a porcentagem a cada 30 segundos
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev + 1 >= 100) {
          clearInterval(interval); // Para o intervalo ao atingir 100%
          return 100;
        }
        return prev + 1; // Incrementa a porcentagem em 1%
      });
    }, 20000); // Atualiza a cada 30 segundos (30000ms)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  const strokeDashoffset = springProps.progress.interpolate(
    (value) => circumference - (value / 100) * circumference
  );

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-lg md:text-2xl text-gray-700 ">
          Porcentagem de energia das máquinas:{" "}
        </h1>
      </div>
      <div className="relative flex items-center justify-center">
        <svg width={size} height={size} className="block">
          <circle
            stroke="#e0e0df"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <animated.circle
            stroke="#6bff50"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute">
          <p className=" text-2xl font-bold">
            {Math.round(percentage)}%
          </p>
        </div>
      </div>
    </>
  );
};

export default CircularProgressBar;
