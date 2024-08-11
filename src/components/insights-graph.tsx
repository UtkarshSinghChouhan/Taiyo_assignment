import React from "react";
import {  defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";
import { getCountryWiseData } from "../lib/utils";


export interface IInsightsGraph {
  data: any
}

defaults.maintainAspectRatio = false;
defaults.responsive = true;

// defaults.plugins.title.display = true;
// defaults.plugins.title.align = "start";
// defaults.plugins.title.color = "black";


const InsightsGraph = ({data}: IInsightsGraph) => {

  const dates = Object.keys(data?.cases);

  const cases = Object.values(data?.cases);

  const deaths = Object.values(data?.deaths);
  



  return (

    <div className="h-full w-[90%] mx-auto bg-fs-beige">
      <Line
        data={{
          labels: dates,
          datasets: [
            {
              label: "Dead",
              data: deaths,
              backgroundColor: "red",
              borderColor: "red",
              pointStyle: false,
            },
            {
              label: "New Cases",
              data: cases,
              backgroundColor: "orange",
              borderColor: "orange",
              pointStyle: false,
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
          scales:{
            x:{
              grid:{
                display: false
              }
            }
          }
        }}
      />
    </div>
  )
}

export default InsightsGraph
