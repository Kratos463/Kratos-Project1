import { Line } from 'react-chartjs-2';

const LineChart = () => {
    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Total Package Sales Chart',
                font: {
                    size: 15,
                    weight: 'bold',
                },
            },
        },
        scales: {
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    font: {
                        size: 14,
                    },
                },
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    font: {
                        size: 14,
                    },
                },
            },
        },
        elements: {
            point: {
                radius: 5,
                backgroundColor: 'rgb(0, 172, 37)',
            },
            line: {
                tension: 0.4,
                borderWidth: 3,
                borderColor: 'rgb(0, 172, 37)',
                backgroundColor: 'rgba(0, 172, 37, 0.2)',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
    const productASales = [120, 135, 125, 145, 160, 150, 170, 160];

    const data = {
        labels,
        datasets: [
            {
                label: 'Total Package Sale',
                data: productASales,
            },
        ],
    };

    return <Line options={options} data={data} />;
};

export default LineChart;
