import React, { useState } from 'react';
import {
  BsArrowUpShort,
  BsCurrencyDollar,
  BsBorderStyle,
  BsArrowDownShort,
  BsWallet,
  BsHandbag,
} from "react-icons/bs";
import Select from 'react-select';
import Chart from '../components/Chart';
import Doghnut from '../components/Doghnut';
import Datatable from '../components/Datatable';


const options = [
  { value: 'Quarterly', label: 'quarterly' },
  { value: 'half-yearly', label: 'half-yearly' },
  { value: 'annually', label: 'annually' },
];

const Home = () => {

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <div className="main-container">
        <div className="main-cards">
          <div className="card">
            <div className="card-inner">
              <div className="card-inner-left first">
                <BsCurrencyDollar className="card_icon card_icon-1" />
              </div>
              <div className="card-inner-right">
                <small>Earning</small>
                <h3>$198k</h3>
                <p>
                  <span className="trend-1">
                    <BsArrowUpShort className="up" /> 37.8%
                  </span>
                  this month
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <div className="card-inner-left second">
                <BsBorderStyle className="card_icon card_icon-2" />
              </div>
              <div className="card-inner-right">
                <small>Orders</small>
                <h3>$2.4k</h3>
                <p>
                  <span className="trend-2">
                    <BsArrowDownShort className="up" /> 37.8%
                  </span>
                  this month
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <div className="card-inner-left third">
                <BsWallet className="card_icon card_icon-3" />
              </div>
              <div className="card-inner-right">
                <small>Balance</small>
                <h3>$2.4k</h3>
                <p>
                  <span className="trend-2">
                    <BsArrowDownShort className="up" /> 37.8%
                  </span>
                  this month
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-inner">
              <div className="card-inner-left fourth">
                <BsHandbag className="card_icon card_icon-4" />
              </div>
              <div className="card-inner-right">
                <small>Total Sales</small>
                <h3>$89k</h3>
                <p>
                  <span className="trend-1">
                    <BsArrowUpShort className="up" /> 11%
                  </span>
                  this week
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="charts">
          <div className="charts-wrapper">
            <div className="bar-chart">
              <div className="barchart-header">
                <div className="barchart-header-lsec">
                <h2>Overview</h2>
                <small>monthly earning</small>
                </div>
                <div className="barchart-header-rsec">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  className='selected'
                />
                </div>
              </div>
              <div className="bargraph">
                <Chart/>
              </div>
            </div>
            <div className="donughtchart">
              <Doghnut/>
            </div>
          </div>
        </div>
        <div className="datatable">
          <Datatable/>
        </div>
      </div>
    </>
  );
};

export default Home;
