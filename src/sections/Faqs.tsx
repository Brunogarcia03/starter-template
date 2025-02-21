import Tag from "@/components/Tag";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question:
            "¿En qué se diferencia Layers de otras herramientas de diseño?",
        answer: "A diferencia de las herramientas de diseño tradicionales, Layers prioriza la velocidad y la simplicidad sin sacrificar la potencia. Nuestra interfaz inteligente se adapta a su flujo de trabajo, reduciendo los clics y manteniéndolo en su flujo creativo.",
    },
    {
        question: "¿Existe una curva de aprendizaje?",
        answer: "Layers está diseñado para ser intuitivo desde el primer día. La mayoría de los diseñadores son productivos en cuestión de horas, no de semanas. También proporcionamos tutoriales interactivos y documentación completa para ayudarle a comenzar.",
    },
    {
        question: "¿Cómo se maneja el control de versiones?",
        answer: "Cada cambio en las capas se guarda y versiona automáticamente. Puede revisar el historial, restaurar versiones anteriores y crear versiones con nombre para hitos importantes.",
    },
    {
        question: "¿Puedo trabajar sin conexión?",
        answer: "¡Sí! Layers incluye un modo fuera de línea sólido. Los cambios se sincronizan automáticamente cuando vuelves a estar en línea, para que puedas seguir trabajando en cualquier lugar.",
    },
    {
        question: "¿Cómo maneja Layers la colaboración?",
        answer: "Layers está diseñado para la colaboración. Puede invitar a miembros del equipo a sus proyectos, compartir comentarios y trabajar juntos en tiempo real.",
    },
];

export default function Faqs() {
    const selectedIndex = 0;

    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Preguntas frecuentes</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    ¿Preguntas? tenemos{" "}
                    <span className="text-lime-400">respuestas</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <div
                                className={twMerge(
                                    "mt-6",
                                    selectedIndex !== faqIndex && "hidden"
                                )}
                            >
                                <p className="text-white/50">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
