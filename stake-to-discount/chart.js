import * as echarts from 'echarts';

var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

var usuarios = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000];

var earnings = {
  '10,000,000 ADA': 197590,
  '20,000,000 ADA': 387590,
  '30,000,000 ADA': 577590,
  '40,000,000 ADA': 767590,
  '50,000,000 ADA': 957590
};

function calcularSerie(valor) {
  return usuarios.map(function (u) {
    return valor / u;
  });
}

option = {
  tooltip: {
    trigger: 'axis'
  },
  title: {
    text: "Stake operator's annual earnings (ADA/Year) converted into discounts.",
    left: 'center'
  },
  legend: {
    top: 'bottom'
  },
  xAxis: {
    type: 'category',
    name: 'Discounts in one year.',
    data: usuarios
  },
  yAxis: {
    type: 'value',
    name: 'Discount amount',
    axisLabel: {
      formatter: function (value) {
        return value + ' ADA';
      }
    }
  },
  series: [
    {
      name: '10,000,000 ADA (Staked)',
      type: 'line',
      data: calcularSerie(earnings['10,000,000 ADA'])
    },
    {
      name: '20,000,000 ADA',
      type: 'line',
      data: calcularSerie(earnings['20,000,000 ADA'])
    },
    {
      name: '30,000,000 ADA',
      type: 'line',
      data: calcularSerie(earnings['30,000,000 ADA'])
    },
    {
      name: '40,000,000 ADA',
      type: 'line',
      data: calcularSerie(earnings['40,000,000 ADA'])
    },
    {
      name: '50,000,000 ADA',
      type: 'line',
      data: calcularSerie(earnings['50,000,000 ADA'])
    }
  ]
};

option && myChart.setOption(option);
