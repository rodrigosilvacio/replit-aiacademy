import logo from "@assets/image_1772191440087.png";
import { Linkedin, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#00122e] pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg p-2 inline-block mb-6">
              <img src={logo} alt="SUCESU SP Logo" className="h-10 w-auto" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Promovendo a excelência em Tecnologia da Informação e impulsionando a transformação digital no estado de São Paulo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">Sobre a SUCESU</a></li>
              <li><a href="#course" className="text-white/60 hover:text-white transition-colors">SUCESU SP Academy</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Eventos</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Seja um Associado</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors">LGPD</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:contato@sucesusp.org.br" className="hover:text-white transition-colors">
                  contato@sucesusp.org.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} SUCESU São Paulo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
