"use client";
import { useState, useEffect } from "react";
import Globe from "@/components/magicui/globe";
import { Button } from "../components/ui/button";
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
import WordFadeIn from "@/components/magicui/word-fade-in";
import FlipText from "@/components/magicui/flip-text";
import { AnimatedBeamDemo } from "@/components/parceiros";
import { OrbitingCirclesDemo } from "@/components/orbit";
import { AvatarCirclesDemo } from "@/components/Avatar";
import NumberTicker from "@/components/magicui/number-ticker";

export default function Home() {
  const [globeVisible, setGlobeVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);
  const [scrollContentVisible, setScrollContentVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.003; // Ajuste conforme necessário

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
      description: "",
      href: "/",
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
      description: "",
      href: "/",
      cta: "Grade de eventos",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Workshops",
      description: "",
      href: "/",
      cta: "Como funciona",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "Parcerias e Colaborações",
      description:
        "Estabelecer novas parcerias com instituições educacionais e órgãos governamentais para ampliar nosso impacto.",
      href: "/",
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
      <div
        className={`transition-opacity duration-250 ease-in-out ${globeVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        {/* <div className="relative flex h-100vh w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-80 pb-80 pt-8 md:pb-60 md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Narrativa comex
          </span>
        </div> */}
        <Globe className="top-40" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>

      <div
        className={`transition-opacity duration-3000 ease-in-out delay-300 ${scrollContentVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="container mx-auto p-8">
          {/* Seção de Introdução */}
          <section className="text-center my-16">
            <TypingAnimation
              className="text-4xl font-bold text-black dark:text-white"
              text="O que é a Narrativa Comex?"
            />
            <div>
              Narrativa Comex é uma iniciativa que visa promover o desenvolvimento da educação e a carreira em comércio exterior através de um ambiente colaborativo e inovador. A plataforma se
              destaca pela criação de grupos de estudo, workshops e webinars,
              onde são discutidos e registrados procedimentos e práticas do
              setor.
            </div>
          </section>

          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>

          {/* Seção de Visão e Missão */}
          <section className="my-16">
            <h2 className="text-3xl font-semibold mb-4">Visão e Missão</h2>
            <div className="text-gray-700">
              <p className="mb-4">
                <strong>Visão:</strong> Ser referência em educação e inovação no
                comércio exterior, promovendo uma comunidade conectada e bem
                informada.
              </p>
              <p>
                <strong>Missão:</strong> Facilitar o acesso a dados estratégicos
                e informações de comércio exterior, promovendo transparência,
                eficiência e desenvolvimento sustentável. Nosso objetivo é
                empoderar profissionais e estudantes por meio de recursos
                educativos avançados e interações colaborativas.
              </p>
            </div>
          </section>

          {/* Seção de Estatísticas */}
          <section className="my-16">
            <h2 className="text-3xl font-semibold mb-4">
              Profissionais de COMEX
            </h2>
            <div className="text-gray-700">
              <p className="mb-4">

                <strong className="whitespace-pre-wrap text-2xl font-medium tracking-tighter text-black dark:text-white">
                  <NumberTicker value={23} />%
                </strong> possuem formação específica.
              </p>
              <p className="mb-4">
                <strong className="whitespace-pre-wrap text-2xl font-medium tracking-tighter text-black dark:text-white">
                  <NumberTicker value={77} />%
                </strong> não possuem formação específica.
              </p>
              <p className="mb-4">
                <strong className="whitespace-pre-wrap text-2xl font-medium tracking-tighter text-black dark:text-white">
                  <NumberTicker value={65} />%
                </strong> dos cursos disponíveis estão desatualizados.
              </p>
              <p className="mb-4">
                <strong className="whitespace-pre-wrap text-2xl font-medium tracking-tighter text-black dark:text-white">
                  <NumberTicker value={58} />%
                </strong> dos profissionais afirmam ter formação
                teórica insuficiente.
              </p>
              <p>
                <strong className="whitespace-pre-wrap text-2xl font-medium tracking-tighter text-black dark:text-white">
                  <NumberTicker value={80} />%
                </strong> dos profissionais têm participação limitada
                em eventos e feiras de comércio exterior.
              </p>
            </div>
          </section>

          {/* Seção Nossa Equipe */}
          <section className="my-16">
            <h2 className="text-3xl font-semibold mb-4">Nossa Equipe</h2>
            <span>
              Fundadora e CEO, 10 anos de
              experiência em comércio exterior. Durante minha carreira, tive a
              oportunidade de trabalhar em diferentes segmentos do comércio
              exterior, o que me proporcionou uma visão ampla e multifacetada
              do setor. Essas mudanças de área de atuação me permitiram
              adquirir uma diversidade de conhecimentos e habilidades que são
              altamente aplicáveis à especialização proposta.
            </span>
            <OrbitingCirclesDemo></OrbitingCirclesDemo>
          </section>

          {/* Seção Nossos Planos Futuros */}
          <section className="my-16">
            <h2 className="text-3xl font-semibold mb-4">
              Nossos Planos Futuros
            </h2>
            <div className="text-gray-700">
              <p className="mb-4">
                <strong>Parcerias e Colaborações:</strong> Estabelecer novas
                parcerias com instituições educacionais e órgãos governamentais
                para ampliar nosso impacto.
              </p>
              <p className="mb-4">
                <strong>Novas Funcionalidades da Plataforma:</strong>{" "}
                Desenvolvimento de ferramentas avançadas de inteligência de
                dados e análises preditivas para auxiliar na tomada de decisões
                estratégicas.
              </p>
              <p>
                <strong>Expansão Internacional:</strong> Planejamos expandir
                nossas operações para outros países da América Latina,
                promovendo uma rede mais ampla de colaboração.
              </p>
              <AnimatedBeamDemo></AnimatedBeamDemo>
            </div>
          </section>

          {/* Seção Projetos e Iniciativas */}
          <section className="my-16">
            <h2 className="text-3xl font-semibold mb-4">
              Projetos e Iniciativas
            </h2>
            <div className="text-gray-700">
              <p className="mb-4">
                <strong>Grupos de Estudo:</strong> Organizados regularmente para
                discutir tendências, desafios e soluções no comércio exterior.
                Oferecem uma plataforma para troca de conhecimentos e
                networking.
              </p>
              <p className="mb-4">
                <strong>Workshops:</strong> Sessões práticas que abordam temas
                específicos, proporcionando habilidades técnicas e estratégicas
                essenciais.
              </p>
              <p>
                <strong>Webinars:</strong> Apresentações online conduzidas por
                especialistas da indústria, oferecendo insights atualizados e
                oportunidades de aprendizado contínuo.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center my-16">
            <Button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              Junte-se a Nós
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}
