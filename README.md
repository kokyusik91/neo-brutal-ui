# @kokyusik91/neo-brutal-ui

Radix UI + CVA 기반 네오 브루탈리즘 디자인 키트.

## Features

- **28개 컴포넌트** — Primitives, Layout, Feedback, Data Display, Composite
- **Radix UI** — 접근성 보장된 headless 프리미티브 기반
- **CVA** — 타입 안전한 variant 관리
- **Tailwind CSS** — 커스텀 프리셋으로 디자인 토큰 통합
- **Tree-shakable** — ESM/CJS 듀얼 빌드

## Install

```bash
pnpm add @kokyusik91/neo-brutal-ui
```

`.npmrc`에 레지스트리 설정:

```
@kokyusik91:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## Setup

### Tailwind CSS

`tailwind.config.ts`에 프리셋 추가:

```ts
import { neoBrutalPreset } from "@kokyusik91/neo-brutal-ui/preset";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/@kokyusik91/neo-brutal-ui/dist/**/*.js",
  ],
  presets: [neoBrutalPreset],
};
```

### Font (optional)

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## Components

### Primitives

| Component | Base | Description |
|-----------|------|-------------|
| `Button` | Native | 버튼 (filled/outline/ghost, 7 colors, 3 sizes) |
| `IconButton` | Native | 정사각형 아이콘 버튼 |
| `Badge` | Native | 라벨/태그 |
| `Input` | Native | 텍스트 입력 (에러 상태 지원) |
| `Textarea` | Native | 멀티라인 입력 |
| `Avatar` | Radix | 프로필 이미지 + 폴백 |
| `Toggle` | Radix | 토글 버튼 |
| `Checkbox` | Radix | 체크박스 (라벨 지원) |
| `RadioGroup` | Radix | 라디오 그룹 |
| `Select` | Radix | 드롭다운 셀렉트 |

### Layout

| Component | Description |
|-----------|-------------|
| `Card` | 카드 컨테이너 (shadow, padding variants) |
| `Container` | 반응형 max-width 래퍼 |
| `Divider` | 구분선 (라벨 지원) |

### Feedback

| Component | Base | Description |
|-----------|------|-------------|
| `Dialog` | Radix | 모달 다이얼로그 |
| `Tooltip` | Radix | 툴팁 |
| `Toast` | Radix | 토스트 알림 (success/error/warning/info) |

### Data Display

| Component | Description |
|-----------|-------------|
| `List` | 리스트 (plain/bordered/card) |
| `Table` | 데이터 테이블 (striped 지원) |

### Composite

`PricingCard` · `LoginCard` · `SocialPost` · `WeatherCard` · `ProductCard` · `SettingsMenu` · `AlarmCard` · `MessageBubble` · `ProfileCard` · `BlogPostCard`

## Usage

```tsx
import { Button, Card, Badge } from "@kokyusik91/neo-brutal-ui";

function App() {
  return (
    <Card shadow="lg" padding="lg">
      <Badge color="accent">New</Badge>
      <h2>Hello Neo Brutal!</h2>
      <Button color="primary" onClick={() => alert("clicked!")}>
        Click me
      </Button>
    </Card>
  );
}
```

## Design Tokens

| Token | Value |
|-------|-------|
| `nb-primary` | `#FF6B6B` |
| `nb-secondary` | `#4ECDC4` |
| `nb-accent` | `#FFE66D` |
| `nb-success` | `#51CF66` |
| `nb-warning` | `#FF922B` |
| `nb-danger` | `#FF6B6B` |
| `nb-info` | `#339AF0` |
| `nb-bg` | `#FFF8E7` |
| `nb-text` | `#1A1A2E` |
| Border | `3px solid #1A1A2E` |
| Shadow (md) | `4px 4px 0px 0px #1A1A2E` |
| Radius | `12px` |
| Font | `Space Grotesk` |

## Development

```bash
pnpm install
pnpm dev          # watch mode build
pnpm storybook    # http://localhost:6006
pnpm test         # vitest
pnpm build        # production build
```

## License

MIT
