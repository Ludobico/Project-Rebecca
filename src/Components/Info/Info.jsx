import React, { useEffect, useState } from "react";
import "./Info.css";
import Header from "../Header";
import hoverEffect from "hover-effect";
import watson from "../../Static/Img/watson.jpg";
import watson1 from "../../Static/Img/watson1.jpg";
import Crystal from "../../Static/Img/Heffect.jpg";
import kabuki from "../../Static/Img/kabuki1.jpg";
import kabuki1 from "../../Static/Img/kabuki2.jpg";
import arroyo from "../../Static/Img/Arroyo.jpg";
import arroyo1 from "../../Static/Img/Arroyo1.jpg";
import japan from "../../Static/Img/japan.jpg";
import japan1 from "../../Static/Img/japan1.jpg";
import TextTransition from "react-text-transition";
import useZustand from "../Store/Store";
import Fade from "react-reveal/Fade";

const Info = () => {
  const { Numberpad1 } = useZustand();
  const { Numberpad2 } = useZustand();
  const { Numberpad3 } = useZustand();
  const { Numberpad4 } = useZustand();
  const { Numberpad5 } = useZustand();
  console.log(Numberpad1);
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
    var image_animate3 = new hoverEffect({
      parent: document.querySelector(".con3"),
      intensity: 0.3,
      image1: arroyo,
      image2: arroyo1,
      displacementImage: Crystal,
    });
    var image_animate3 = new hoverEffect({
      parent: document.querySelector(".con4"),
      intensity: 0.3,
      image1: japan,
      image2: japan1,
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
            <div className="info_item_header_heading2">{Numberpad1}</div>
          </div>
          <div className="info_item-image con1"></div>
          <div className="info_footer">
            <div className="info_footer_quote">V 의 아파트</div>
          </div>
        </div>
        <div className="info_infomation">
          Watson was originally the military city of{" "}
          <span style={{ color: "yellow" }}>North Oak</span>, including some
          parts of the neighboring Westbrook. After the Fourth Corporate War,
          the region was flooded by refugees who built their own tent camps
          around the area. As the rebuilding of Night City begun, the whole of
          the old North Oak was renamed the Watson Development, with plans to
          build a massive corporate center adjacent to the one in{" "}
          <span style={{ color: "yellow" }}>City Center.</span>
          <br />
          <br />
          For a period of time Watson was a thriving district. People visited
          for the various Nightclubs, skyscrapers, corporate offices, a top-end
          medcenter, and even the biggest black market in all of Night City.
          Many Japanese corporations invested billions of eurodollars into the
          district competing with the giant{" "}
          <span style={{ color: "yellow" }}>Arasaka</span>, their intent was to
          make it self-sufficient and prosperous. Everything changed after the
          Unification War, and Arasaka returned to the city. It bled the
          corporations dry and changed Watson forever. Without a stable
          financial sector, the glory days of Watson had ended: the{" "}
          <span style={{ color: "yellow" }}>Northside Industrial District</span>
          , once a cutting edge technological park, could no longer provide
          jobs, leaving people out on the street. Arasaka took advantage of the
          economic vacuum by taking over the district for its gain. The Arasaka
          Corporation finally got the port-access in the waterfront that it had
          always wanted.
        </div>
      </div>
      <div className="info_container">
        <div className="info_item">
          <div className="info_item_header">
            <div className="info_item_header_heading">Kabuki</div>
            <div className="info_item_header_heading2">{Numberpad2}</div>
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
          and prospered. Nowadays, with all the other corpos either dissolved by{" "}
          <span style={{ color: "yellow" }}>Arasaka</span> or transferred to the
          other bank of the gulf, Kabuki is possibly the poorest sub-district of
          the city outside of Pacifica.
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
      <Fade bottom>
        <div className="info_container">
          <div className="info_item">
            <div className="info_item_header">
              <div className="info_item_header_heading">Arroyo</div>
              <div className="info_item_header_heading2">{Numberpad3}</div>
            </div>
            <div className="info_item-image con3"></div>
            <div className="info_footer">
              <div className="info_footer_quote">
                데이비드 마르티네즈가 어머니와 함께 살았던 도시
              </div>
            </div>
          </div>
          <div className="info_infomation">
            The Arroyo district is always under constant construction, and in
            2077 it consists of an old-fashioned power plant, robot factories, a
            logistics center, and a gigantic junkyard. Not every corporate
            investments have turned out to be profitable, and a significant
            number of buildings in this district are unfinished, either
            partially constructed or simply laying in complete ruin. All the
            operational high-tech sites, including the{" "}
            <span style={{ color: "yellow" }}>Arasaka</span> factory or
            Petrochem-Betterlife's power plants, are restricted areas with their
            own security forces. The reason being for such high security is that
            this district belongs to the{" "}
            <span style={{ color: "yellow" }}>6th Street</span> gang, they
            control many abandoned factories and heavy equipment storage areas
            in the district.
          </div>
        </div>
      </Fade>
      <Fade bottom>
        <div className="info_container">
          <div className="info_item">
            <div className="info_item_header">
              <div className="info_item_header_heading">Japantown</div>
              <div className="info_item_header_heading2">{Numberpad4}</div>
            </div>
            <div className="info_item-image con4"></div>
            <div className="info_footer">
              <div className="info_footer_quote">
                루시가 데이비드와 동거한 펜트하우스
              </div>
            </div>
          </div>
          <div className="info_infomation">
            Primarily inhabited by people of Japanese descent, Japantown during
            daytime is usually crowded with tourists for whom the many bars,
            fancy restaurants, gaming parlors, the Cherry Blossom Market, and
            Shinto temple are mandatory destinations in{" "}
            <span style={{ color: "yellow" }}>Night City.</span> Here one can
            also find the many love hotels, kyabakuras and hostess clubs whose
            lights glow in thick abundance along Japantown's streets. Clean and
            safe by day, this district is a perfect spot for sightseeing, and
            it's just one bridge away from the famous{" "}
            <span style={{ color: "yellow" }}>Corpo Plaza</span>, any one of
            whose many hotels are perfect places to stay.
            <br />
            <br />
            However Japantown also has another side to it. After dark, Japantown
            becomes the party district for the rich, corpos and tourists alike.
            The corpos are looking to blow off some steam after another day of
            the exhausting rat race. The tourists are interested in more sublime
            entertainment and a wild night in Night City. Both groups visit the
            same fancy brothels, lose their money in casinos, and get drunk to
            the point of blackout. Both groups also have to be careful to not
            cross the <span style={{ color: "yellow" }}>Tyger Claws</span>, the
            gangers that rule the district during night hours.
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Info;
