import ReactDOM from "react-dom";
import FaceBookIcon from "../UI/Icons/FaceBookIcon";
import WhatsappIcon from "../UI/Icons/WhatsappIcon";
import LinkedinIcon from "../UI/Icons/LinkedinIcon";
import TelegramIcon from "../UI/Icons/TelegramIcon";
import TwitterIcon from "../UI/Icons/TwitterIcon";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";

const Backdrop = ({ closeModal }: { closeModal: () => void }) => {
  return <div className="modal-container" onClick={closeModal} />;
};

const SocialShareOverlay = ({
  text,
  url,
  closeModal,
}: {
  text: string;
  url: string;
  closeModal: () => void;
}) => {
  const hideModalHandler = (e: any) => {
    if (e.target.className === "social-share__buttons") return;
    closeModal();
  };

  return (
    <div className="social-share">
      <h2>Share this {text}</h2>
      <div className="social-share__buttons" onClick={hideModalHandler}>
        <FacebookShareButton url={window.location.href}>
          <div className="share-icon-box">
            <FaceBookIcon />
          </div>
        </FacebookShareButton>
        <TwitterShareButton url={window.location.href}>
          <div className="share-icon-box">
            <TwitterIcon />
          </div>
        </TwitterShareButton>
        <LinkedinShareButton url={window.location.href}>
          <div className="share-icon-box">
            <LinkedinIcon />
          </div>
        </LinkedinShareButton>
        <WhatsappShareButton url={window.location.href}>
          <div className="share-icon-box">
            <WhatsappIcon />
          </div>
        </WhatsappShareButton>
        <TelegramShareButton url={window.location.href}>
          <div className="share-icon-box">
            <TelegramIcon />
          </div>
        </TelegramShareButton>
      </div>
      <p>We appreciate your sharing!</p>
    </div>
  );
};

const SocialShareModal = ({
  text,
  closeModal,
  url,
}: {
  text: string;
  url: string;
  closeModal: () => void;
}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={closeModal} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <SocialShareOverlay text={text} closeModal={closeModal} url={url} />,
        document.getElementById("modal-root")!
      )}
    </>
  );
};

export default SocialShareModal;