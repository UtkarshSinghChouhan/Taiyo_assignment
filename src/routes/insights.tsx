import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet';
import { useQuery } from '@tanstack/react-query';
// import AreaChart from '../components/charts/area-chart';


const Insights = () => {

  const getData = async () => {
    const data = await fetch("https://disease.sh/v3/covid-19/countries");
    const jsonData = await data.json();

    return jsonData;
  }

  const { data: COVID_DATA, isLoading } = useQuery({
    queryFn: () => getData(),
    queryKey: ["covid"]
  })

  const customIcon = new Icon({
    iconUrl: "https://www.reshot.com/preview-assets/icons/PCU94GRABZ/covid-19-PCU94GRABZ.svg",
    iconSize: [30, 30]
  })

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }


  return (
    <>
      {/* <div><AreaChart /></div> */}

      <div className='flex w-full h-full bg-purple-300'>
        <MapContainer center={[51.505, -0.09]} style={{ height: "100%", width: "100%" }} zoom={2} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {COVID_DATA.map((countryData: any) => {
            return (
              <Marker icon={customIcon} position={[countryData.countryInfo.lat, countryData.countryInfo.long]}>
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
      </div>
    </>
  )
}

export default Insights