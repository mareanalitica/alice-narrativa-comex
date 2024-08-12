import BlurIn from "./magicui/blur-in";
import GradualSpacing from "./magicui/gradual-spacing";
import ShineBorder from "./magicui/shine-border";

export default function Sobre() {
    return (
        <section className="my-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
                Visão e Missão
            </h2>

            <div className="grid grid-cols-1 gap-8 mx-auto max-w-4xl md:grid-cols-2">
                <ShineBorder
                    className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-6"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <div className="relative z-10 flex flex-col items-center text-center text-sm sm:text-xl md:text-2xl font-semibold leading-relaxed text-gray-900 dark:text-gray-100">
                        <strong className="text-2xl font-bold text-black dark:text-white">
                            <GradualSpacing text="Visão" />
                        </strong>
                        <p className="mt-4 text-base sm:text-lg md:text-xl">
                            Ser referência em educação e inovação no comércio exterior, promovendo uma comunidade conectada e bem informada.
                        </p>
                    </div>
                </ShineBorder>
                <ShineBorder
                    className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-6"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                >
                    <div className="relative z-10 flex flex-col items-center text-center text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-gray-900 dark:text-gray-100">
                        <strong className="text-2xl font-bold text-black dark:text-white">
                            <GradualSpacing text="Missão" />
                        </strong>
                        <p className="mt-4 text-base sm:text-lg md:text-xl">
                            Facilitar o acesso a dados estratégicos e informações de comércio exterior, promovendo transparência, eficiência e desenvolvimento sustentável. Nosso objetivo é empoderar profissionais e estudantes por meio de recursos educativos avançados e interações colaborativas.
                        </p>
                    </div>
                </ShineBorder>
            </div>
        </section>
    );
}
