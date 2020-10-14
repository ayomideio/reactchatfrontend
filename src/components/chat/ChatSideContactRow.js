import React from 'react';
import { connect } from 'react-redux'
import { fetchConvMessages } from '../../Redux/actions/chatActions'
import { truncate } from '../../utils/genericUtils'
import Avatar from '@material-ui/core/Avatar'
import Moment from 'react-moment';
import 'moment-timezone';
import '../../styles/chat/ChatSideContactRow.css'
import { startChatAction } from '../../Redux/actions/chatSocketActions'


const ChatSideContactRow = ({ id, username, image_url, lastmsg_content, sent_at, unraed_count, fetchConvMessages, startChatAction, user }) => {

    const handleClick = () => {
        let data = {
            id: id,
            username: username,
            image_url: image_url
        }
        fetchConvMessages(data)
        startChatAction({uid1: user.id, uid2: id})
    }

    return ( 
        <div className='Contact__row' onClick={handleClick}>
            <Avatar src={image_url} />   
            <span className="contact__row-text">
                <h4>{ username }</h4>
                <p>{ truncate(lastmsg_content, 30) }</p>
            </span>
            <span className="contact__row-indicators">
                <p><Moment fromNow ago>{ sent_at }</Moment></p>
                { unraed_count > 0 && <p className="badge">{ unraed_count }</p> }
            </span>
        </div>
     );
}
 
function mapStateToProps(store) {
    return {
        user: store.auth.user,
    }
}

export default connect(mapStateToProps, { fetchConvMessages, startChatAction })(ChatSideContactRow)