---
title: '두 번째 포스트: 콘텐츠 컬렉션의 강력함'
description: 'Astro의 콘텐츠 컬렉션 기능에 대해 알아봅니다.'
pubDate: 2025-07-21
tags: ["astro", "features", "content"]
---

## 콘텐츠 컬렉션이란?

Astro의 **콘텐츠 컬렉션**은 `src/content/` 디렉토리에서 여러분의 마크다운과 MDX 파일들을 관리하는 가장 좋은 방법입니다.

1.  **타입 안전성**: `src/content/config.ts` 파일에서 Zod를 사용하여 프론트매터의 스키마를 정의할 수 있습니다.
2.  **자동 생성된 타입**: 컬렉션에서 콘텐츠를 불러올 때 완벽한 타입 추론을 제공합니다.
3.  **쿼리 API**: `getCollection()`과 `getEntry()` 함수로 손쉽게 콘텐츠를 가져올 수 있습니다.
