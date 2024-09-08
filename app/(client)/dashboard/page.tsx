import LineChart from '~/app/global/components/LineChart';
import Doughnut from '~/app/global/components/Doughnut';

const dataSeries = [
  { name: "Soybean", data: [1, 2, 3, 4, 5] },
  { name: "sesame", data: [5, 4, 3, 2, 1] },
  { name: "Sunflower", data: [1, 3, 8, 5, 10] }
];

const doughnutData = [
  { name: "Soybean", y: 55, color: "#a3d085" },
  { name: "Sesame", y: 45, color: "#7b898e" },
  { name: "Sunflower", y: 60, color: "#f6b93b" }
];

const DashboardPage = () => {
  return (
    <>
      
      <LineChart series={dataSeries} categories={["Jan", "Feb", "Mar", "Apr", "May"]} />
      <Doughnut data={doughnutData} title="Distribution" />
    </>
  );
};

export default DashboardPage;
