import { AvatarCirclesDemo } from "./Avatar";
import { useTheme } from "next-themes";

const Team = () => {
    const { theme } = useTheme();
    return (
        <div className="flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-center">
                Nossa Equipe
            </h2>
            <div className="w-full max-w-md">
                <AvatarCirclesDemo />
            </div>
            <p className="text-gray-900 mt-4 text-sm sm:text-base md:text-lg text-center">
                Fundadora e CEO, 10 anos de experiência em comércio exterior. Durante minha carreira, tive a oportunidade de trabalhar em diferentes segmentos do comércio exterior, o que me proporcionou uma visão ampla e multifacetada do setor. Essas mudanças de área de atuação me permitiram adquirir uma diversidade de conhecimentos e habilidades que são altamente aplicáveis à especialização proposta.
            </p>
        </div>
    );
};

export default Team;
