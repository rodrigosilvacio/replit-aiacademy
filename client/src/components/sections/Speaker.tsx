import { motion } from "framer-motion";
import { Star, Briefcase, Globe, Shield, Mic2 } from "lucide-react";

const credentials = [
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    text: "Embaixador de plataformas como Replit, Cursor e Firecrawl",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-primary" />,
    text: "Conselheiro de inovação e estratégia em múltiplos setores",
  },
  {
    icon: <Star className="w-5 h-5 text-primary" />,
    text: "Experiência em energia, saúde, varejo, agro e serviços financeiros",
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    text: "Forte atuação em IA aplicada, governança, dados e transformação digital",
  },
];

export function Speaker() {
  return (
    <section id="palestrante" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 border border-primary/20">
            <Mic2 className="w-4 h-4" />
            <span>Palestrante</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Aprenda com quem <span className="text-gradient">vive na prática</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O treinamento é conduzido por um dos principais especialistas em IA aplicada ao mundo corporativo no Brasil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-dark rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-56 h-56 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-4xl font-black text-white select-none">
                RS
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-1">Rodrigo Silva</h3>
              <p className="text-accent font-semibold text-lg mb-6">Especialista em IA e Produtos Digitais</p>
              <p className="text-white/75 leading-relaxed">
                Rodrigo alia visão estratégica e profundo conhecimento técnico para ajudar organizações a transformar IA em resultados reais. Referência no ecossistema de ferramentas de IA generativa, atua como embaixador e conselheiro em projetos de alto impacto em diversos setores da economia brasileira.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Credenciais</p>

            <ul className="space-y-4" role="list">
              {credentials.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-4 bg-background rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all duration-300 list-none"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-foreground font-medium leading-snug pt-2">{item.text}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
