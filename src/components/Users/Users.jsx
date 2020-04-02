import React from 'react';
import style from './users.module.css';
import * as axios from 'axios';

class Users extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <div>
      {
        this.props.users.map(u => <div key={u.id} className={style.userContainer}>
          <span>
            <div>
              <img src={u.photos.small != null ? u.photos.small : "https://yt3.ggpht.com/a/AATXAJzaqQ27AzdLIzhcQjJyZSE-7bzisejMwGeevw=s900-c-k-c0xffffffff-no-rj-mo"} className={style.userPhoto} />
            </div>
            <div>
              {u.followed ?
                <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> :
                <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
            </div>
          </span>
          <span className={style.userInfo}>
            <span className={style.username}>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{'u.location.city'}</div>
              <div>{'u.location.country'}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  }
}

export default Users;