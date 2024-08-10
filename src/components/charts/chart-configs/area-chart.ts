export const areaChartConfig = (cases: number[], dates: string[]) => {
    const data = {
        series: [{
            name: 'COVID Cases',
            data: cases
        }],
        options: {
            chart: {
                type: 'area' as const,
                height: 350
            },
            xaxis: {
                categories: dates
            },
            yaxis: {
                title: {
                    text: 'Number of Cases'
                }
            },
            tooltip: {
                x: {
                    format: 'MM/dd/yy'  // Format date for tooltip
                }
            },
            title: {
                text: 'COVID-19 Cases Over Time',
                align: 'left'  // Corrected to match the expected type
            }
        }
    };

    return data;
};