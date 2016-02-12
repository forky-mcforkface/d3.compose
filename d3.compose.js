import d3 from 'd3';
import utils from './src/utils';
import helpers from './src/helpers';
import chart, {Chart} from './src/chart';
import component, {Component} from './src/component';

const d3c = d3.compose = {
  VERSION: '{version}',
  utils,
  helpers,
  chart,
  Chart,
  component,
  Component
};

export default d3c;
