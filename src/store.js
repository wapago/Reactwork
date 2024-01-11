// 액션
export const increase = (username) => ({type:"INCREMENT", payload: username});
export const decrease = (username) => ({type:"DECREMENT", payload: username});

// 상태
const initState = {
    number: 1,
    username: "Kim Chan-ho"
}

// 액션의 결과를 걸러냄
const reducer = (state = initState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return {number : state.number + 1, username: action.payload}; // return되면 그걸 호출한 쪽에서 받는게 아니라, return되는 순간 ui변경이 됨.
        case "DECREMENT":
            return {number : state.number - 1, username: action.payload};
        default:
            return state;
    }
}

export default reducer;

