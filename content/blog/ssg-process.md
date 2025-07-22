---
title: "이 블로그의 정적 사이트 생성(SSG) 과정"
date: "2025-07-22"
category: "Next.js"
---

# 이 블로그의 정적 사이트 생성(SSG) 과정 이해하기

이 블로그는 Next.js의 **정적 사이트 생성(Static Site Generation, SSG)** 기능을 활용하여 빌드되고 있습니다. SSG는 웹사이트의 모든 페이지를 빌드 시점에 미리 HTML 파일로 생성하는 방식입니다. 이 접근 방식은 사용자에게 매우 빠른 로딩 속도와 뛰어난 성능을 제공하며, CDN(Content Delivery Network)을 통해 효율적으로 배포할 수 있다는 장점이 있습니다.

## SSG 빌드 프로세스

이 프로젝트의 SSG 과정은 다음과 같은 단계로 이루어집니다.

### 1. 데이터 소스: 마크다운 파일

모든 블로그 포스트는 `content/blog/` 디렉터리에 있는 마크다운(`.md`) 파일로 관리됩니다. 각 파일의 상단에는 `---`로 둘러싸인 **Frontmatter** 영역이 있어, 포스트의 제목, 날짜, 카테고리와 같은 메타데이터를 정의합니다.

```markdown
---
title: "테스트 포스트"
date: "2025-07-18"
category: "Tech"
---

이곳에 포스트 본문이 작성됩니다...
```

### 2. 데이터 가져오기 및 파싱

Next.js는 빌드 시점에 각 페이지에 필요한 데이터를 미리 가져옵니다. 이 프로젝트는 App Router를 사용하므로, 별도의 데이터 페칭 함수(`getStaticProps`) 없이 서버 컴포넌트 내에서 직접 데이터 로직을 수행합니다. 이 로직은 `src/lib/postManager.ts` 파일에 구현되어 있습니다.

-   `getSortedPostsData()`: 모든 마크다운 파일을 읽어 메타데이터를 파싱하고, 날짜순으로 정렬하여 포스트 목록을 생성합니다. 이 데이터는 블로그 인덱스 페이지 (`/blog`)를 렌더링하는 데 사용됩니다.
-   `getPostData(slug)`: 특정 `slug`(파일 이름)에 해당하는 마크다운 파일을 찾아, `remark`와 `remark-html` 라이브러리를 사용해 본문을 HTML로 변환합니다. 이 데이터는 개별 블로그 포스트 페이지 (`/blog/[slug]`)를 렌더링하는 데 사용됩니다.

### 3. 동적 경로 생성 (`generateStaticParams`)

블로그 포스트처럼 동적인 경로(`[slug]`)를 가진 페이지들을 정적으로 생성하기 위해, Next.js는 어떤 경로들을 미리 빌드해야 하는지 알아야 합니다. App Router에서는 `generateStaticParams` 함수가 이 역할을 합니다.

`src/app/blog/[slug]/page.tsx` 파일 내에서 `generateStaticParams`는 `getAllPostSlugs` 함수를 호출하여 모든 포스트의 `slug` 목록을 반환합니다. Next.js는 이 목록을 기반으로 각 `slug`에 해당하는 HTML 페이지(예: `/blog/my-first-post.html`, `/blog/my-second-post.html`)를 빌드 시점에 모두 생성합니다.

### 4. 페이지 렌더링 및 HTML 파일 생성

Next.js는 위 단계에서 얻은 데이터와 React 컴포넌트를 결합하여 각 페이지를 렌더링하고, 그 결과를 완전한 HTML 파일로 만듭니다.

-   `/blog` 페이지는 `getSortedPostsData`의 결과로 렌더링됩니다.
-   각 `/blog/[slug]` 페이지는 `getPostData`와 `generateStaticParams`의 결과로 렌더링됩니다.

### 5. 빌드 결과물 (`out` 디렉터리)

`npm run build` 명령어를 실행하면, `next.config.ts`에 `output: 'export'` 설정이 되어 있으므로 Next.js는 빌드된 정적 파일들을 `out` 디렉터리에 생성합니다. 이 디렉터리에는 HTML, CSS, JavaScript, 이미지 등 웹사이트를 구성하는 모든 파일이 포함되어 있습니다.

### 6. 배포

마지막으로, `out` 디렉터리의 내용 전체를 GitHub Pages와 같은 정적 호스팅 서비스에 배포하면 됩니다. 이 프로젝트에서는 GitHub Actions 워크플로우(`.github/workflows/deploy.yml`)가 이 과정을 자동화하여, `main` 브랜치에 변경 사항이 푸시될 때마다 자동으로 빌드하고 배포합니다.

이러한 SSG 과정을 통해, 사용자는 서버의 도움 없이 미리 만들어진 HTML 페이지를 즉시 받아보게 되어 최상의 성능을 경험할 수 있습니다.
