# Harmonize+ | Site público

Landing page institucional separada da aplicação de gestão, construída com Next.js, React, Tailwind CSS, componentes no padrão shadcn/ui e ícones Lucide.

## Desenvolvimento

```bash
npm install
npm run dev -- --port 3001
```

O site abre em `http://localhost:3001`. Os botões de teste e login levam ao aplicativo em `http://localhost:3000` por padrão.

## Configuração para produção

Defina `NEXT_PUBLIC_HARMONIZE_APP_URL` com a origem pública da aplicação logada, sem barra final. Exemplo:

```text
NEXT_PUBLIC_HARMONIZE_APP_URL=https://seu-app.exemplo.com
```

Os links legais do rodapé ficam disponíveis quando `NEXT_PUBLIC_TERMS_URL` e `NEXT_PUBLIC_PRIVACY_URL` forem definidos. Sem esses endereços, o rodapé mostra os documentos como em preparação.

O aplicativo atual apresenta o cadastro de teste na página de login. Por isso, os botões de teste apontam para `/login`, onde a pessoa pode escolher **Crie sua conta grátis**. O teste disponível no app dura 3 dias.

Os nomes dos planos e sua apresentação são ilustrativos; recursos, preços e direitos de acesso não são atribuídos a nenhum plano. Substitua-os pelos dados comerciais oficiais antes de publicar a oferta.

## Verificação

```bash
npm run typecheck
npm run lint
npm run build
```

As seções ficam em `src/components/landing`. As prévias do produto usam dados fictícios e não acessam informações da aplicação.
