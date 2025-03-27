import ReactECharts from "echarts-for-react";

const BarChartComponent = () => {
  const option = {
    legend: {
      show: true,
      bottom: 0,
      icon: "square",
    },
    tooltip: {},
    dataset: {
      dimensions: ["product", "2015", "2016", "2017"],
      source: [
        {
          product: "Benefit Research",
          "2015": 43.3,
          "2016": 85.8,
          "2017": 93.7,
        },
        { product: "Eligibity", "2015": 83.1, "2016": 73.4, "2017": 55.1 },
        { product: "Call Center", "2015": 86.4, "2016": 65.2, "2017": 82.5 },
        {
          product: "Consumer Portal",
          "2015": 72.4,
          "2016": 53.9,
          "2017": 39.1,
        },
        { product: "Pharmacy", "2015": 72.4, "2016": 23.9, "2017": 30.1 },
        {
          product: "General Request",
          "2015": 72.4,
          "2016": 53.9,
          "2017": 39.1,
        },
        { product: "IT", "2015": 72.4, "2016": 53.9, "2017": 39.1 },
        { product: "Other", "2015": 72.4, "2016": 53.9, "2017": 39.1 },
      ],
    },
    xAxis: {
      type: "category",
      axisLabel: {
        interval: 0, // Show all labels
        width: 80, // Maximum width of each label
        formatter: function (value: string) {
          // Break down long words and handle wrapping
          const maxLength = 15;
          const maxLineLength = 12;
          
          if (value.length <= maxLength) {
            return value;
          }
      
          // Split long labels into multiple lines
          const words = value.split(' ');
          let result = [];
          let currentLine = '';
          
          words.forEach(word => {
            if ((currentLine + word).length > maxLineLength) {
              if (currentLine) result.push(currentLine);
              currentLine = word;
            } else {
              currentLine = currentLine ? `${currentLine} ${word}` : word;
            }
          });
          
          if (currentLine) result.push(currentLine);
          
          // Join with newline and add ellipsis if still too long
          const formatted = result.join('\n');
          return formatted.length > maxLength * 1.5 
            ? formatted.substring(0, maxLength) + '...' 
            : formatted;
        }
      }
    },
    yAxis: {},
    series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
    grid: {
      top: 20,
      bottom: 25, // Space for legend
      containLabel: true,
    },
  };

  return (
    <ReactECharts
      option={option}
      style={{
        width: "100%", // Responsive width
        height: "300px", // Fixed height
      }}
    />
  );
};

export default BarChartComponent;
