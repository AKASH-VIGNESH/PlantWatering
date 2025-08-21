import './card.css';
export default function Card(props) {
    return (
        <div className="PlantCard" onClick={props.onClick}>
            <picture>
                <source media="(max-width: 768px)" srcSet={props.mobileLogo}></source>
                <img className="PlantImage" src={props.logo} alt="No-image"></img>
            </picture>
            <div className='PlantDetails'>
                <h1 className='PlantName'>
                    {props.name}
                </h1>
                <h4 className='Lastwater'>{props.lastWatered}</h4>
            </div>
        </div>
    );
}
