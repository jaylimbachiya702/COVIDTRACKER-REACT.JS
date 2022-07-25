import React,{useEffect, useState} from 'react';
import "./covid.css"


const Covid = () => {

  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try{
      const res = await fetch("https://disease.sh/v3/covid-19/countries/india?strict=true");
      const actualData = await res.json();
      // console.log(actualData);
      setData(actualData);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
      getCovidData();
    }, []);
    

  return (
    <>
    <section>
      <h1>COVID-19 CORONAVIRUS TRACKER</h1>
    <div className='app__header'>
        </div>

        <div className="app__stats">
      <ul>
        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>
                    <span> OUR </span> COUNTRY</p>
                    <p className='card__total card__small'>
                    INDIA</p>
                </div>
            </div>
        </li>

        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>
                    <span> ACTIVE </span> CASES</p>
                    <p className='card__total card__small'>
                    {data.active}</p>
                </div>
            </div>
        </li>

        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>
                    <span> TOTAL </span> CASES</p>
                    <p className='card__total card__small'>
                    {data.cases}</p>
                </div>
            </div>
        </li>

        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>
                    <span> TOTAL </span> RECOVERED</p>
                    <p className='card__total card__small'>
                    {data.recovered}</p>
                </div>
            </div>
        </li>

        <li className='card'>
            <div className='card__main'>
                <div className='card__inner'>
                    <p className='card__name'>
                    <span> TOTAL </span> DEATHS</p>
                    <p className='card__total card__small'>
                    {data.deaths}</p>
                </div>
            </div>
        </li>

      </ul>
      </div>

      </section>
    </>
  );
};

export default Covid