import React from 'react';
import style from './users.module.css';
import * as axios from 'axios';

let Users = (props) => {

  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUsers(response.data.items);
      });
    /*
        props.setUsers([
          {
            id: 1,
            photoURL: 'https://speedflip.ru/temp/avatar/34511avatar.jpeg',
            followed: true,
            fullname: 'Ivan',
            status: 'Look at this DUUUUDE',
            location: { city: 'Moscow', country: 'Russia' }
          },
          {
            id: 2,
            photoURL: 'https://cdn1.flamp.ru/2833daf619c6711113e8c572955aede8_100_100.jpg',
            followed: false,
            fullname: 'Masha',
            status: 'Hola!',
            location: { city: 'Minsk', country: 'Belarus' }
          },
          {
            id: 3,
            photoURL: 'https://im0-tub-ru.yandex.net/i?id=68e86db384b4959374e9d37d1f17c492&n=16',
            followed: false,
            fullname: 'Andrew',
            status: 'HeheHE',
            location: { city: 'Kiev', country: 'Ukraine' }
          }
        ]);
        */
  }

  return <div>
    {
      props.users.map(u => <div key={u.id} className={style.userContainer}>
        <span>
          <div>
            <img src={u.photos.small != null ? u.photos.small : "https://yt3.ggpht.com/a/AATXAJzaqQ27AzdLIzhcQjJyZSE-7bzisejMwGeevw=s900-c-k-c0xffffffff-no-rj-mo"} className={style.userPhoto} />
          </div>
          <div>
            {u.followed ?
              <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> :
              <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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

export default Users;