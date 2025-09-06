# fichaclin — Starter (Vercel)

Este pacote contém um esqueleto funcional para migrar o FichaClin para Vercel usando:
- Next.js 14 (App Router)
- Prisma + Turso (libSQL)
- NextAuth (e-mail magic link opcional)

## Passo a passo
1) Crie um repositório no GitHub e envie estes arquivos.
2) No Turso, crie um banco e copie TURSO_DATABASE_URL e TURSO_AUTH_TOKEN.
3) Na Vercel, importe o repositório e crie as variáveis de ambiente:
   - TURSO_DATABASE_URL
   - TURSO_AUTH_TOKEN
   - DATABASE_URL (use a string SQLite de file para dev, e em prod deixe Prisma apontar via Turso Data Proxy; opção simples: 
     setar DATABASE_URL="file:./dev.db" apenas para local e usar o Turso no servidor via libsql em runtime)
   - NEXTAUTH_SECRET
   - NEXTAUTH_URL=https://sesmturmes.com
   - RESEND_API_KEY (opcional)
   - EMAIL_FROM=guilherme.marajatintas@gmail.com
4) Rode migrations localmente (opcional) ou gere client no build: `npm run build` já faz prisma generate.
5) Deploy. 

## Estrutura
- prisma/schema.prisma — modelos compatíveis com o app atual.
- app/api/* — adicione aqui os endpoints (route.ts) equivalentes aos seus RPCs.
- lib/db.ts — inicialização do Prisma Client.

## Próximos passos
- Implementar endpoints para: submissions, appointments, service-requests, aso documents.
- Integrar uploads (Vercel Blob) e e-mails (Resend) conforme necessidade.
