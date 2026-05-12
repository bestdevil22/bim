# BIM - Bimal Sports Platform

A full-stack monorepo TypeScript application built with Vite, React, Express, and Drizzle ORM.

## 📁 Project Structure

```
.
├── artifacts/                    # Deployment artifacts
│   ├── api-server/              # Express.js backend API
│   ├── bimal-sports/            # Vite + React frontend
│   └── mockup-sandbox/          # Development sandbox
├── lib/                         # Shared libraries
│   ├── db/                      # Database & ORM (Drizzle)
│   ├── api-zod/                 # Shared Zod schemas
│   ├── api-client-react/        # React API client hooks
│   └── api-spec/                # API specification
├── scripts/                     # Build & utility scripts
└── package.json                 # Root pnpm workspace config
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- pnpm 10.x (enforced via `preinstall` script)
- PostgreSQL database

### Local Development

```bash
# Install dependencies
pnpm install

# Set environment variables
export DATABASE_URL="postgresql://user:password@localhost/bim"
export PORT=8080
export CORS_ORIGIN="http://localhost:5173"

# Run development server
pnpm run dev

# Run type checking
pnpm run typecheck

# Build for production
pnpm run build
```

**Access the app:**
- Frontend: http://localhost:5173
- API: http://localhost:8080/api
- Health check: http://localhost:8080/health

## 🔧 Environment Variables

### Backend (API Server)
```
PORT=8080                                    # API server port (required)
DATABASE_URL=postgresql://user:pass@...    # PostgreSQL connection (required)
NODE_ENV=development|production             # Environment mode
LOG_LEVEL=info|debug|warn|error             # Logger level
CORS_ORIGIN=*|http://localhost:5173         # Allowed CORS origins
```

### Frontend (Vite)
```
PORT=5173                                    # Frontend dev server port
BASE_PATH=/                                  # Public base path for build
REACT_APP_API_URL=/api                      # API base URL
```

### Database
```
DATABASE_URL=postgresql://user:pass@host/db # Required for Drizzle
```

## 📦 NPM Scripts

### Root Workspace
```bash
pnpm run dev          # Start frontend dev server
pnpm run build        # Build all packages + typecheck
pnpm run typecheck    # Run TypeScript type checking
```

### API Server (`artifacts/api-server/`)
```bash
pnpm -F @workspace/api-server run dev       # Start with auto-rebuild
pnpm -F @workspace/api-server run build     # Build for production
pnpm -F @workspace/api-server run start     # Run built server
```

### Frontend (`artifacts/bimal-sports/`)
```bash
pnpm -F @workspace/bimal-sports run dev     # Start Vite dev server
pnpm -F @workspace/bimal-sports run build   # Build for production
pnpm -F @workspace/bimal-sports run serve   # Preview production build
```

### Database (`lib/db/`)
```bash
pnpm -F @workspace/db run push              # Push schema to database
pnpm -F @workspace/db run push-force        # Force push schema
```

## 🗄️ Database Setup

### 1. Create PostgreSQL Database

```bash
createdb bim
```

### 2. Set DATABASE_URL

```bash
export DATABASE_URL="postgresql://user:password@localhost/bim"
```

### 3. Push Schema

```bash
pnpm -F @workspace/db run push
```

### 4. Update Schema

Edit `lib/db/src/schema/index.ts`, then:

```bash
pnpm -F @workspace/db run push
```

## 🌐 API Endpoints

### Health & Status
- `GET /health` - Server health check
- `GET /api/status` - API status

### Examples
- `GET /api/hello` - Example endpoint
- `POST /api/test` - Example POST endpoint

See `lib/api-spec/src/index.ts` for full API specification.

## 🏗️ Architecture

### Backend Stack
- **Framework**: Express.js 5
- **Language**: TypeScript
- **Database**: PostgreSQL + Drizzle ORM
- **Logging**: Pino
- **Build**: esbuild

### Frontend Stack
- **Framework**: React 19
- **Build Tool**: Vite 7
- **UI**: Tailwind CSS + Radix UI
- **State**: TanStack React Query
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod

### Shared Libraries
- **Validation**: Zod
- **ORM**: Drizzle ORM
- **HTTP**: fetch API

## 📦 Monorepo Setup

This project uses **pnpm workspaces** for dependency management:

- Workspace packages defined in `pnpm-workspace.yaml`
- Shared dependencies via `catalog` in workspace config
- Cross-package imports using `workspace:*` protocol
- Type checking via TypeScript project references

### Adding a New Package

1. Create directory under `artifacts/` or `lib/`
2. Add `package.json` with unique name
3. Reference in `pnpm-workspace.yaml`
4. Run `pnpm install`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Import GitHub repo `bestdevil22/bim`

2. **Set Environment Variables**
   - `DATABASE_URL` - PostgreSQL connection string
   - `CORS_ORIGIN` - Your production domain
   - `NODE_ENV=production`

3. **Deploy**
   - Vercel automatically detects `vercel.json`
   - Runs build command: `pnpm run build`
   - Deploys frontend from `artifacts/bimal-sports/dist/public`
   - API available at `<project>.vercel.app/api`

**Configuration**: See `vercel.json`

### Docker

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY . .
RUN corepack enable && corepack prepare pnpm@10 --activate
RUN pnpm install --frozen-lockfile

ENV NODE_ENV=production
ENV PORT=8080

RUN pnpm run build

EXPOSE 8080
CMD ["pnpm", "-F", "@workspace/api-server", "run", "start"]
```

### Railway/Render

1. Set `DATABASE_URL` environment variable
2. Set build command: `pnpm run build`
3. Set start command: `pnpm -F @workspace/api-server run start`

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 8080
lsof -i :8080 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Kill process on port 5173
lsof -i :5173 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

### pnpm Lock File Issues
```bash
# Clear cache and reinstall
pnpm store prune
pnpm install --frozen-lockfile
```

### Database Connection Errors
```bash
# Verify PostgreSQL is running
psql -U postgres -h localhost

# Check DATABASE_URL format
# Should be: postgresql://user:password@host:port/database
```

### Build Failures
```bash
# Clean and rebuild
pnpm run typecheck  # Check for TypeScript errors
pnpm run build      # Full build with type checking
```

### Missing Dependencies
```bash
# Reinstall all workspace dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 📝 Contributing

1. **Type Safety**: All code must pass TypeScript type checking
2. **Formatting**: Use Prettier (configured via workspace)
3. **Monorepo**: Use `pnpm -F <package>` for package-specific commands
4. **Environment**: Copy `.env.example` to `.env` for local development

## 📚 Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [Drizzle ORM](https://orm.drizzle.team)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Zod Validation](https://zod.dev)
- [TanStack Query](https://tanstack.com/query)

## 📄 License

MIT
