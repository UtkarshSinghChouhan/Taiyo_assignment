import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet';

export interface InsightsMap{
    data : any
}

const InsightsMap = ({data} : InsightsMap) => {
    const customIcon = new Icon({
        iconUrl: "https://www.reshot.com/preview-assets/icons/PCU94GRABZ/covid-19-PCU94GRABZ.svg",
        iconSize: [30, 30]
      })
  return (
       <MapContainer center={[51.505, -0.09]} style={{ height: "100%", width: "100%" }} zoom={2} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data?.map((countryData: any) => {
              return (
                <Marker key={countryData.country} icon={customIcon} position={[countryData.countryInfo.lat, countryData.countryInfo.long]}>
                  <Popup>
      
                    <div className='flex flex-col gap-3'>
      
                      <div className='flex gap-2 items-center'>
                        <img src={countryData.countryInfo.flag} alt={countryData.country} width={20}/>
                        <span title={countryData.country} className='line-clamp-1 select-none'>{countryData.country}</span>
                      </div>
      
                      <div className='flex flex-col gap-1'>
                        <span title='Recovered' className='select-none'>🙂 {countryData.recovered}</span>
                        <span  title='Active Cases' className='select-none'>😷 {countryData.active}</span>
                        <span   title='Total Deaths' className='select-none'>💀 {countryData.deaths}</span>
      
                      </div>
      
                    </div>
                    
                  </Popup>
                </Marker>
              )
            })}
      
          </MapContainer> 
)
}

export default InsightsMap