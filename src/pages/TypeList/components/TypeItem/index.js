import React from "react";
import {StyledListItem} from "./styles";

const TypeItem = ({data}) => {
    return (
        <StyledListItem action>
            <h3 className="lead">{data?.typeName}</h3>
        </StyledListItem>
    )
}

export default React.memo(TypeItem);
