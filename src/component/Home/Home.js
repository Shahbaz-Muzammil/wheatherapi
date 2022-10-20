import React from "react";
import "../common.css";
export const Home = ({ data, query, checkStatus }) => {
  console.log("props", data);
  // let cloudy="#cad2c5"

  return (
    <div
      style={{
        textAlign: "center",
        height: "500px",
        width: "900px",
        position: "absolute",
        top: "120%",
        left: "-53%",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37",
        backdropFilter: "blur( 4px )",
        borderRadius: " 10px",
        border: " 1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      {data.map((elem) => {
        const wheatherType = elem.current.condition.text;
        return (
          <div
            className="weather-bg"
            style={{
              backgroundImage:
                (wheatherType === "Overcast"
                  ? `url(https://cdn.pixabay.com/photo/2016/08/08/23/25/clouds-1579565_960_720.jpg)`
                  : "") ||
                (wheatherType === "Sunny"
                  ? "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1tlzd6i_5QsAPvnL1MqfkusWsRpHvj9y78w&usqp=CAU)"
                  : "") ||
                (wheatherType === "Partly cloudy"
                  ? "url(https://media.istockphoto.com/photos/dramatic-scene-of-sudden-weather-change-wherein-huge-balls-of-rainy-picture-id1279089315?k=20&m=1279089315&s=612x612&w=0&h=Eqgv4t1Gixp4bt9RoQu6rbiq9tmoXvW5IBcMzqhq_QA=)"
                  : "") ||
                (wheatherType === "Light rain shower"
                  ? "url(https://cdn.pixabay.com/photo/2015/11/22/15/16/lightning-1056419_960_720.jpg)"
                  : "") ||
                (wheatherType === "Light rain shower" ? "" : "") ||
                (wheatherType === "Clear"
                  ? "url(https://cdn.pixabay.com/photo/2016/09/29/14/12/background-1702938__340.jpg)"
                  : "") ||
                (wheatherType === "Light rain"
                  ? "url(https://cdn.pixabay.com/photo/2016/11/23/15/40/puddle-1853607__340.jpg)"
                  : "") ||
                (wheatherType === "Moderate rain"
                  ? "url(https://media.istockphoto.com/photos/view-of-the-street-surface-during-rain-picture-id982222848?k=20&m=982222848&s=612x612&w=0&h=Rzr3lmIPjRyCWwNL5N2nqwDxKOBDnLmTAuxXhrc6YUw=)"
                  : "") ||
                (wheatherType === "Mist"
                  ? "url(https://cdn.pixabay.com/photo/2016/07/28/08/50/sunbeams-1547273__340.jpg)"
                  : "") ||
                (wheatherType === "Patchy rain possible"
                  ? "url(https://cdn.pixabay.com/photo/2016/06/25/17/36/rain-1479303__340.jpg)"
                  : "") ||
                (wheatherType === "Moderate or heavy rain shower"
                  ? "url(https://media.istockphoto.com/photos/thunderstorm-in-the-sea-with-big-waves-and-lightning-picture-id1058410098?k=20&m=1058410098&s=612x612&w=0&h=MS955_nqBWtrS9-8BqkMIDyTqKexWZ-ekdQ7i_rh8gU=)"
                  : ""),
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backdropFilter: "blur( 50px )",
            }}
          >
            {checkStatus === false ? (
              <h1>data not found</h1>
            ) : (
              <>
                <h1>Country Name {elem.location.country}</h1>
                <h1>City Name : {elem.location.name}</h1>
                <img src={elem.current.condition.icon} alt="" />
                <h1>Time Zone : {elem.location.tz_id}</h1>
                <h1>REGION :{elem.location.region}</h1>
                <h1>Local Date & Time : {elem.location.localtime}</h1>
                <h1>{elem.current.condition.text}</h1>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
