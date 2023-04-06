import { useContext } from "react";
import { ThemeContext } from "../../App";
import './RpmBar.css';

export interface RpmBarProps {
  rpm: number;
};

function RpmBar(props: RpmBarProps) {
    const theme = useContext(ThemeContext);
    const color = props.rpm <= 2000 ? `${theme.primary}99` : props.rpm <= 6000 ? theme.primary : theme.warning;
    const rpm = props.rpm / 200;

    const bars = [];

    for(let i=1; i <= 40; i++) {
      bars.push(i)
    }

    return (
        // TODO add crt back
      <div className="RpmBar" style={{color: color, outline: `5px ${theme.primary} double`}}>
        <div className="labels" style={{color: theme.primary}}>
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
        </div>
        {
          bars.map(tic => <div key={tic} className="rpm-tic" style={{backgroundColor: tic <= rpm ? color : theme.primary + '09'}}></div>)
        }
      </div>
    );
  }
  
  export default RpmBar;
  