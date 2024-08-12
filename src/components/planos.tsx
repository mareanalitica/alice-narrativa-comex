import { AnimatedBeamDemo } from "./parceiros";

export default function Plans() {
    return (
        <div>
            <section className="my-4 sm:my-8 lg:my-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center">
                    Nossos Planos Futuros
                </h2>
                <div className="text-gray-700 mx-4 sm:mx-8 md:mx-16">
                    <p className="mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                        <strong>Parcerias e Colaborações:</strong> Estabelecer novas
                        parcerias com instituições educacionais e órgãos governamentais
                        para ampliar nosso impacto.
                    </p>
                    <p className="mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
                        <strong>Novas Funcionalidades da Plataforma:</strong>{" "}
                        Desenvolvimento de ferramentas avançadas de inteligência de
                        dados e análises preditivas para auxiliar na tomada de decisões
                        estratégicas.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                        <strong>Expansão Internacional:</strong> Planejamos expandir
                        nossas operações para outros países, promovendo uma rede mais
                        ampla de colaboração.
                    </p>
                    <AnimatedBeamDemo />
                </div>
            </section>
        </div>
    );
}
