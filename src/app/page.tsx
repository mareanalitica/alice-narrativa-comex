"use client";
import { useState, useEffect } from "react";
import Globe from "@/components/magicui/globe";
import RetroGrid from "@/components/magicui/retro-grid";
import {
  BellIcon,
  CalendarIcon,
  GlobeIcon,
  InstagramLogoIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import TypingAnimation from "@/components/magicui/typing-animation";
import Statistics from "@/components/estatisticas";
import Team from "@/components/equipe";
import Plans from "@/components/planos";
import Sobre from "@/components/sobre";
import Footer from "@/components/footer";

export default function Home() {
  const [globeVisible, setGlobeVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [scrollContentVisible, setScrollContentVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.003;

      setGlobeVisible(scrollPosition === 0);
      setContentVisible(scrollPosition > 0);
      setScrollContentVisible(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const features = [
    {
      Icon: RocketIcon,
      name: "Grupos de estudo",
      description: "Organizados regularmente para discutir tendências, desafios e soluções no comércio exterior. Oferecem uma plataforma para troca de conhecimentos e networking.",
      href: "https://api.whatsapp.com/send/?phone=558197319372",
      cta: "Acessar",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InstagramLogoIcon,
      name: "Nas redes",
      description: "",
      href: "https://www.instagram.com/narrativa_comex/",
      cta: "Seguir",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Webinar",
      description: "Apresentações online conduzidas por especialistas da indústria, oferecendo insights atualizados e oportunidades de aprendizado contínuo.",
      href: "https://api.whatsapp.com/send/?phone=558197319372",
      cta: "Grade de eventos",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Workshops",
      description: "Sessões práticas que abordam temas específicos, proporcionando habilidades técnicas e estratégicas essenciais.",
      href: "https://api.whatsapp.com/send/?phone=558197319372",
      cta: "Como funciona",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "Parcerias e Colaborações",
      description:
        "Estabelecer novas parcerias com instituições educacionais e órgãos governamentais para ampliar nosso impacto.",
      href: "https://api.whatsapp.com/send/?phone=558197319372",
      cta: "Quero ser parceiro",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="absolute inset-0 h-full">
        <RetroGrid />
      </div>
      {/* Seção do Globo */}
      <div
        className={`transition-opacity duration-250 w-full ease-in-out ${globeVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background px-4 pb-16 pt-6 md:pb-40 md:shadow-xl">
          <Globe className="top-20 md:top-40" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
      </div>

      {/* Seção do Texto */}
      <div
        className={`transition-opacity duration-3000 ease-in-out delay-300 ${scrollContentVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="container mx-auto p-3 sm:p-4">
          <section className="text-center my-6 sm:my-10 lg:my-12 px-2 sm:px-4">
            <span className="block text-3xl sm:text-5xl font-semibold leading-tight text-black dark:text-white mb-4">
              Narrativa comex
            </span>
            <TypingAnimation
              className="text-base sm:text-xl font-bold text-black dark:text-white"
              text="O que é?"
            />
            <span className="block mt-4 sm:mt-6 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-md mx-auto text-gray-700 dark:text-gray-300">
              Narrativa Comex é uma iniciativa que visa promover o desenvolvimento da educação e a carreira em comércio exterior através de um ambiente colaborativo e inovador. A plataforma se destaca pela criação de grupos de estudo, workshops e webinars, onde são discutidos e registrados procedimentos e práticas do setor.
            </span>
          </section>
        </div>
      </div>

      <div
        className={`transition-opacity duration-3000 ease-in-out delay-300 ${scrollContentVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="container mx-auto p-3 sm:p-4">
          <BentoGrid className="grid-cols-1 mx-4 sm:mx-8 md:mx-16 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>

          {/* Seção de Visão e Missão */}
          <Sobre></Sobre>

          {/* Seção de Estatísticas */}
          <Statistics />

          {/* Seção Nossa Equipe */}
          <Team />

          {/* Seção Nossos Planos Futuros */}
          <Plans />
        </div>
        <Footer />
      </div>
    </div>
  );
}
