import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Star } from "lucide-react";

const faqs = [
  {
    question: "O que é a SUCESU SP Academy – Academia de IA?",
    answer: "É uma jornada imersiva em Inteligência Artificial criada pela SUCESU-SP para capacitar executivos e especialistas de TI a liderarem a transformação digital com foco prático e aplicado aos negócios.",
  },
  {
    question: "Qual é o objetivo do programa?",
    answer: "Preparar profissionais para sair do discurso e implementar soluções reais com IA, conectando estratégia, tecnologia e execução dentro das organizações.",
  },
  {
    question: "Para quem é o curso?",
    answerNode: (
      <div>
        <p className="mb-3">O programa é ideal para:</p>
        <ul className="space-y-2">
          {[
            "Executivos de Tecnologia (CIOs, CTOs, Heads)",
            "Especialistas e líderes de TI",
            "Profissionais que desejam aplicar IA de forma prática no ambiente corporativo",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    question: "Quando e onde acontece?",
    answerNode: (
      <div className="space-y-4">
        <div>
          <p className="font-semibold mb-2">Datas e horários:</p>
          <ul className="space-y-1 text-muted-foreground">
            <li>• <strong>18/05 (segunda)</strong> – Online, das 19h às 21h</li>
            <li>• <strong>20/05 (quarta)</strong> – Online, das 19h às 21h</li>
            <li>• <strong>22/05 (sexta)</strong> – Presencial, das 8h30 às 17h30</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-1">Local (presencial):</p>
          <p className="text-muted-foreground">Rua Harmonia, 1250 – Vila Madalena, São Paulo – SP</p>
        </div>
      </div>
    ),
  },
  {
    question: "Qual é o formato do evento?",
    answer: "O programa é híbrido, combinando encontros online (conceito e preparação) com um encontro presencial intensivo (mão na massa). Total de 12 horas de treinamento com foco prático e entregáveis aplicáveis.",
  },
  {
    question: "Como está estruturado o conteúdo?",
    answerNode: (
      <div className="space-y-4">
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
          <p className="font-bold text-primary mb-2">🔹 Bloco 1 – Ambiência IA First (Online)</p>
          <p className="text-sm font-semibold mb-1">Você vai aprender:</p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-3">
            <li>• Engenharia de prompts estruturados</li>
            <li>• Criação de assistentes pessoais e corporativos</li>
            <li>• Uso estratégico de IA para produtividade e automação</li>
          </ul>
          <p className="text-sm font-semibold mb-1">Entregáveis:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Assistente executivo personalizado</li>
            <li>• Playbook de prompts</li>
            <li>• Mapeamento de oportunidades de IA</li>
          </ul>
        </div>
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
          <p className="font-bold text-primary mb-2">🔹 Bloco 2 – Construção de Sistemas com IA (Presencial)</p>
          <p className="text-sm font-semibold mb-1">Foco em desenvolvimento prático:</p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-3">
            <li>• Aplicações web com IA</li>
            <li>• Criação de MVPs</li>
            <li>• Integração com APIs e bases de dados</li>
          </ul>
          <p className="text-sm font-semibold mb-1">Entregáveis:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Sistema funcional aplicado ao seu negócio</li>
            <li>• Documentação da arquitetura</li>
            <li>• Modelo de governança</li>
          </ul>
        </div>
        <div className="bg-primary/5 border border-primary/10 rounded-xl p-4">
          <p className="font-bold text-primary mb-2">🔹 Bloco 3 – Construção de Agentes com IA (Presencial)</p>
          <p className="text-sm font-semibold mb-1">Você irá desenvolver:</p>
          <ul className="text-sm text-muted-foreground space-y-1 mb-3">
            <li>• Agentes semi-autônomos</li>
            <li>• Automações com múltiplas integrações</li>
            <li>• Atendimento automatizado com voz</li>
          </ul>
          <p className="text-sm font-semibold mb-1">Entregáveis:</p>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Agente funcional conectado a APIs</li>
            <li>• Fluxos automatizados com dados persistentes</li>
            <li>• Arquitetura escalável de agentes</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    question: "Qual é o investimento?",
    answerNode: (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
        {[
          { label: "Diretoria e Conselho", price: "R$ 499,00", highlight: false },
          { label: "Associados SUCESU SP", price: "R$ 999,00", highlight: true },
          { label: "Público Externo", price: "R$ 1.499,00", highlight: false },
        ].map((item) => (
          <div
            key={item.label}
            className={`rounded-xl p-4 text-center border ${
              item.highlight
                ? "bg-primary text-white border-primary"
                : "bg-background border-border"
            }`}
          >
            <p className={`text-sm font-medium mb-2 ${item.highlight ? "text-white/80" : "text-muted-foreground"}`}>
              {item.label}
            </p>
            <p className={`text-2xl font-extrabold ${item.highlight ? "text-white" : "text-foreground"}`}>
              {item.price}
            </p>
          </div>
        ))}
      </div>
    ),
  },
  {
    question: "Quem é o palestrante?",
    answerNode: (
      <div>
        <p className="font-bold text-foreground text-lg mb-1">Rodrigo Silva</p>
        <p className="text-primary text-sm font-semibold mb-3">Especialista em IA e Produtos Digitais</p>
        <ul className="space-y-2 text-muted-foreground">
          {[
            "Embaixador de plataformas como Lovable, Cursor, Firecrawl, Runflow e Belake.AI",
            "Conselheiro de inovação e estratégia",
            "Experiência em diversos setores (energia, saúde, varejo, agro, entre outros)",
            "Forte atuação em IA aplicada, governança, dados e transformação digital",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    question: "O que diferencia essa formação?",
    answerNode: (
      <ul className="space-y-2 text-muted-foreground">
        {[
          "Foco em aplicação prática (não é só teoria)",
          "Construção real de soluções durante o curso",
          "Abordagem voltada para negócios",
          "Preparação para escalar IA com governança e segurança",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    question: "Por que participar?",
    answerNode: (
      <ul className="space-y-2 text-muted-foreground">
        {[
          "Aprender IA aplicada de verdade",
          "Criar soluções reais para sua empresa",
          "Se conectar com uma comunidade estratégica",
          "Acelerar a transformação digital do seu negócio",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Star className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
];

function FAQItem({ question, answer, answerNode, index }: {
  question: string;
  answer?: string;
  answerNode?: React.ReactNode;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        open ? "border-primary/30 bg-primary/5" : "border-border bg-card"
      }`}
    >
      <button
        data-testid={`faq-item-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-semibold text-foreground text-base">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-muted-foreground text-base leading-relaxed">
              {answerNode ?? answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 border border-primary/20">
            <HelpCircle className="w-4 h-4" />
            <span>Dúvidas frequentes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tudo o que você precisa saber sobre o SUCESU SP Academy.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              answerNode={faq.answerNode}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
          <a
            href="#contact"
            data-testid="link-faq-contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            Fale conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
}
