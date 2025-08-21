import React, { useState } from "react";
import Alo_vera from './Assets/Aloe_vera.jpg';
import moblieAlovera from './Assets/MobileAlovera.jpg';
import rosePlant from './Assets/Rose.png';
import mobileRose from './Assets/MobileRose.png'
import Card from "./Component/Card";
import PlantDetails from "./Component/PlantDetail";

function App() {
  const [detailVisiblity, setdetailVisibility] = useState(false);
  const [requiredDetail, setrequiredDetail] = useState(0);

  const HandleClick = (index) => {
    setdetailVisibility(true);
    setrequiredDetail(index);
  };

  const closeDeatails = () => {
    setdetailVisibility(false);
  };

  const data = [
    {
      "Name": "Alovera",
      "logo": Alo_vera,
      "mobileLogo": moblieAlovera,
      "waterDuration": "every 7-10 Days",
      "lastWatered": "Did not water",
      "Who Watered": "No one",
      "Tip": "Always let soil dry completely before watering again."
    },
    {
      "Name": "Rose Plant",
      "logo": rosePlant,
      "mobileLogo": mobileRose,
      "waterDuration": "every 7-10 Days",
      "lastWatered": "Did not water",
      "Who Watered": "No one",
      "Tip": "Always let soil dry completely before watering again."
    }
  ];
  return (
    <div>
      {detailVisiblity ? (
        <div id="PlantDetails">
          <PlantDetails 
            onClose={closeDeatails} 
            plantData={data[requiredDetail]} 
          /> 
        </div>
      ) : (
        <div id="plantList">
          {data.map((e, index) => (
            <Card
              key={index}
              lastWatered={e.lastWatered}
              name={e.Name}
              logo={e.logo}
              mobileLogo={e.mobileLogo}
              onClick={() => HandleClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;