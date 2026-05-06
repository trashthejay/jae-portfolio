# Jay Chung — Portfolio

Personal portfolio for Jae Ho (Jay) Chung, Senior Product Manager at Verizon.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Web3Forms](https://web3forms.com/) (contact form)
- Deployed on [Vercel](https://vercel.com/)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in your key:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Access key from [web3forms.com](https://web3forms.com/) |

Add the same variable to your Vercel project settings before deploying.

## Deploy

Push to GitHub and connect to Vercel. The build command is `npm run build`.
