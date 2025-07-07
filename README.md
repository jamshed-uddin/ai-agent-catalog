### Agent Index - AI Agent Catalog app

- live demo: [https://agentindex.vercel.app/](https://agentindex.vercel.app/)

## Tech stack

- Next js
- Shadcn UI
- Auth js
- Tailwind CSS

## Core features

- #### Authentication

  - Auth js integration for Google sign in

- #### AI Agent catalog

  - Grid view of AI Agents.

- #### Catalog filter
  - Search and filter option.

## Enhancements

- Next js for fast, file-based routing, SEO friendly web pages.
- Shadcn ui components.
- Tailwind CSS for fast and consistent styling.
- Auth js for authentication and session management.
- Framer motion for animation
- Loading skeleton UI.

## Run Locally

**Clone the repository**

```bash
git clone https://github.com/jamshed-uddin/ai-agent-catalog.git

```

**Change directory**

```bash
cd ai-agent-catalog
```

**Install packages**

```bash
npm install
```

**Set environment variables**

```env
AUTH_GOOGLE_ID= google auth id
AUTH_GOOGLE_SECRET= google auth secret
AUTH_SECRET= random secret string
```

**Start the app**

```bash
npm run dev
```

## Dependencies

```json
"dependencies": {
    "@heroicons/react": "^2.2.0",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-slot": "^1.2.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.525.0",
    "motion": "^12.23.0",
    "next": "15.3.5",
    "next-auth": "^5.0.0-beta.29",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwind-merge": "^3.3.1",
    "use-debounce": "^10.0.5"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "15.3.5",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.3.5",
    "typescript": "^5"
  }
```
