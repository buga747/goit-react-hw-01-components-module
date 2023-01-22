import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem'
import css from './Friendlist.module.css'

 function FriendList({ friends }) {
    return (<ul className={css.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) =>
            <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline} /> )}
 
</ul>)
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export {FriendList}