const CountryDetails = (datas) => {
    const country = datas.item[0];
    const name = country?.name.common;
    const imgSrc = country?.flags.png
    const officialName = country?.name.official
    const capital = country?.capital
    const region = country?.region
    const region2 = country?.subregion
    const population = country?.population
    const area = country?.area
    const borders = country?.borders
    const timezones = country?.timezones
    const coatOfArms = country?.coatOfArms.png
    const mapGoogle = country?.maps.googleMaps
    const mapStreet = country?.maps.openStreetMaps
    return(
        <div className="info">
                <div className="countryName">{name}</div>
                <img src={imgSrc} className="image"/>
                <div><span className="text">Official name:</span> {officialName}</div>
                <div><span className="text">Capital: </span> {capital}</div>
                <div><span className="text">Region: </span> {region}, {region2}</div>
                <div><span className="text">Population: </span> {population}</div>
                <div><span className="text">Area: </span> {area}</div>
                <div><span className="text">Borders: </span>{borders?.map((border)=>{return(<span>{border}, </span>)})}</div>
                <div><span className="text">Timezones: </span>{timezones?.map((timezone)=>{return(<span>{timezone}, </span>)})}</div>
                <div className="column">
                <div className="text2">Maps </div>
                <a href={mapGoogle}>View on Google map</a>
                <a href={mapStreet}>View on Open Street map</a>
                </div>
                <div>
                    {coatOfArms === "" ? null : <div className="text2">Coat of arms </div>}

                <img src={coatOfArms} className="image2"/>
                </div>

        </div>

    );
};
export default CountryDetails;
