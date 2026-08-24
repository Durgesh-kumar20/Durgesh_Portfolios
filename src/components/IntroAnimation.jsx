import { motion,AnimatePresence } from "framer-motion";
import React, { useEffect, useMemo } from "react"



export default function IntroAnimation({onFinish}){
const greetings = useMemo(()=>[
    "Hello","Bonjour", "Hola", "こんにちは", "안녕하세요",
      "Ciao", "Olá",
      "Merhaba", "Hallo", "Salam","नमस्ते"

],[])
const [index, setIndex] = React.useState(0);
const [visible, setVisible] = React.useState(true);

useEffect(() => {
    if(index < greetings.length - 1){
        const id = setInterval(() => setIndex(index + 1), 180);
        return () => clearInterval(id);
    }else{
        const timeoutId = setTimeout(() => setVisible(false), 400);
        return () => clearTimeout(timeoutId);
    }
    
}, [index, greetings.length]);

    return (
        <AnimatePresence onExitComplete={onFinish}>
            {visible && (
                <motion.div 
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden" 
                initial={{ y:0}} 
                exit={{ y: "-100%", 
                   transition: { 
                    duration: 0, 
                    ease:[0.22, 1, 0.36,1], 
                    }, 
                }}
                >
                    <motion.h1
                        key={index}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.12 }}
                    >
                         {greetings[index]}
                    </motion.h1>
                   
                </motion.div>
            )}
        </AnimatePresence>
    )
}