import "./ControlSizible.css";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";

const ControlSizible = (props) => {
  return (
    <div className={props?.show ? "minisizible open" : "minisizible close"}>
      <div className="open_sizible" onClick={() => props?.setShow(prev => !prev)}>
        <div className="open">
          {!props?.show && <LuArrowLeft />}
          <span>{!props?.show ? "open" : "close"}</span>
          {props?.show && <LuArrowRight />}
        </div>
        <div className="sizible">Sizible</div>
      </div>
      <div className="on_off_cont">
        <div className="on">on</div>
        <div className="off">off</div>
        <div
          className={!props?.show ? "on_off_slider bottom" : "on_off_slider top"}
          // onClick={() => props?.setShow((prev) => !prev)}
        >
          {props?.show ? "on" : "off"}
        </div>
      </div>
    </div>
  );
};

export default ControlSizible;
