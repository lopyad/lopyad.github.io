
// src/components/Icon.tsx
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

// 중요: Astro 서버 환경에서 Font Awesome이 자동으로 CSS를 <head>에 추가하는 것을 방지합니다.
// 이것을 설정하지 않으면 아이콘이 처음에는 크게 렌더링되었다가 작아지는 현상(FOUC)이 발생합니다.
config.autoAddCss = false;

// IconProps 정의: FontAwesomeIconProps에서 'icon'을 제외하고,
// 우리가 사용할 IconDefinition 타입의 'icon'을 필수로 만듭니다.
type IconProps = Omit<FontAwesomeIconProps, 'icon'> & {
  icon: IconDefinition;
};

const Icon = (props: IconProps) => {
  return <FontAwesomeIcon {...props} />;
};

export default Icon;
