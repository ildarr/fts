import { FC } from 'react';

interface AppProps {
  title: string;
}

export const App: FC<AppProps> = ({ title }) => {
  const t = (x) => x;
  return <div> {title}</div>;
};
