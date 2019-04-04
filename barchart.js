let prapareData = [
  {
    name: "Survey Questions",
    children: [
      {
        name: "Prevalence",
        children: [
          {
            name: "mama",
            percent: 312
          },
          {
            name: "prostata",
            percent: 119
          },
          {
            name: "bronquios y pulmon",
            percent: 78
          },
          {
            name: "colon",
            percent: 77
          },
          {
            name: "cuello uterino",
            percent: 61
          },
          {
            name: "ganglios linfaticos",
            percent: 56
          },
          {
            name: "estomago",
            percent: 37
          },
          {
            name: "recto",
            percent: 32
          },
          {
            name: "encefalo",
            percent: 31
          },
          {
            name: "primario desconocido",
            percent: 24
          },
          {
            name: "Otros",
            percent: 308
          }
        ]
      }
    ]
  },
  {
    name: "Survey Questions",
    children: [
      {
        name: "Prevalence",
        children: [
          {
            name: "mama",
            percent: 84
          },
          {
            name: "Sistema hematopoyetico",
            percent: 46
          },
          {
            name: "prostata",
            percent: 42
          },
          {
            name: "colon",
            percent: 26
          },
          {
            name: "cuello uterino",
            percent: 24
          },
          {
            name: "estomago",
            percent: 20
          },
          {
            name: "recto",
            percent: 18
          },
          {
            name: "ganglios linfaticos",
            percent: 15
          },
          {
            name: "encefalo",
            percent: 15
          },
          {
            name: "primario desconocido",
            percent: 8
          },
          {
            name: "Otros",
            percent: 96
          }
        ]
      }
    ]
  },
  {
    name: "Survey Questions",
    children: [
      {
        name: "Prevalence",
        children: [
          {
            name: "prostata",
            percent: 126
          },
          {
            name: "sistemas hematopoyetico y reticuloendotelial",
            percent: 53
          },
          {
            name: "colon",
            percent: 44
          },
          {
            name: "bronquio y pulmon",
            percent: 40
          },
          {
            name: "ganglios linfaticos",
            percent: 20
          },
          {
            name: "piel",
            percent: 19
          },
          {
            name: "encefalo",
            percent: 16
          },
          {
            name: "recto",
            percent: 16
          },
          {
            name: "estomago",
            percent: 16
          },
          {
            name: "esofago",
            percent: 12
          },
          {
            name: "sitio primario desconocido",
            percent: 308
          },
          {
            name: "otros",
            percent: 117
          }
        ]
      }
    ]
  },
  {
    name: "Survey Questions",
    children: [
      {
        name: "Prevalence",
        children: [
          {
            name: "prostata",
            percent: 38
          },
          {
            name: "sistema hematopoyetico",
            percent: 18
          },
          {
            name: "colon",
            percent: 13
          },
          {
            name: "recto",
            percent: 10
          },
          {
            name: "bronquio y pulmon",
            percent: 10
          },
          {
            name: "estomago",
            percent: 10
          },
          {
            name: "ganglios linfaticos",
            percent: 8
          },
          {
            name: "cerebro",
            percent: 8
          },
          {
            name: "union rectosigmoidea",
            percent: 7
          },
          {
            name: "higado y conductos biliares intrahepaticos",
            percent: 6
          },
          {
            name: "sitio primario desconocido",
            percent: 4
          },
          {
            name: "otros (piel, mama, esofago)",
            percent: 28
          }
        ]
      }
    ]
  },
  {
    name: "Survey Questions",
    children: [
      {
        name: "Prevalence",
        children: [
          {
            name: "mama",
            percent: 308
          },
          {
            name: "sistema hematopoietico",
            percent: 66
          },
          {
            name: "cervix uterino",
            percent: 60
          },
          {
            name: "bronquio y pulmon",
            percent: 38
          },
          {
            name: "ganglios linfaticos",
            percent: 36
          },
          {
            name: "colon",
            percent: 33
          },
          {
            name: "cuerpo del utero",
            percent: 28
          },
          {
            name: "recto",
            percent: 16
          },
          {
            name: "encefalo",
            percent: 15
          },
          {
            name: "primario desconocido",
            percent: 13
          },
          {
            name: "Otros (Higado, Piel, Ovario)",
            percent: 137
          }
        ]
      }
    ]
  },
  {
    name: "Survey Questions",
    children: [
      {
        name: "Prevalence",
        children: [
          {
            name: "mama",
            percent: 80
          },
          {
            name: "sistema hematopoietico",
            percent: 28
          },
          {
            name: "cervix uterino",
            percent: 23
          },
          {
            name: "bronquio y pulmon",
            percent: 15
          },
          {
            name: "colon",
            percent: 13
          },
          {
            name: "estomago",
            percent: 10
          },
          {
            name: "cuerpo del utero",
            percent: 8
          },
          {
            name: "recto",
            percent: 8
          },
          {
            name: "cerebro",
            percent: 7
          },
          {
            name: "ganglios linfaticos",
            percent: 7
          },
          {
            name: "sitio primario desconocido",
            percent: 4
          },
          {
            name: "otros (ovario, cerebro, glandula tiroidal)",
            percent: 52
          }
        ]
      }
    ]
  }
];

// let prapareFiltered = prapareData[4].children[0].children;
let text = [];
let updateDomains = array => {
  x.domain([
    0,
    d3.max(array, function(d) {
      return d.percent;
    })
  ]);

  y.domain(
    array.map(function(d, i) {
      let firstWord =
        d.name
          .split(" ")[0]
          .charAt(0)
          .toUpperCase() + d.name.split(" ")[0].slice(1);

      nameArray = d.name.split(" ");

      text.push(firstWord + " " + nameArray.slice(1).join(" "));

      return text[i];
    })
  );
};

let selectData = (data, i, j) => {
  return data[i].children[j].children;
};
let i = 0;
let prapareFiltered;
prapareFiltered = selectData(prapareData, i, 0);

// set the dimensions and margins of the graph
var margin = { top: 20, right: 450, bottom: 30, left: 275 },
  width = 1200 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// set the ranges
var y = d3
  .scaleBand()
  .range([height, 0])
  .padding(0.1);

var x = d3.scaleLinear().range([0, width]);

updateDomains(prapareFiltered);
// set graph title
let titleArray = [
  "Cuadro 6: Localizacion de los sitios primarios ambos sexos, INCART 2017",
  "Cuadro 7: Localizacion de los sitios primarios ambos sexos, INCART primer semestre 2018",
  "Cuadro 8: Distribucion de tumores primarios en el sexo masculino, INCART 2017",
  "Cuadro 9: Distribucion de tumores primarios en el sexo masculino, INCART primer semestre 2018",
  "Cuadro 10: Distribucion de tumores primarios en el sexo femenino, INCART 2017",
  "Cuadro 11: Distribucion de tumores primarios en el sexo femenino, INCART primer semestre 2018"
];
let appendTitle = (array, i) => {
  let titleSvg = d3
    .select("body")
    .append("svg")
    .style("font-size", "24px")
    .style("font-weight", "bold")
    .attr("id", "title")
    .attr("width", width + margin.left + margin.right)
    .attr("height", "100px")
    .append("text")
    .attr(
      "transform",
      "translate(" + margin.left * 4 + "," + margin.top * 1.5 + ")"
    )
    .attr("text-anchor", "end")
    .text(array[i]);
};

appendTitle(titleArray, 0);

// let subTitle = d3
//   .select("#title")
//   .append("text")
//   .style("font-size", "26px")
//   .style("font-weight", "normal")
//   .style("font-style", "italic")
//   .attr("text-anchor", "end")
//   .attr(
//     "transform",
//     "translate(" + margin.left * 4.47 + "," + margin.top * 3 + ")"
//   )
//   .attr("id", "subtitleText");
// .text(
//   "Based on patient responses to select items from the PRAPARE assessment"
// );

// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left * 2 + "," + margin.top + ")");

// format the data
prapareFiltered.forEach(function(d) {
  d.percent = +d.percent;
});

// Scale the range of the data in the domains

// append the rectangles for the bar chart
let bars = svg
  .selectAll(".bars")
  .data(prapareFiltered)
  .enter()
  .append("g");

let barObjectArray = {
  y: [],
  height: []
};
bars
  .append("rect")
  .attr("class", function(d, i) {
    return `bar${i} bar`;
  })
  .attr("fill", "#5f89ad")
  .attr("width", function(d) {
    return x(d.percent);
  })
  .attr("y", function(d, i) {
    // console.log(d)
    barObjectArray.y.push(y(text[i]));
    barObjectArray.height.push(50);
    // console.log(y(text[i]));
    return y(text[i]);
  })
  .attr("height", y.bandwidth());

//add a value label to the right of each bar
bars
  .append("text")
  .attr("class", function(d, i) {
    return `label${i} label`;
  })
  //y position of the label is halfway down the bar
  .attr("y", function(d, i) {
    return barObjectArray.y[i] + barObjectArray.height[i] * 0.459;
  })
  //x position is 3 pixels to the right of the bar
  .attr("x", function(d) {
    return x(d.percent) + 5;
  })
  .text(function(d) {
    // console.log(d);
    return `${d.percent}`;
  })
  .style("font-weight", "bold");

$("#chartButton").on("click", function() {
  i++;

  if (i > 5) {
    i = 0;
  }

  prapareFiltered = selectData(prapareData, i, 0);

  // **************************** //

  applyFilter();
});

// call this whenever the filter changes
function applyFilter() {
  // console.log(i);
  // updateDomains(prapareFiltered);
  let data = prapareFiltered;

  x.domain([
    0,
    d3.max(prapareFiltered, function(d) {
      return d.percent;
    })
  ]);
  let text = [];
  y.domain(
    prapareFiltered.map(function(d, i) {
      let firstWord =
        d.name
          .split(" ")[0]
          .charAt(0)
          .toUpperCase() + d.name.split(" ")[0].slice(1);

      nameArray = d.name.split(" ");

      text.push(firstWord + " " + nameArray.slice(1).join(" "));

      return text[i];
    })
  );

  // update the bars

  d3.select("#title text")
    .data(data)
    .text(d => {
      return titleArray[i];
    });

  d3.selectAll(".bar")
    .data(data)
    .transition()
    .duration(1000)
    .attr("width", function(d) {
      // console.log(d);
      return x(d.percent);
    })
    .attr("height", function(d) {
      // console.log(d);
      return y.bandwidth();
    });
  d3.selectAll("g.tick text")
    .data(data)
    .text(d => {
      // console.log(d);
      return d.name;
    });

  d3.selectAll(".label")
    .data(data)
    .transition()
    .duration(1000)
    .attr("y", function(d, i) {
      return barObjectArray.y[i] + barObjectArray.height[i] * 0.459;
    })
    //x position is 5 pixels to the right of the bar
    .attr("x", function(d) {
      return x(d.percent) + 5;
    })
    .text(function(d) {
      // console.log(d);
      return `${d.percent}`;
    })
    .style("font-weight", "bold");
}
// add the x Axis
// svg
//   .append("g")
//   .attr("transform", "translate(0," + height + ")")
//   .style("font", "17px arial")
//   .call(d3.axisBottom(x));

// add the y Axis
svg
  .append("g")
  .style("font", "25px arial")
  .call(d3.axisLeft(y));

// hide domain and and lines
$("path.domain").attr("opacity", 0);

$(".tick line").attr("opacity", 0);
