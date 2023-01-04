import React from "react";

import withPaginationList from "../../hoc/withPaginationList";

import {StyledListGroup} from "./styles";
import TypeItem from "./components/TypeItem";
import {connect} from "react-redux";
import constants from "../../constants";

const List = ({data}) => {
    return (
        <StyledListGroup>
            {data?.map((item) => (
                <TypeItem data={item} key={item.courseTypeId} />
            ))}
        </StyledListGroup>
    )
}

const mapStateToProps = state => ({
    listData: state.courseTypes.typeList,
    pagination: state.courseTypes.pagination
})

export default connect(mapStateToProps)(withPaginationList(List, {
    label: "Course Type",
    routeToAdd: constants.ROUTES.ADD_COURSE_TYPE
}));
