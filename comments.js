import { COMMENTS } from "../shared/comments";
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, isLoading: false, errMess: null };
        
        case ActionTypes.COMMENTS_FAILED:
            return { ...state, isLoading: false, errMess: action };
        
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comment.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment)
            return { ...state, comments: state.comments.concat(comment) };
        
        default:
            return state;
    }
}