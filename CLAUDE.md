# CLAUDE.md

> AI rules file — อ่านก่อนทำงานทุกครั้ง
> ใช้ได้กับ: Claude / Claude Code → `CLAUDE.md`
> Copy ไปใช้กับ tool อื่น:
>   Cursor      → `.cursorrules`
>   Copilot     → `.github/copilot-instructions.md`
>   GPT Codex   → `AGENTS.md`
>   Windsurf    → `.windsurfrules`

---

## Project Overview

**ชื่อโปรเจ็ค**: BMC Platform

**คำอธิบาย**:
เว็บแอปสำหรับการเรียนการสอนในชั้นเรียน ให้นักศึกษาทำ Business Model Canvas (BMC)
แบบ real-time collaboration ในกลุ่ม อาจารย์สร้างห้องเรียนแล้วแชร์ Room Code
นักศึกษาเข้าร่วม เลือกกลุ่ม และกรอก BMC 9 ช่องพร้อมกันแบบ real-time
เห็นว่าใครกำลังพิมพ์ช่องไหน อาจารย์ดู canvas ทุกกลุ่มผ่าน Projector View
และ export PDF บันทึกลง Storage เมื่อเสร็จ

**Tech Stack**:

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 14 App Router |
| Styling | Tailwind CSS v3 |
| State | Zustand |
| Backend / DB | Supabase (PostgreSQL + Realtime) |
| Auth | Supabase Auth |
| Deploy | Vercel |
| CI/CD | GitHub Actions |
| Monitoring | Sentry |

---

## Architecture

<!-- อธิบาย layer และ data flow ของ project -->

```
Page / Component
    ↓
hooks/
    ↓
stores/ (state only)   หรือ   services/ (business logic)
    ↓
lib/db (database client)
    ↓
Supabase (PostgreSQL + Realtime)
```

### ห้ามทำ

- ❌ ห้าม component เรียก database โดยตรง — ต้องผ่าน hook หรือ service
- ❌ ห้ามเขียน business logic ใน store — store เก็บ state เท่านั้น
- ❌ ห้ามใช้ `any` ใน TypeScript

### ต้องทำเสมอ

- ✅ ต้อง handle error ทุก async operation
- ✅ ต้อง import type จาก `types/` เสมอ
- ✅ ต้อง cleanup subscription ใน useEffect return

---

## File Structure

```
bmc_project/
├── src/
│   ├── app/                    # Next.js pages (App Router)
│   │   ├── (auth)/             # auth routes group
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (main)/             # main app routes group
│   │   │   ├── dashboard/      # teacher dashboard
│   │   │   ├── join/           # student join room
│   │   │   ├── lobby/          # room lobby
│   │   │   ├── canvas/         # BMC canvas editor
│   │   │   └── projector/      # teacher projector view
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/             # UI components
│   │   ├── ui/                 # shared: Button, Input, Card, Modal
│   │   └── features/           # feature-specific components
│   │       ├── canvas/         # BMC grid, cell editor
│   │       ├── room/           # room card, room code input
│   │       └── auth/           # login form, register form
│   ├── stores/                 # Zustand state
│   │   ├── auth.store.ts
│   │   ├── room.store.ts
│   │   └── canvas.store.ts
│   ├── services/               # business logic
│   │   ├── auth.service.ts
│   │   ├── room.service.ts
│   │   └── canvas.service.ts
│   ├── hooks/                  # custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useRoom.ts
│   │   ├── useCanvas.ts
│   │   └── useRealtime.ts
│   ├── lib/                    # third-party clients
│   │   ├── supabase.ts         # Supabase client
│   │   └── utils.ts            # cn(), formatDate(), etc.
│   └── types/                  # TypeScript definitions
│       ├── auth.types.ts
│       ├── room.types.ts
│       └── canvas.types.ts
├── public/                     # static assets
├── .env.local                  # environment variables (git-ignored)
├── .env.example                # example env template
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

---

## Naming Conventions

| ประเภท | Convention | ตัวอย่าง |
|--------|-----------|---------|
| Component | PascalCase | `UserCard.tsx` |
| Hook | camelCase + use | `useAuth.ts` |
| Store | camelCase + .store | `auth.store.ts` |
| Service | camelCase + .service | `auth.service.ts` |
| Type/Interface | PascalCase | `interface UserProfile {}` |
| Page (Next.js) | lowercase | `page.tsx` |
| Util function | camelCase | `formatDate()` |

---

## Database Schema

```sql
-- profiles (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  display_name TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('teacher', 'student')),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- rooms
CREATE TABLE rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  teacher_id UUID NOT NULL REFERENCES profiles(id),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- groups
CREATE TABLE groups (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  room_id UUID NOT NULL REFERENCES rooms(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- group_members
CREATE TABLE group_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES profiles(id),
  joined_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(group_id, user_id)
);

-- canvas_cells (BMC 9 blocks)
CREATE TABLE canvas_cells (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id UUID NOT NULL REFERENCES groups(id) ON DELETE CASCADE,
  cell_key TEXT NOT NULL,  -- e.g. 'key_partners', 'value_propositions', etc.
  content TEXT DEFAULT '',
  updated_by UUID REFERENCES profiles(id),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(group_id, cell_key)
);
```

### BMC 9 Cell Keys

```
key_partners | key_activities | key_resources
value_propositions
customer_relationships | channels | customer_segments
cost_structure | revenue_streams
```

### กฎการ Query

- ใช้ `upsert` แทน `insert` สำหรับ `canvas_cells`
- filter Realtime subscription ด้วย `group_id` เสมอ อย่า subscribe ทั้ง table
- ใช้ RLS (Row Level Security) กำกับทุก table

---

## Key Patterns

### Data Fetching Pattern

```typescript
export async function fetchRoom(roomId: string): Promise<Room | null> {
  try {
    const { data, error } = await supabase
      .from('rooms')
      .select('*')
      .eq('id', roomId)
      .single()
    if (error) throw error
    return data
  } catch (err) {
    console.error('[fetchRoom]', err)
    return null
  }
}
```

### Error Handling Pattern

```typescript
// Success
return { data: result, error: null }

// Fail
return { data: null, error: message }
```

### State Management Pattern

```typescript
interface CanvasState {
  cells: CanvasCell[]
  setCells: (cells: CanvasCell[]) => void
  updateCell: (cellKey: string, content: string) => void
  reset: () => void
}
```

---

## Component Rules

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}
```

- ทุก component ต้องรับ `className` prop
- ใช้ Server Component ถ้าไม่มี `useState` / `useEffect`
- แยก client component ด้วย `'use client'` เฉพาะที่จำเป็น

---

## Styling Rules

- ใช้ `cn()` จาก `lib/utils.ts` เสมอเมื่อ merge Tailwind classes
- ใช้ CSS variable สำหรับ theme colors ไม่ hardcode hex
- ใช้ responsive breakpoints: `sm:640px`, `md:768px`, `lg:1024px`

---

## TypeScript Rules

- ❌ ห้ามใช้ `any`
- ❌ ห้ามใช้ `as` เพื่อ bypass type — ใช้ type guard แทน
- ✅ ต้องมี return type สำหรับ function ที่ export
- ✅ ต้อง import type จาก `types/` ไม่เขียน inline type ใน component
- ✅ ใช้ `satisfies` keyword เมื่อต้องการ type check โดยไม่ widen type

---

## Authentication & Authorization

- Auth ใช้ Supabase Auth (email + password)
- Role: `'teacher'` | `'student'`
- Teacher สร้างห้อง, ดู dashboard, ดู projector view
- Student เข้าห้อง, เลือกกลุ่ม, แก้ไข canvas

### Route Permissions

| Route | ต้อง login | Role ที่เข้าได้ |
|-------|-----------|---------------|
| `/login` | ❌ | ทุกคน |
| `/register` | ❌ | ทุกคน |
| `/dashboard` | ✅ | teacher |
| `/join` | ✅ | student |
| `/lobby/:roomId` | ✅ | teacher, student |
| `/canvas/:groupId` | ✅ | teacher, student (ในกลุ่ม) |
| `/projector/:roomId` | ✅ | teacher |

---

## Environment Variables

```bash
# Public — ใช้ได้ทั้ง client/server
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_APP_URL=

# Private — server only ห้ามใช้ใน client component
SUPABASE_SERVICE_ROLE_KEY=
```

> ⚠️ ห้าม commit `.env.local` — ต้องอยู่ใน `.gitignore`
> แชร์ค่าให้ทีมผ่าน private channel เท่านั้น

---

## Git Workflow

### Branch Strategy

```
main        ← production (auto-deploy)
dev         ← staging (merge จาก feat branches)
feat/xxx    ← feature branches
fix/xxx     ← bug fix branches
```

### Commit Message Format

```
feat:     เพิ่ม feature ใหม่
fix:      แก้ bug
chore:    งาน setup / config / dependency
refactor: refactor code ไม่เพิ่ม/ลด feature
docs:     แก้ documentation
```

### Pull Request Rules

- PR ต้อง target `dev` ห้าม PR ตรงไป `main`
- ต้องผ่าน CI ก่อน merge
- ต้องมีคนอื่น review อย่างน้อย 1 คน

---

## What NOT to Generate

- ❌ อย่าใช้ `pages/` directory — ใช้ App Router เท่านั้น
- ❌ อย่าใช้ `getServerSideProps` หรือ `getStaticProps`
- ❌ อย่า subscribe Realtime โดยไม่มี filter
- ❌ อย่าสร้าง API Route สำหรับ CRUD ธรรมดา — ใช้ Server Actions

---

## Quick Reference

```
Component → hook → service → lib/db (ไม่ข้ามขั้น)
Store = state เท่านั้น ไม่มี async logic
Server Component สำหรับ fetch | Client สำหรับ interactive
ห้าม any | ห้าม as bypass | ต้องมี error handling
upsert สำหรับ canvas_cells | filter subscription ด้วย group_id
Role: teacher (dashboard, projector) | student (join, canvas)
```
