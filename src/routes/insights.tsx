
import "leaflet/dist/leaflet.css"
import { useQuery } from '@tanstack/react-query';
import { cn, getCountryWiseData, getWorldWideData } from '../lib/utils';
import healthy from '../assets/image/healthy.svg';
import sick from '../assets/image/sick.svg';
import dead from '../assets/image/dead.svg';
import CountUp from 'react-countup';
import { useState } from 'react';
import InsightsMap from "../components/insights-map";
import InsightsGraph from "../components/insights-graph";
import InsightsSkeleton from "../components/skeletons/insights-skeleton";

// import AreaChart from '../components/charts/area-chart';


const Insights = () => {


  // ================= Fetching World Wide Total Covid Data================
  const { data: WORLD_WIDE_COVID_DATA, isLoading: worldWideDataLoading } = useQuery({
    queryFn: () => getWorldWideData(),
    queryKey: ["world-wide-data"]
  })


  
  // ================= Fetching Map Covid Data================
  const { data: COVID_DATA, isLoading: mapLoading } = useQuery({
    queryFn: () => getCountryWiseData(),
    queryKey: ["country-wise-data"]
  })

  // ================= Fetching Graph Data================
  const { data: GRAPH_DATA, isLoading: graphLoading } = useQuery({
    queryFn: () => getCountryWiseData(),
    queryKey: ["graph-data"]
  })

  

  const [activeIdx, setActiveIdx] = useState(0);

  const TABS = [
    {
      label: "Map",
      component: <InsightsMap data={COVID_DATA} />,
    },
    {
      label: "Graph",
      component: <InsightsGraph data={GRAPH_DATA}/>,
    }
  ]

  // Skeleton
  if (worldWideDataLoading && mapLoading && graphLoading) {
    return (
      <InsightsSkeleton />
    )
  }
  
  
  return (
    <>
      {/* World Wide Data */}
      <div className='flex w-full flex-wrap gap-5 xl:gap-0 xl:flex-nowrap xl:justify-between xl:space-x-5'>

        {/* Recovered */}
        <div className='flex flex-col border-[2px] border-fs-dark-border flex-1 bg-fs-beige p-4'>

          {/* Header */}
          <div className='flex flex-col sm:flex-row gap-2 items-center justify-between '>

            <div className='flex gap-2 '>
              <img src={healthy} alt="recovered" width={35} title="Recovered" />
              <h1 className='text-[24px] text-fs-dark-border font-semibold'>Recovered</h1>
            </div>

            <div className='text-green-700 font-semibold text-xl'>
              +<CountUp end={WORLD_WIDE_COVID_DATA.recovered} />
            </div>
          </div>

           {/* Sub info */}
           <div className='flex flex-col sm:flex-row items-center mt-3 gap-2'>
              <div className='bg-fs-dark-border text-white w-full border-[2px] border-fs-dark-border p-2'>                  
                <p className='text-base font-semibold whitespace-nowrap'>Today Cases</p>
                <CountUp end={WORLD_WIDE_COVID_DATA.todayRecovered} />
              </div>

              <div className='bg-fs-dark-border text-white w-full border-[2px] border-fs-dark-border p-2' >
                  <p className='text-base font-semibold whitespace-nowrap'>Recovered/million</p>
                  <CountUp end={WORLD_WIDE_COVID_DATA.recoveredPerOneMillion} />                  
              </div>
            </div>

        </div>

        {/* Active */}
        <div className='flex flex-col border-[2px] border-fs-dark-border flex-1 bg-fs-beige p-4'>

          {/* Header */}
          <div className='flex flex-col sm:flex-row gap-2 items-center justify-between'>

            <div className='flex gap-2 '>
              <img src={sick} alt="active" width={35} title='Active'/>
              <h1 className='text-[24px] text-fs-dark-border font-semibold'>Active</h1>
            </div>

            <div className='text-orange-500 font-semibold text-xl'>
              +<CountUp end={WORLD_WIDE_COVID_DATA.active} />
            </div>

          </div>

          {/* Sub info */}
          <div className=' flex flex-col sm:flex-row items-center mt-3 gap-2'>
            <div className='bg-fs-dark-border text-white w-full border-[2px] border-fs-dark-border p-2'>                  
              <p className='text-base font-semibold whitespace-nowrap'>Today Cases</p>
              <CountUp end={WORLD_WIDE_COVID_DATA.todayCases} />
            </div>

            <div className='bg-fs-dark-border text-white w-full border-[2px] border-fs-dark-border p-2' >
                <p className='text-base font-semibold whitespace-nowrap'>Active/million</p>
                <CountUp end={WORLD_WIDE_COVID_DATA.activePerOneMillion} />                  
            </div>
          </div> 
          
        </div>

        {/* Deaths */}
        <div className='flex flex-col border-[2px] border-fs-dark-border flex-1 bg-fs-beige p-4'>

          {/* Header */}
          <div className='flex flex-col sm:flex-row gap-2 items-center justify-between'>

            <div className='flex gap-2'>
              <img src={dead} alt="dead" width={35} title='Dead'/>
              <h1 className='text-[24px] text-fs-dark-border font-semibold'>Deaths</h1>
            </div>

            <div className='text-red-700 font-semibold text-xl'>
              +<CountUp end={WORLD_WIDE_COVID_DATA.deaths} />
            </div>
          </div>

           {/* Sub info */}
           <div className=' flex flex-col sm:flex-row items-center mt-3 gap-2'>
              <div className='bg-fs-dark-border text-white w-full border-[2px] border-fs-dark-border p-2'>                  
                <p className='text-base font-semibold whitespace-nowrap'>Today Cases</p>
                <CountUp end={WORLD_WIDE_COVID_DATA.todayDeaths} />
              </div>

              <div className='bg-fs-dark-border text-white w-full border-[2px] border-fs-dark-border p-2' >
                  <p className='text-base font-semibold whitespace-nowrap'>Deaths/million</p>
                  <CountUp end={WORLD_WIDE_COVID_DATA.deathsPerOneMillion} />                  
              </div>
          </div>
        </div>
      </div>


      {/* Tabs */}
      <div className='flex flex-col w-full mt-10 h-[500px]'>

        <div className="w-full flex gap-2 items-center">

          <div className="h-[2px] bg-fs-dark-border flex-1" />

          <div className='flex self-end gap-2 border-[2px] border-fs-dark-border p-2 bg-fs-beige w-52'>
            {TABS.map((obj, idx) => {
              return (
                <button onClick={() => setActiveIdx(idx)} className={cn("custom-cursor-pointer font-semibold flex-1 p-1 bg-fs-beige text-fs-dark-border", activeIdx === idx && 'bg-fs-dark-border text-white')}>
                  {obj.label}
                </button>
              )
            })}
          </div>
        </div>


        <div className="bg-white-500 flex-1 border-[2px] border-fs-dark-border mt-5">
          {TABS[activeIdx].component}          
        </div>

         
      </div>
    </>
  )
}

export default Insights