import Tag from "@/components/Tag";

const text = `Estás compitiendo para crear un trabajo excepcional, pero las herramientas de diseño tradicionales te ralentizan con una complejidad innecesaria y curvas de aprendizaje pronunciadas.`;

export default function Introduction() {
    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Presentando Layers</Tag>
                </div>
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                    <span>Tu proceso creativo merece algo mejor.</span>{" "}
                    <span className="text-white/15">{text}</span>
                    <span className="text-lime-400 block">
                        Para eso construimos Layers.
                    </span>
                </div>
            </div>
        </section>
    );
}
