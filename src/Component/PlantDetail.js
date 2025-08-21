export default function PlantDetails({ plantData, onClose }) {
  return (
    <div className="plant-details">
      <h2>{plantData.Name}</h2>

      <p><strong>Water Duration:</strong> {plantData.waterDuration}</p>
      <p><strong>Last Watered:</strong> {plantData.lastWatered}</p>
      <p><strong>Who Watered:</strong> {plantData["Who Watered"]}</p>
      <p><strong>Tip:</strong> {plantData.Tip}</p>

      <button onClick={onClose}>Close</button>
    </div>
  );
}
