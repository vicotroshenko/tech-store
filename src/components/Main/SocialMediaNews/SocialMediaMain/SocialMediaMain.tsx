import Container from "../../../Container/Container";
import SocialMediaItem from "../SocialMediaItem/SocialMediaItem";
import { MediaList } from "./SocialMediaMain.styled";
import mediaPic1 from "../../../../images/media/media1.jpg";
import mediaPic2 from "../../../../images/media/media2.jpg";
import mediaPic3 from "../../../../images/media/media3.jpg";
import mediaPic4 from "../../../../images/media/media4.jpg";
import mediaPic5 from "../../../../images/media/media5.jpg";
import mediaPic6 from "../../../../images/media/media6.jpg";
import mediaPic7 from "../../../../images/media/media7.jpg";
import mediaPic8 from "../../../../images/media/media8.jpg";
import mediaPic9 from "../../../../images/media/media9.jpg";

const SocialMediaMain = () => {
  return (
    <Container>
      <MediaList>
        <li>
          <SocialMediaItem
            image={mediaPic1}
            alt={"news number 1"}
            text={
              "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
            }
            data={"01.09.2020"}
          />
        </li>
        <li>
          <SocialMediaItem
            image={mediaPic2}
            alt={"news number 2"}
            text={
              "As a gamer, superior sound counts for a lot. You need to hear enemies tiptoeing up behind you for a sneak attack or a slight change in the atmospheric music signaling a new challenge or task..."
            }
            data={"01.09.2020"}
          />
        </li>
        <li>
          <SocialMediaItem
            image={mediaPic3}
            alt={"news number 3"}
            text={
              "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
            }
            data={"01.09.2020"}
          />
        </li>
        <li>
          <SocialMediaItem
            image={mediaPic4}
            alt={"news number 4"}
            text={
              "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
            }
            data={"01.09.2020"}
          />
        </li>
        <li>
          <SocialMediaItem
            image={mediaPic5}
            alt={"news number 5"}
            text={
              "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
            }
            data={"01.09.2020"}
          />
        </li>
        <li>
          <SocialMediaItem
            image={mediaPic6}
            alt={"news number 6"}
            text={
              "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
            }
            data={"01.09.2020"}
          />
        </li>
        <li>
          <SocialMediaItem
            image={mediaPic7}
            alt={"news number 7"}
            text={
              "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
            }
            data={"01.09.2020"}
          />
        </li>
        <li>
          <SocialMediaItem
            image={mediaPic8}
            alt={"news number 8"}
            text={
              "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
            }
            data={"01.09.2020"}
          />
        </li>
        <li>
          <SocialMediaItem
            image={mediaPic9}
            alt={"news number 9"}
            text={
              "If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace..."
            }
            data={"01.09.2020"}
          />
        </li>
      </MediaList>
    </Container>
  );
};

export default SocialMediaMain;
