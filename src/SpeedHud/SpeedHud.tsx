import { useContext } from "react";
import { ThemeContext } from "../App";
import CheckEngineCodes from "./CheckEngineCodes/CheckEngineCodes";
import HeatBar from "./HeatBar/HeatBar";
import RpmBar from "./RpmBar/RpmBar";
import './SpeedHud.css';

export type Drive = 'P' | 'N' | 'D' | 'R';

export interface SpeedHubProps {
    drive: Drive,
}

function SpeedHud(props: SpeedHubProps) {
    const theme = useContext(ThemeContext);
    const backgroundColor = theme.primary + '11';

    // TODO grab from service
    const rpm = 5603;
    const speed = 67;
    const engineCodes: string[] | undefined = ['020012', '23221', 'P08923'];
    const coolantTemp = 190;
    const engineTemp = 120;

    const rpmPipe = (value: number) => {
        let str = value.toString().padStart(4, '0');
        str = str.slice(0, 1) + '.' + str.slice(1);
        return str;
    }

    return (
        // TODO add crt back
      <div className="SpeedHud crt" style={{backgroundColor: backgroundColor, color: theme.primary}}>
        <div className="speed">{speed.toString().padStart(3, '0')}</div>
        <div className="mph">MPH</div>
        <div className="bar"><RpmBar rpm={rpm}/></div>
        <div className="rpm">{`${rpmPipe(rpm)}`} RPM</div>
        <div className="company"><div className="chevillon">CHEVILLON</div><div className="arasaka">荒坂モータース</div></div>
        <div className="drive">
            <div className="drive-card" style={{backgroundColor: props.drive === 'P' ? theme.primary : theme.primary + '33', color: theme.background}}>P</div>
            <div className="drive-card" style={{backgroundColor: props.drive === 'N' ? theme.primary : theme.primary + '33', color: theme.background}}>N</div>
            <div className="drive-card" style={{backgroundColor: props.drive === 'D' ? theme.primary : theme.primary + '33', color: theme.background}}>D</div>
            <div className="drive-card" style={{backgroundColor: props.drive === 'R' ? theme.primary : theme.primary + '33', color: theme.background}}>R</div>
        </div>
        <div className="temps">
          <HeatBar heat={engineTemp} upperLimit={150} warningLimit={110} type={'C'} label={'ENGINE'}/>
          <HeatBar heat={coolantTemp} upperLimit={250} warningLimit={210} type={'F'} label={'COOLANT'}/>
        </div>
        <div className="engine-codes">
          <CheckEngineCodes codes={engineCodes}/>
        </div>
      </div>
    );
  }
  
  export default SpeedHud;
  