import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BrainCircuit } from "lucide-react";
import heroImg from "@assets/Hero_1772481391894.jpg";

export function Hero() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-background">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span>A SUCESU São Paulo apresenta</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
              <span className="text-gradient">SUCESU SP Academy</span>
              <br />
              O Futuro Agora.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Uma imersão prática de 12 horas em Inteligência Artificial para executivos e líderes de TI. Aprenda, construa e aplique IA real no seu negócio — em 3 encontros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.sympla.com.br/evento/sucesu-academy---academia-de-ai-da-sucesu-sp/3340249"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-hero-inscricao"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-primary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
              >
                Inscreva-se Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl font-bold text-foreground bg-white border-2 border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 aspect-square lg:aspect-[4/3] border-4 border-white">
              {/* landing page hero neural network digital abstract representation */}
              <img
                src={heroImg}
                alt="Inteligência Artificial"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001A40]/80 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl flex items-center gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider">Metodologia Exclusiva</p>
                  <p className="text-lg font-bold text-foreground">Imersão Prática Executiva em IA</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
