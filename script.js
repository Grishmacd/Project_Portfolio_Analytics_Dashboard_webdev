// Pre-filled project analytics data
var projectData = [
    {category:"Frontend", count:8, hours:120, difficulty:3},
    {category:"Data Visualization", count:6, hours:90, difficulty:3},
    {category:"ML Regression", count:7, hours:140, difficulty:4},
    {category:"ML Classification", count:5, hours:110, difficulty:4},
    {category:"Deep Learning", count:4, hours:130, difficulty:5}
];

// ---------------------------
// Calculate totals
// ---------------------------

var totalProjects = 0;
var totalHours = 0;
var totalDifficulty = 0;

for(var i=0; i<projectData.length; i++){

    totalProjects += projectData[i].count;

    totalHours += projectData[i].hours;

    totalDifficulty += projectData[i].difficulty * projectData[i].count;

}

var avgDifficulty = (totalDifficulty / totalProjects).toFixed(2);

// ---------------------------
// Display summary values
// ---------------------------

document.getElementById("totalProjects").innerText = totalProjects;

document.getElementById("totalHours").innerText = totalHours + " hrs";

document.getElementById("avgDifficulty").innerText = avgDifficulty + " / 5";


// ---------------------------
// Prepare chart data
// ---------------------------

var categories = [];
var counts = [];
var hoursData = [];

for(var i=0; i<projectData.length; i++){

    categories.push(projectData[i].category);

    counts.push(projectData[i].count);

    hoursData.push(projectData[i].hours);

}


// ---------------------------
// Category Distribution Pie Chart
// ---------------------------

new Chart(document.getElementById("categoryChart"), {

    type: "pie",

    data: {
        labels: categories,

        datasets: [{
            data: counts,

            backgroundColor: [
                "#4CAF50",
                "#03A9F4",
                "#FF9800",
                "#E91E63",
                "#9C27B0"
            ],

            borderWidth: 1
        }]
    },

    options:{
        plugins:{
            legend:{
                labels:{
                    color:"white",
                    font:{
                        size:14
                    }
                }
            }
        }
    }

});


// ---------------------------
// Hours Invested Bar Chart
// ---------------------------

new Chart(document.getElementById("hoursChart"), {

    type: "bar",

    data: {
        labels: categories,

        datasets: [{
            label: "Hours Invested",
            data: hoursData,

            backgroundColor: "#00e0c6",

            borderRadius:6
        }]
    },

    options:{

        scales:{
            x:{
                ticks:{
                    color:"white"
                }
            },

            y:{
                ticks:{
                    color:"white"
                }
            }
        },

        plugins:{
            legend:{
                labels:{
                    color:"white"
                }
            }
        }

    }

});