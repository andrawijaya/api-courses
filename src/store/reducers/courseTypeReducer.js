import typeList from "../../fixtures/courseType.json";

const {count, totalPage, page, size} = typeList;
const initialState = {
    typeList: [...typeList.data],
    pagination: {
        count, totalPage, page, size
    }
}

const courseTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...initialState }
    }
}

export default courseTypeReducer;
