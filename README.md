# lopyad.github.io - 개인 블로그

Next.js와 TypeScript를 사용하여 구축한 개인 기술 블로그입니다. GitHub Pages에 정적으로 호스팅되며, 마크다운 파일로 콘텐츠를 관리합니다.

## ✨ 주요 기능 (Features)

- **정적 사이트 생성 (SSG)**: Next.js의 `output: 'export'` 기능을 활용하여 빠르고 효율적인 정적 웹사이트를 생성합니다.
- **마크다운 기반 콘텐츠**: `content/blog` 폴더에 마크다운(`.md`) 파일을 추가하여 손쉽게 새 글을 작성하고 관리할 수 있습니다.
- **자동화된 배포 (CI/CD)**: `main` 브랜치에 코드가 푸시될 때마다 GitHub Actions가 자동으로 사이트를 빌드하고 GitHub Pages에 배포합니다.
- **타입스크립트**: 전체 코드베이스에 TypeScript를 적용하여 코드의 안정성과 유지보수성을 높였습니다.
- **컴포넌트 기반 구조**: UI를 재사용 가능한 컴포넌트로 분리하여 개발 효율성을 향상시켰습니다.

## 🛠️ 기술 스택 (Tech Stack)

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Library**: [React](https://react.dev/)
- **Styling**: [CSS Modules](https://github.com/css-modules/css-modules), Global CSS
- **Markdown Processing**: [gray-matter](https://github.com/jonschlinkert/gray-matter), [remark](https://github.com/remarkjs/remark)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Deployment**: [GitHub Actions](https://github.com/features/actions), [GitHub Pages](https://pages.github.com/)

## 🚀 시작하기 (Getting Started)

로컬 환경에서 프로젝트를 실행하고 테스트하려면 아래의 안내를 따르세요.

### 사전 요구 사항

- [Node.js](https://nodejs.org/) (v20 이상)
- [npm](https://www.npmjs.com/)

### 설치

1.  **저장소 복제 (Clone)**:
    ```bash
    git clone https://github.com/lopyad/lopyad.github.io.git
    ```
2.  **프로젝트 디렉터리로 이동**:
    ```bash
    cd lopyad.github.io
    ```
3.  **의존성 설치**:
    ```bash
    npm install
    ```

## 📜 사용 가능한 스크립트 (Available Scripts)

- `npm run dev`: 개발 모드로 애플리케이션을 실행합니다. (http://localhost:3000)
- `npm run build`: 프로덕션용으로 애플리케이션을 빌드하고 `out` 디렉터리에 정적 파일들을 생성합니다.
- `npm run start`: 프로덕션 서버를 시작합니다. (정적 export 환경에서는 주로 `build`만 사용합니다.)
- `npm run lint`: ESLint를 사용하여 코드 스타일과 잠재적인 오류를 검사합니다.