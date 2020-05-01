import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectHelpers";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


let initialState = {

  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [2, 3]
}

const usersReducer = (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case FOLLOW: {
      stateCopy.users = updateObjectInArray(state.users, action.userID, "id", { followed: true });
      return stateCopy;
    }

    case UNFOLLOW: {
      stateCopy.users = updateObjectInArray(state.users, action.userID, "id", { followed: false });
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

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: (action.isFetching
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter(id => id != action.userID))
      };
    }

    default:
      return state;
  }
}

export const followSuccess = (userID) => ({ type: FOLLOW, userID });
export const unfollowSuccess = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setUsersTotalCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userID) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userID });

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let response = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(setUsers(response.data.items));
    dispatch(setUsersTotalCount(response.data.totalCount));
    dispatch(toggleIsFetching(false));
  }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));

  let response = await apiMethod(userId);

  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
  return (dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI);
    let actionCreator = followSuccess;

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI);
    let actionCreator = unfollowSuccess;

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
  }
}

export default usersReducer;