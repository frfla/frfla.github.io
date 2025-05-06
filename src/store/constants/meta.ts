export const REPO_NAMES = ['docs', 'react-hooks', 'react-md-renderer', 'react-animated', 'laser'] as const;
export const REPO_URL = {
  docs: 'https://raw.githubusercontent.com/frfla/frfla.github.io/refs/heads/main',
  laser: 'https://raw.githubusercontent.com/frfla/laser/refs/heads/main',
  'react-animated': 'https://raw.githubusercontent.com/frfla/react-animated/refs/heads/main',
  'react-hooks': 'https://raw.githubusercontent.com/frfla/react-hooks/refs/heads/main',
  'react-md-renderer': 'https://raw.githubusercontent.com/frfla/react-md-renderer/refs/heads/main',
} as const;
export const CAPTIONS = {
  'react-md-renderer': 'CSS로 쉽게 커스텀하는 마크다운 렌더러',
  'react-hooks': 'React 유틸리티 훅 패키지',
  'react-animated': '애니메이션 훅과 컴포넌트 (배포 예정)',
  laser: '자바스크립트/타입스크립트 유틸리티',
  docs: '',
};
