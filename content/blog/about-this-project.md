---
title: "프로젝트 소개: 코딩 에디터 컨셉의 기술 블로그 만들기"
date: "2025-07-22"
category: "Project"
---

# 안녕하세요! 이 블로그에 대하여

지금 읽고 계신 이 블로그는 저의 개인적인 학습과 기록을 위해 만든 공간입니다. 단순히 글을 나열하는 것을 넘어, 개발자에게 친숙한 코드 에디터(Visual Studio Code)의 인터페이스를 컨셉으로 잡아 디자인과 기능을 구현했습니다.

이 포스트에서는 이 블로그를 어떤 기술을 사용해 어떻게 만들었는지 간략하게 소개하고자 합니다.

## ✨ 주요 특징

- **정적 사이트 생성(SSG)**: 모든 페이지를 빌드 시점에 미리 생성하여 매우 빠른 로딩 속도를 자랑합니다.
- **마크다운 기반 콘텐츠**: `content/blog` 폴더에 마크다운(`.md`) 파일로 포스트를 작성하면 자동으로 페이지가 생성됩니다.
- **코드 에디터 UI**: 상단의 네비게이션 바, 좌측의 파일 탐색기 형태의 사이드바, 하단의 상태 바를 통해 친숙한 개발 환경을 재현했습니다.
- **동적 사이드바**: 사이드바는 포스트의 메타데이터에 있는 `category`를 기반으로 동적으로 폴더 구조를 만들어 콘텐츠를 그룹화합니다.
- **자동화된 배포**: `main` 브랜치에 코드를 푸시하면 GitHub Actions가 자동으로 프로젝트를 빌드하고 GitHub Pages에 배포합니다.

## 🛠️ 기술 스택 (Tech Stack)

이 블로그를 구축하는 데 사용된 핵심 기술들은 다음과 같습니다.

- **프레임워크**: [Next.js](https://nextjs.org/) (App Router)
- **언어**: [TypeScript](https://www.typescriptlang.org/)
- **UI 라이브러리**: [React](https://react.dev/)
- **스타일링**: CSS (Global Styles & Component-specific CSS)
- **마크다운 처리**:
  - `gray-matter`: 마크다운 파일의 메타데이터(Frontmatter)를 파싱합니다.
  - `remark` & `remark-html`: 마크다운 콘텐츠를 HTML로 변환합니다.
- **배포**: [GitHub Pages](https://pages.github.com/) & [GitHub Actions](https://github.com/features/actions)

## 📂 프로젝트 구조

프로젝트의 주요 폴더 구조는 다음과 같습니다.

```
src/
├── app/          # Next.js의 라우팅 및 핵심 UI
│   ├── blog/       # 블로그 목록 및 상세 페이지
│   ├── component/  # Navbar, Sidebar 등 재사용 컴포넌트
│   └── layout.tsx  # 전역 레이아웃
│
├── content/      # 블로그 포스트(마크다운 파일) 저장소
│   └── blog/
│
├── lib/          # 마크다운 파싱 등 핵심 로직
│   └── postManager.ts
│
└── types/        # 전역 타입스크립트 타입 정의
```

- **`src/app`**: Next.js의 App Router 규칙에 따라 파일 시스템 기반으로 라우팅이 이루어집니다.
- **`src/lib/postManager.ts`**: `content/blog` 폴더의 마크다운 파일을 읽고, 파싱하며, 페이지에 필요한 데이터 형태로 가공하는 모든 로직을 담당하는 핵심 파일입니다.

## 앞으로의 계획

아직은 기본적인 형태를 갖추고 있지만, 앞으로 다음과 같은 기능들을 추가해 볼 계획입니다.

- 검색 기능 추가
- 다크/라이트 모드 테마 전환
- 댓글 기능 연동

이 프로젝트는 저에게 Next.js와 TypeScript에 대한 깊은 이해를 제공한 좋은 학습 경험이었습니다. 코드는 [GitHub 저장소](https://github.com/lopyad/lopyad.github.io)에서 모두 확인하실 수 있습니다.

방문해 주셔서 감사합니다!
