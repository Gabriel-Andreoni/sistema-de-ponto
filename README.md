# Sistema de Ponto

Aplicação web em desenvolvimento para registro de ponto. Atualmente, o projeto oferece telas de cadastro e acesso, uma interface inicial com relógio em tempo real e áreas reservadas para informações do usuário e registros de jornada.

## Tecnologias

| Tecnologia | Versão no lockfile | Uso no projeto |
| --- | --- | --- |
| Next.js | 16.2.10 | Aplicação web com App Router e endpoint de autenticação. |
| React / React DOM | 19.2.4 | Componentes e interface; componentes interativos usam Client Components. |
| TypeScript | 5.9.3 | Tipagem da aplicação, com modo estrito habilitado. |
| Tailwind CSS | 4.3.3 | Estilização utilitária, integrado pelo plugin PostCSS. |
| Prisma ORM / Prisma Client | 7.10.0 | Modelagem e acesso aos dados; o client é gerado em `generated/prisma`. |
| SQLite + better-sqlite3 | `@prisma/adapter-better-sqlite3` 7.10.0 | Banco local acessado pelo adapter SQLite do Prisma. |
| Better Auth | 1.7.7 | Cadastro e login por e-mail e senha, sessões e configuração de provedor Google. |
| ESLint | 9 | Verificação estática pelo script `npm run lint`. |

O projeto também usa `next/font/google` para carregar as fontes Oswald e Black Ops One.

## Como as peças se conectam

- **Interface:** o App Router organiza a página inicial e as telas de cadastro e login. Tailwind CSS 4 cuida dos estilos.
- **Autenticação:** Better Auth é configurado com o adapter Prisma. O endpoint Next.js encaminha as requisições de autenticação, e o cliente web é usado pelos formulários.
- **Persistência:** o Prisma Client usa o adapter `better-sqlite3`. O schema SQLite contém os modelos `User`, `Session`, `Account` e `Verification`, usados pela autenticação.
- **Configuração do Prisma:** `prisma7.config.ts` carrega as variáveis de ambiente e aponta para o schema e as migrações.

## Requisitos

- Node.js e npm
- Credenciais OAuth do Google se for habilitar o acesso Google

## Configuração local

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Crie um arquivo `.env` na raiz do projeto. O `.gitignore` ignora arquivos `.env*`:

   ```dotenv
   DATABASE_URL="file:./dev.db"
   GOOGLE_CLIENT_ID=""
   GOOGLE_CLIENT_SECRET=""
   ```

   `DATABASE_URL` aponta para o banco SQLite local. Preencha as credenciais Google com valores do seu aplicativo OAuth quando for usar esse provedor.

3. Aplique as migrações e gere o Prisma Client:

   ```bash
   npx prisma migrate deploy --config prisma7.config.ts
   npx prisma generate --config prisma7.config.ts
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

   A aplicação ficará disponível em [http://localhost:3000](http://localhost:3000).

## Comandos disponíveis

| Comando | Ação |
| --- | --- |
| `npm run dev` | Inicia o servidor Next.js em desenvolvimento. |
| `npm run build` | Gera a build de produção. |
| `npm run start` | Inicia a build de produção já gerada. |
| `npm run lint` | Executa o ESLint. |
| `npx prisma migrate dev --config prisma7.config.ts` | Cria e aplica uma migração durante o desenvolvimento. |
| `npx prisma generate --config prisma7.config.ts` | Regenera o Prisma Client após alterações no schema. |

## Estado atual

O projeto ainda está em fase inicial. A autenticação por e-mail e senha está conectada ao Better Auth. O provedor Google está configurado no servidor, mas o botão Google nas telas ainda não chama o fluxo OAuth. A página principal mostra um relógio local; os painéis de usuário e registros estão vazios, e os botões de bater e editar ponto ainda não registram dados. O schema atual não contém um modelo para marcações de ponto.

O `package.json` não define um script de testes automatizados.