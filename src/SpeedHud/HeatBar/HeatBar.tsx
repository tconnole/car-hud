import { useContext } from "react";
import { ThemeContext } from "../../App";
import './HeatBar.css';

export interface HeatBarProps {
  heat: number;
  upperLimit: number;
  warningLimit: number;
  type: 'C' | 'F';
  label?: string;
};

function HeatBar(props: HeatBarProps) {
    const theme = useContext(ThemeContext);

    const width = () => {
      const percent = props.heat / props.upperLimit;
      return `${percent * 100}%`
    }

    const warning = () => {
      return props.heat >= props.warningLimit;
    }

    const warningWidth = () => {
      const percent = (props.upperLimit - props.warningLimit) / props.upperLimit;
      return `${percent * 100}%`
    }

    return (
      <div className="HeatBar">
        <div>{`${Math.floor(props.heat)} ${props.type}`}</div>
        <div className="bar-container" style={{outline: `2px solid ${theme.primary}`, backgroundColor: `${theme.primary}33`}}>
          <div className="warning-threshold" style={{backgroundColor: `${theme.warning}`, width: warningWidth(), opacity: '0.3'}}></div>
          <div className="heat-bar" style={{backgroundColor: !warning() ? theme.primary : theme.warning, width: width()}}></div>
          <div className="labels">
            <div>0</div>
            <div>{Math.floor(props.upperLimit / 2)}</div>
            <div>{props.upperLimit}</div>
          </div>
          <div className="heat-bar-label">{props.label}</div>
        </div>
      </div>
    );
  }
  
  export default HeatBar;
  