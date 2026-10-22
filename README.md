# SUCESU SP Academy - Landing Page

Landing page para o programa de capacitação em Inteligência Artificial da SUCESU São Paulo.

## Sobre o Projeto

Esta é uma aplicação web full-stack que serve como landing page para o SUCESU SP Academy, um programa de imersão em IA voltado para executivos e profissionais de TI. A aplicação permite que visitantes conheçam o programa e se cadastrem para receber novidades.

## Funcionalidades

- Página inicial com informações sobre o treinamento
- Seções: Hero, Sobre o Treinamento, Preços, Palestrante, Sobre a SUCESU SP, FAQ e Formulário de Contato
- Formulário de captura de leads (nome e e-mail)
- API REST para persistência de leads em banco de dados PostgreSQL
- Design responsivo (mobile e desktop)
- Navegação suave com âncoras para cada seção

## Stack Tecnológica

### Frontend
- **React 18** com TypeScript
- **Vite** para build e dev server
- **Tailwind CSS** para estilização
- **Radix UI** para componentes acessíveis
- **Framer Motion** para animações
- **React Hook Form** com Zod para validação de formulários
- **TanStack React Query** para gerenciamento de estado assíncrono
- **Wouter** para roteamento

### Backend
- **Node.js** com **Express 5**
- **Drizzle ORM** para acesso ao banco de dados
- **PostgreSQL** como banco de dados
- **Zod** para validação de schemas

## Estrutura de Pastas

```
/
├── client/               # Código do frontend
│   ├── index.html        # HTML principal
│   ├── public/           # Arquivos estáticos públicos
│   └── src/
│       ├── components/   # Componentes React
│       │   ├── layout/   # Componentes de layout (Footer)
│       │   ├── sections/ # Seções da landing page
│       │   └── ui/       # Componentes de UI (shadcn/ui)
│       ├── hooks/        # Custom hooks
│       ├── lib/          # Utilitários e configurações
│       ├── pages/        # Páginas da aplicação
│       ├── App.tsx       # Componente raiz
│       └── main.tsx      # Entry point
├── server/               # Código do backend
│   ├── index.ts          # Entry point do servidor
│   ├── routes.ts         # Rotas da API
│   ├── db.ts             # Conexão com banco de dados
│   ├── storage.ts        # Camada de persistência
│   ├── static.ts         # Servir arquivos estáticos
│   └── vite.ts           # Integração com Vite em dev
├── shared/               # Código compartilhado
│   ├── schema.ts         # Schemas do banco (Drizzle)
│   └── routes.ts         # Definições de rotas da API
├── script/               # Scripts de build
│   └── build.ts          # Script de build para produção
└── attached_assets/      # Imagens e assets
```

## Instalação

```bash
npm install
```

## Configuração

A aplicação requer a seguinte variável de ambiente:

| Variável       | Descrição                          |
|----------------|------------------------------------|
| `DATABASE_URL` | String de conexão PostgreSQL       |
| `PORT`         | Porta do servidor (padrão: 5000)   |

## Execução

### Desenvolvimento

```bash
npm run dev
```

O servidor será iniciado e servirá tanto a API quanto o frontend com hot reload.

### Build para Produção

```bash
npm run build
```

### Executar em Produção

```bash
npm start
```

### Verificação de Tipos

```bash
npm run check
```

### Sincronizar Schema do Banco

```bash
npm run db:push
```

## API

### POST /api/leads

Cria um novo lead.

**Request Body:**
```json
{
  "name": "string",
  "email": "string"
}
```

**Response (201):**
```json
{
  "id": "number",
  "name": "string",
  "email": "string",
  "createdAt": "string"
}
```

## Licença

MIT
