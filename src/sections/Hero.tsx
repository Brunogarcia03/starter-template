"use client";

import Button from "@/components/Button";

import designExample1 from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

import cursorYouImage from "@/assets/images/cursor-you.svg";

import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
    const [leftDesingScope, leftDesingAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesingScope, rightDesingAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesingAnimate([
            [leftDesingScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesingScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightDesingAnimate([
            [
                rightDesingScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesingScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
    }, []);

    return (
        <section
            className=" pt-44 pb-24 overflow-x-clip"
            style={{ cursor: `url(${cursorYouImage.src}), auto` }}
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesingScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-32 top-16 hidden lg:block"
                >
                    <Image
                        src={designExample1}
                        draggable="false"
                        alt="Desing example 1 Image"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96"
                >
                    <Pointer name="Andrea" />
                </motion.div>
                <motion.div
                    ref={rightDesingScope}
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    drag
                    className="absolute -right-64 -top-16 hidden lg:block"
                >
                    <Image
                        src={designExample2}
                        draggable="false"
                        alt="Desing example 2 Image"
                    />
                </motion.div>

                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 -top-4"
                >
                    <Pointer name="Bruno" color="red" />
                </motion.div>
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
