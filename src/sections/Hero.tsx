import Button from "@/components/Button";

import designExample1 from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={designExample1} alt="Desing example 1 Image" />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={designExample2} alt="Desing example 2 Image" />
                </div>
                <div className="absolute left-56 top-96">
                    <Pointer name="Andrea" />
                </div>
                <div className="absolute right-80 -top-4">
                    <Pointer name="Brain" color="red" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7,5 millones de dólares recaudados
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Diseño impactante, creado sin esfuerzo.
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Las herramientas de diseño no deberían ralentizarte. Layers
                    combina potentes funciones con una interfaz intuitiva que te
                    mantiene en tu flujo creativo.
                </p>
                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Ingresa tu Email"
                        className="bg-transparent px-4 md:flex-1"
                    />
                    <Button
                        variant="primary"
                        size="sm"
                        type="submit"
                        className="whitespace-nowrap"
                    >
                        Registrarse
                    </Button>
                </form>
            </div>
        </section>
    );
}
