const eChart = {
    series: [
        {
            name: "Quantité",
            data: [450, 200, 100, 220, 500,],
            color: "#fff",
        },

        // {
        //   name: 'Chouffe',
        //   data: 27,
        // },
        // {
        //   name: 'Paix Dieux',
        //   data: 25,
        // },
        // {
        //   name: 'Kobus',
        //   data: 18,
        // },
        // {
        //   name: 'Ratz',
        //   data: 15,
        // },
        // {
        //   name: 'Rose',
        //   data: 10,
        // },
    ],

    options: {
        chart: {
            type: "bar",
            width: "100%",
            height: "auto",

            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
                borderRadius: 5,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
            colors: ["transparent"],
        },
        grid: {
            show: true,
            borderColor: "#ccc",
            strokeDashArray: 2,
        },
        xaxis: {
            categories: [
                "Chouffe",
                "Paix Dieux",
                "Kobus",
                "Ratz",
                "Rose",
                // "Jul",
                // "Aug",
                // "Sep",
                // "Oct",
            ],
            labels: {
                show: true,
                align: "right",
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: [
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                    ],
                },
            },
        },
        yaxis: {
            labels: {
                show: true,
                align: "right",
                minWidth: 0,
                maxWidth: 160,
                style: {
                    colors: [
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                        "#fff",
                    ],
                },
            },
        },

        tooltip: {
            y: {
                formatter: function (val) {
                    return val
                },
            },
        },
    },
};

export default eChart;
