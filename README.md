# Plena Derma — Site

Site institucional da **Plena Derma**, clínica de estética facial e corporal na Asa Norte, Brasília.

## Stack

- [Astro 6](https://astro.build) (SSG) + vanilla CSS com design tokens
- GSAP + Lenis (instalados; motion avançado em evolução)
- Deploy: Vercel

## Rodando localmente

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # build de produção em dist/
```

## Arquitetura

```text
src/
├── layouts/BaseLayout.astro     # <head>, fontes, Schema.org
├── components/                  # Header, Footer, WhatsappFloat
├── lib/
│   ├── clinic.ts                # dados da unidade (fonte única)
│   └── treatments.ts            # as 5 frentes de cuidado (copy, FAQ, inclusões)
├── sections/                    # seções editoriais reutilizáveis
└── pages/
    ├── index.astro              # Home
    ├── [slug].astro             # 5 páginas de cuidado (via treatments.ts)
    ├── sobre.astro
    └── contato.astro
```

## Regras de conteúdo

- Toda conversão via WhatsApp com mensagem "Vim do site" (rastreador de CRM) — usar `whatsappUrl()` de `lib/clinic.ts`, nunca hardcode.
- Sem preços no código, sem promessa de resultado, sem travessão no copy.
- Pendências pré-go-live (responsável técnico, horários, domínio) marcadas com `[CONFIRMAR]` no código.
