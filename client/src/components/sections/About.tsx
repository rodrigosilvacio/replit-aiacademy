import { motion } from "framer-motion";
import { Users, Globe2, Lightbulb } from "lucide-react";
import logo from "@assets/image_1772191440087.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] transform rotate-3 blur-sm" />
              <div className="relative bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-border">
                <img src={logo} alt="SUCESU SP" className="h-16 w-auto mb-8" />
                <h2 className="text-3xl font-bold mb-6 text-foreground">A casa do profissional de TI em São Paulo</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A SUCESU São Paulo tem sido o pilar da comunidade de tecnologia há décadas. Nossa missão é fomentar a inovação, compartilhar conhecimento de vanguarda e criar conexões verdadeiras entre pessoas e empresas.
                </p>
                <div className="space-y-6 mt-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Globe2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Inovação Contínua</h4>
                      <p className="text-muted-foreground">Trazendo as tendências globais para o ecossistema local.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Networking de Alto Nível</h4>
                      <p className="text-muted-foreground">Conectando decisores, executivos e talentos emergentes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            {/* modern office business tech networking meeting */}
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=1000&fit=crop" 
                alt="Networking e Inovação" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
