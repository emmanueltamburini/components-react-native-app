import React, {createContext, useMemo} from 'react';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface ContextProps {
  theme: any;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

const providerValueDummy = {
  theme: {},
  setDarkTheme: () => {},
  setLightTheme: () => {},
};

export const ThemeContext = createContext<ContextProps>({
  ...providerValueDummy,
});

export const ThemeProvider = ({children}: Props) => {
  const theme = {};

  const setDarkTheme = () => console.log('setDarkTheme');
  const setLightTheme = () => console.log('setLightTheme');

  const providerValue = useMemo(
    () => ({
      theme,
      setDarkTheme,
      setLightTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
};
