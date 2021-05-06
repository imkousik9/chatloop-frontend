import { Avatar } from "@material-ui/core";
import moment from "moment";
import { Link } from "react-router-dom";

const SidebarChat = ({
  lastMessageAt,
  conversationImage,
  chatRoomId,
  name,
  lastMessage,
  description,
}) => {
  return (
    <Link
      to={`/rooms/${chatRoomId}/${name}/${description}/${conversationImage.substring(
        conversationImage.lastIndexOf("/") + 1,
        conversationImage.length - 4
      )}`}
    >
      <div className="sidebar_chat">
        <Avatar src={conversationImage} />
        <div className="sidebar_chat_info">
          <h2> {name} </h2>
          <p className="sidebar_chat_elipse"> {lastMessage} </p>
          <p style={{ marginTop: "5px" }}>
            {" "}
            Last Active: {moment(lastMessageAt).format("lll")}{" "}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SidebarChat;
