"use client";

import CTAButton from "../layout/CTAButton";import Image from "next/image";

const Fold4Testimonials = () => {
  const handleClick = () => {
    alert("CTA Button Clicked!");
  };
  return (
    <div className="w-screen py-16 max-sm:py-8 px-40 max-sm:px-6 flex justify-center items-center">

      <div className="pl-20 max-sm:pl-4 flex flex-col justify-center items-center space-y-2">
        <p className="max-w-96 text-xl max-sm:text-xs font-bold text-center">
          O que Nossos Clientes Dizem
        </p>
        <p className="max-w-96 pt-8 max-sm:pt-4 text-2xl max-sm:text-xs font-bold text-center">
          Experiências Reais de Quem Já Foi Atendido por Nossa Equipe
        </p>
        <p className="max-w-96 pt-4 max-sm:pt-2 text-xl max-sm:text-xs text-center">
        Experiências Reais de Quem Já Foi Atendido por Nossa Equipe
        </p>
        <p className="max-w-96 pt-4 max-sm:pt-2 text-xl max-sm:text-xs text-center">
          <CTAButton text="Fale com um advogado" onClick={handleClick} />
        </p>
      </div>
      
      <div className="max-w-80 max-sm:max-w-20 flex flex-col justify-center items-center space-y-12">
        <Image
          src="/images/worried-man.png"
          alt="menu logo"
          className="dark"
          width={640}
          height={825}
          priority
        />
      </div>
    </div>
  );
};

export default Fold4Testimonials;
