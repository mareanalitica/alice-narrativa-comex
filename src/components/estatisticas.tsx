import NumberTicker from "./magicui/number-ticker"

const Statistics = () => {
    return (
        <section className="m-16">
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
    )
}

export default Statistics
