import { ArrowBackIosOutlined } from "@material-ui/icons";
import "./watch.scss"
const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
            <ArrowBackIosOutlined />
            Home
            </div>
            <video className="video" autoPlay progress controls src="/Videos/trailer.mp4"/>
        </div>
    );
}

export default Watch;
