import classNames from "classnames";
import { useState } from "react";

interface SwitchProps {
  typeTemp: boolean,
  setTypeTemp: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Switch( { typeTemp, setTypeTemp }: SwitchProps ) {

  const [isSelected, setisSelected] = useState(false);

  const selectedToogle = () => {
    setisSelected(!isSelected);
  };

  return (
    <div className="relative flex items-center  w-20 h-10 bg-switch m-12 rounded-full">

      <span
        onClick={ () => {selectedToogle(); setTypeTemp(!typeTemp)} }
        className={classNames(
          "h-10 w-10 bg-white border-2 border-switch rounded-full cursor-pointer transition-all", {
            'ml-10' : isSelected,
          }
        )}
      ></span>

      <p className="absolute font-medium tracking-tighter left-[50px] text-xl">°C</p>
      <p className="absolute font-medium tracking-tighter left-3 text-xl">°F</p>
    </div>
  );
}
