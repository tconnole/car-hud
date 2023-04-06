import { createContext } from 'react';
import './App.css';
import SpeedHud from './SpeedHud/SpeedHud';
// import './fonts/*';

export interface HudTheme {
  background: string;
  primary: string;
  warning: string
}

const BlackWhiteTheme: HudTheme = {background: '#000000', primary: '#ffffff', warning: '#ff5959'}

const OrangeTheme: HudTheme = {background: '#000000', primary: '#ffc23d', warning: '#ff0000'};

const BlueTheme: HudTheme = {background: '#000000', primary: '#03abff', warning: '#ff0080'};

const defaultTheme: HudTheme = BlueTheme;

export const ThemeContext = createContext<HudTheme>(defaultTheme)
const drive = 'D';


function App() {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <div className="App" style={{backgroundColor: defaultTheme.background, color: defaultTheme.primary}}>
        <SpeedHud drive={drive}/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
