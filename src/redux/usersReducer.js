const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {

  users: [
    /*
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
    */
  ]

}

const usersReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case FOLLOW: {
      stateCopy.users = state.users.map(u => {
        if (u.id === action.userID)
          return { ...u, followed: true };
        return u;
      });
      return stateCopy;
    }

    case UNFOLLOW: {
      stateCopy.users = state.users.map(u => {
        if (u.id === action.userID)
          return { ...u, followed: false };
        return u;
      });
      return stateCopy;
    }

    case SET_USERS: {
      stateCopy.users = [...state.users, ...action.users];
      return stateCopy;
    }

    default:
      return state;
  }
}

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;