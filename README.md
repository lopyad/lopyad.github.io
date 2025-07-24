# Lopyad Page

환영합니다! 이 프로젝트는 Astro와 React를 기반으로 구축된 개인 웹사이트 및 블로그입니다. 클린하고 현대적인 디자인을 목표로 하며, 블로그 게시물, 동적 사이드바, 다크/라이트 테마 전환 기능 등을 포함하고 있습니다.

## ✨ 주요 기능

*   **Astro + React:** Astro의 빠른 성능과 React의 유연한 UI 개발을 결합합니다.
*   **블로그 기능:** 마크다운 기반의 블로그 게시물 관리 및 표시.
*   **동적 사이드바:** 현재 경로에 따라 블로그 게시물 목록 또는 주요 탐색 링크를 표시합니다.
*   **플로팅 제목 툴팁:** 사이드바에서 긴 블로그 제목이 잘릴 경우, 마우스 오버 시 전체 제목을 보여주는 플로팅 UI.
*   **다크/라이트 테마:** 사용자가 선호하는 테마를 선택하고 저장할 수 있는 기능.
*   **GitHub Pages 배포:** GitHub Actions를 이용한 자동화된 배포 워크플로우.

## 🚀 기술 스택

*   **프레임워크:** Astro
*   **UI 라이브러리:** React
*   **상태 관리:** Zustand (현재는 예제 컴포넌트에서만 사용)
*   **아이콘:** Font Awesome
*   **스타일링:** CSS Modules, CSS Variables
*   **배포:** GitHub Actions, GitHub Pages

## 🛠️ 시작하기

이 프로젝트를 로컬에서 실행하려면 다음 단계를 따르세요.

### 전제 조건

*   Node.js (v20 이상 권장)
*   npm 또는 yarn

### 설치

1.  저장소를 클론합니다:
    ```bash
    git clone https://github.com/lopyad/lopyad.github.io.git
    cd lopyad.github.io
    ```
2.  의존성을 설치합니다:
    ```bash
    npm install
    # 또는 yarn install
    ```

### 개발 서버 실행

개발 모드로 프로젝트를 실행합니다. 변경사항이 저장될 때마다 자동으로 새로고침됩니다.

```bash
npm run dev
# 또는 yarn dev
```

브라우저에서 `http://localhost:4321` (기본값)을 엽니다.

### 프로덕션 빌드

프로덕션 배포를 위한 정적 파일을 빌드합니다. 빌드된 파일은 `dist/` 디렉토리에 생성됩니다.

```bash
npm run build
# 또는 yarn build
```

### 미리보기

빌드된 프로덕션 버전을 로컬에서 미리 볼 수 있습니다.

```bash
npm run preview
# 또는 yarn preview
```

## 📂 프로젝트 구조

```
lopyad.github.io/
├── .github/                 # GitHub Actions 워크플로우
├── public/                  # 정적 자산 (파비콘 등)
├── src/
│   ├── assets/              # 이미지, 폰트 등
│   ├── components/          # React 및 Astro 컴포넌트
│   │   ├── Blog.tsx
│   │   ├── Footerbar.tsx
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── SidebarContent.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── Welcome.tsx
│   ├── content/             # 마크다운 콘텐츠 (블로그 게시물)
│   │   └── posts/
│   ├── layouts/             # Astro 레이아웃
│   │   ├── Layout.astro
│   │   └── PostLayout.astro
│   ├── pages/               # Astro 페이지 (라우팅)
│   │   ├── blog/
│   │   └── index.astro
│   ├── stores/              # Zustand 스토어
│   └── styles/              # 전역 및 모듈 CSS
├── astro.config.mjs         # Astro 설정
├── package.json             # 프로젝트 의존성 및 스크립트
└── tsconfig.json            # TypeScript 설정
```

## 🚀 배포

이 프로젝트는 GitHub Actions를 통해 `main` 브랜치에 푸시될 때마다 자동으로 빌드되어 GitHub Pages (`gh-pages` 브랜치)에 배포됩니다.

## 🤝 기여

기여를 환영합니다! 버그 리포트, 기능 제안 또는 풀 리퀘스트를 통해 프로젝트에 참여할 수 있습니다.

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요. (현재 `LICENSE` 파일은 없으며, 필요시 추가할 수 있습니다.)