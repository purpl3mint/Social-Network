const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

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
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false

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
      stateCopy.users = action.users;
      return stateCopy;
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }

    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }

    default:
      return state;
  }
}

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unfollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer;