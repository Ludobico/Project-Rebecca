import React, { useEffect } from "react";
import "./Info.css";
import Header from "../Header";
import hoverEffect from "hover-effect";
import watson from "../../Static/Img/watson.jpg";
import watson1 from "../../Static/Img/watson1.jpg";
import Crystal from "../../Static/Img/Heffect.jpg";
import kabuki from "../../Static/Img/kabuki1.jpg";
import kabuki1 from "../../Static/Img/kabuki2.jpg";

const Info = () => {
  useEffect(() => {
    var image_animate1 = new hoverEffect({
      parent: document.querySelector(".con1"),
      intensity: 0.3,
      image1: watson,
      image2: watson1,
      displacementImage: Crystal,
    });
    var image_animate2 = new hoverEffect({
      parent: document.querySelector(".con2"),
      intensity: 0.3,
      image1: kabuki,
      image2: kabuki1,
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
            <div className="info_footer_quote">V 의 아파트</div>
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
      <div className="info_container">
        <div className="info_item">
          <div className="info_item_header">
            <div className="info_item_header_heading">Kabuki</div>
            <div className="info_item_header_heading2">2023</div>
          </div>
          <div className="info_item-image con2"></div>
          <div className="info_footer">
            <div className="info_footer_quote">
              리지의 바, 레지나 존스의 본거지, 호-오 카지노
            </div>
          </div>
        </div>
        <div className="info_infomation">
          <span style={{ color: "yellow" }}>Kabuki</span> was once the pride of
          the Japanese medical corporations in this part of{" "}
          <span style={{ color: "yellow" }}>Night City.</span> It was adjacent
          to the famous Med Center, and as a result the whole area flourished
          and prospered. Nowadays, with all the other corpos either dissolved by
          <span style={{ color: "yellow" }}> Arasaka</span> or transferred to
          the other bank of the gulf, Kabuki is possibly the poorest
          sub-district of the city outside of Pacifica.
          <br />
          <br />
          The area was quickly repopulated with Chinese diaspora before turning
          into the shadiest bazaar imaginable. During the daytime Kabuki has
          narrow, tangled alleyways full of chop suey joints, seedy cosmetic
          boutiques, and cheap junk shops, all decorated with Chinese lampions
          and flickering neon lights. During the night, Kabuki is the heart of
          Night City's black market for all manner of illegal transactions.
          Implants, organs, combat drugs, prototype cyber augmentations,
          steroids, synth-viruses, snuff braindance recordings-it's all there to
          buy if you know the right places and people. There are allegedly
          several black clinics operating in hidden basements or backrooms that
          install illicit military and prototype{" "}
          <span style={{ color: "yellow" }}>cyberware</span>, right from the
          labs of Chiba City or top-notch Scandinavian bio-clinics or so the
          ripperdocs all claim. Some of the merchants in the hood are supplied
          by Scavengers.
        </div>
      </div>
    </div>
  );
};

export default Info;
