import React, { useEffect } from "react";
import "./Info.css";
import Header from "../Header";
import hoverEffect from "hover-effect";
import watson from "../../Static/Img/watson.jpg";
import watson1 from "../../Static/Img/watson1.jpg";
import Crystal from "../../Static/Img/Heffect.jpg";

const Info = () => {
  useEffect(() => {
    var image_animate = new hoverEffect({
      parent: document.querySelector(".con1"),
      intensity: 0.3,
      image1: watson,
      image2: watson1,
      displacementImage: Crystal,
    });
  });
  return (
    <div className="info_top_div">
      <Header />
      <div className="info_container">
        <div className="info_item">
          <div className="info_item_header">
            <div className="info_item_header_heading">Watson</div>
            <div className="info_item_header_heading2">2023</div>
          </div>
          <div className="info_item-image con1"></div>
          <div className="info_footer">
            <div className="info_footer_quote">
              V 가 사는 아파트가 있는 곳입니다.
            </div>
          </div>
        </div>
        <div className="info_infomation">
          Watson was originally the military city of North Oak, including some
          parts of the neighboring Westbrook. After the Fourth Corporate War,
          the region was flooded by refugees who built their own tent camps
          around the area. As the rebuilding of Night City begun, the whole of
          the old North Oak was renamed the Watson Development, with plans to
          build a massive corporate center adjacent to the one in City Center.
          <br />
          <br />
          For a period of time Watson was a thriving district. People visited
          for the various Nightclubs, skyscrapers, corporate offices, a top-end
          medcenter, and even the biggest black market in all of Night City.
          Many Japanese corporations invested billions of eurodollars into the
          district competing with the giant Arasaka, their intent was to make it
          self-sufficient and prosperous. Everything changed after the
          Unification War, and Arasaka returned to the city. It bled the
          corporations dry and changed Watson forever. Without a stable
          financial sector, the glory days of Watson had ended: the Northside
          Industrial District, once a cutting edge technological park, could no
          longer provide jobs, leaving people out on the street. Arasaka took
          advantage of the economic vacuum by taking over the district for its
          gain. The Arasaka Corporation finally got the port-access in the
          waterfront that it had always wanted.
        </div>
      </div>
    </div>
  );
};

export default Info;
