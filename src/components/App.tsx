import { FC } from "react";

interface AppProps {
  title: string;
}

export const App: FC<AppProps> = ({ title }) => <div>{title}</div>;
