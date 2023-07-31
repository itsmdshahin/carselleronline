
import "./home.scss";
import "../../styles/global.scss";
import TopBox from "../TopBox/TopBox";
import ChartBox from "../ChartBox/ChartBox"; // Assuming ChartBox is a component
import { ChartBoxUser, Profite, BarChartdata, ChartBoxUsers } from '../../data.js';
import BarCharts from "../BarCharts/BarCharts";
import Userlist from "../UserList/Userlist";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...ChartBoxUser} />
      </div>
      <div className="box box3">
        <ChartBox {...Profite} />
      </div>
      <div className="box box4">
        <ChartBox {...ChartBoxUser} />
      </div>
      <div className="box box5">
        <Userlist />
      </div>
      <div className="box box6">
        <ChartBox {...ChartBoxUsers} />
      </div>
      {/* <div className="box box7">Box7</div> */}
      {/* <div className="box box8">Box1</div>
      <div className="box box9">Box1</div> */}
    </div>
  );
};

export default Home;
