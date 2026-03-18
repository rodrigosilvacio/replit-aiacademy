import { motion } from "framer-motion";
import { CheckCircle2, Zap, Star, ArrowRight } from "lucide-react";

const SYMPLA_URL = "https://www.sympla.com.br/evento/sucesu-academy---academia-de-ai-da-sucesu-sp/3340249";

const plans = [
  {
    id: "diretoria",
    label: "Diretoria e Conselho",
    price: "R$ 499",
    period: "/ participante",
    description: "Para diretores e conselheiros SUCESU SP.",
    highlight: false,
    badge: null,
    perks: [
      "Acesso aos 3 encontros",
      "Material de apoio digital",
      "Certificado de conclusão",
      "Projeto final aplicado",
    ],
  },
  {
    id: "associados",
    label: "Associados SUCESU SP",
    price: "R$ 999",
    period: "/ participante",
    description: "Exclusivo para associados da SUCESU São Paulo.",
    highlight: true,
    badge: "Mais popular",
    perks: [
      "Acesso aos 3 encontros",
      "Material de apoio digital",
      "Certificado de conclusão",
      "Projeto final aplicado",
      "Acesso à comunidade exclusiva",
    ],
  },
  {
    id: "externo",
    label: "Público Externo",
    price: "R$ 1.499",
    period: "/ participante",
    description: "Para profissionais não associados.",
    highlight: false,
    badge: null,
    perks: [
      "Acesso aos 3 encontros",
      "Material de apoio digital",
      "Certificado de conclusão",
      "Projeto final aplicado",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 border border-primary/20">
            <Zap className="w-4 h-4" />
            <span>Investimento</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Escolha seu <span className="text-gradient">Plano</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Acesso completo ao SUCESU SP Academy — imersão prática em IA com entregáveis reais para o seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
                plan.highlight
                  ? "bg-primary border-primary shadow-2xl shadow-primary/30 scale-105"
                  : "bg-white border-border hover:border-primary/30 hover:shadow-xl"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-white text-xs font-bold shadow-lg">
                  <Star className="w-3 h-3" />
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${plan.highlight ? "text-white/70" : "text-primary"}`}>
                  {plan.label}
                </p>
                <div className="flex items-end gap-1 mb-2">
                  <span className={`text-5xl font-extrabold ${plan.highlight ? "text-white" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.highlight ? "text-white/60" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm ${plan.highlight ? "text-white/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.highlight ? "text-white" : "text-primary"}`} />
                    <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-foreground"}`}>{perk}</span>
                  </li>
                ))}
              </ul>

              <a
                href={SYMPLA_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`button-pricing-${plan.id}`}
                className={`inline-flex justify-center items-center gap-2 w-full px-6 py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-white/90 shadow-lg"
                    : "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                }`}
              >
                Inscreva-se
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Vagas limitadas. Inscrições e pagamento pelo Sympla.
        </motion.p>
      </div>
    </section>
  );
}
