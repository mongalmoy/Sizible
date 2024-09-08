import "./Sizible.css";
import ControlSizible from './ControlSizible'
import SizibleHeader from "../../components/SizibleHeader/SizibleHeader";
import SizibleBody from "./SizibleBody/SizibleBody";
import { useState } from "react";

const Sizible = () => {
  const [showSizible, setShowSizible] = useState(false);
  return (
    <div className='sizible_comp'>
      {!showSizible ? <ControlSizible show={showSizible} setShow={setShowSizible} /> : (
        <div className="outer_div_cont">
        <div className="left">
          <ControlSizible show={showSizible} setShow={setShowSizible} />
        </div>
        <div className="right">
          <SizibleHeader />
          <SizibleBody />
        </div>
      </div>
      )}
      
    </div>
  )
}

export default Sizible