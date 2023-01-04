import React from 'react';
import {Pagination as BoostrapPagination} from "react-bootstrap";

import {StyledPagination} from "./styles";

const Pagination = ({ totalPage, currentPage, onChangeCurrentPage }) => {
    const paginationItems = Array(totalPage).fill(0);

    const nextPageHandler = () => {
        if (currentPage !== totalPage) onChangeCurrentPage(currentPage + 1)
    }

    const prevPageHandler = () => {
        if (currentPage !== 1) onChangeCurrentPage(currentPage - 1)
    }

    const onChangePageHandler = (isActive, toPage) => () => {
        if (!isActive) onChangeCurrentPage(toPage)
    }

    return (
        <StyledPagination>
            <BoostrapPagination.Item
                disabled={currentPage === 1}
                onClick={prevPageHandler}
            >
                Previous
            </BoostrapPagination.Item>
            { paginationItems.map((item, index) => {
                const isActive = currentPage === index + 1;
                return  (
                    <BoostrapPagination.Item
                        key={index}
                        active={isActive}
                        onClick={onChangePageHandler(isActive, index + 1)}
                    >
                        {index + 1}
                    </BoostrapPagination.Item>
                )
            })}
            <BoostrapPagination.Item
                disabled={currentPage === totalPage}
                onClick={nextPageHandler}
            >
                Next
            </BoostrapPagination.Item>
        </StyledPagination>
    )
};

export default Pagination;
