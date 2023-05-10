import React from "react";
import { Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

export function renderPagination(currentPage, handlePageClick) {
    const paginationArray = [];
    const totalPages = 3; // replace with the actual number of pages
    if (currentPage > 1) {
        if (currentPage === 2) {
            paginationArray.push(
                <Button
                    key="prev"
                    variant="outlined"
                    color="primary"
                    onClick={() => handlePageClick(currentPage - 1)}
                >
                    <KeyboardArrowLeft />
                    Prev
                </Button>
            );
        } else {
            paginationArray.push(
                <Button
                    key="prev1"
                    variant="outlined"
                    color="primary"
                    onClick={() => handlePageClick(currentPage - 1)}
                >
                    <KeyboardArrowLeft />
                </Button>
            );
            paginationArray.push(
                <Button
                    key="prev2"
                    variant="outlined"
                    color="primary"
                    onClick={() => handlePageClick(currentPage - 1)}
                >
                    {currentPage - 1}
                </Button>
            );
        }
    }
    paginationArray.push(
        <Button
            key={currentPage}
            variant="contained"
            color="primary"
            onClick={() => handlePageClick(currentPage)}
        >
            {currentPage}
        </Button>
    );
    if (currentPage < totalPages) {
        if (currentPage === 1) {
            paginationArray.push(
                <Button
                    key="next"
                    variant="outlined"
                    color="primary"
                    onClick={() => handlePageClick(currentPage + 1)}
                >
                    Next
                    <KeyboardArrowRight />
                </Button>
            );
        } else {
            paginationArray.push(
                <Button
                    key="next1"
                    variant="outlined"
                    color="primary"
                    onClick={() => handlePageClick(currentPage + 1)}
                >
                    {currentPage + 1}
                </Button>
            );
            paginationArray.push(
                <Button
                    key="next2"
                    variant="outlined"
                    color="primary"
                    onClick={() => handlePageClick(currentPage + 1)}
                >
                    <KeyboardArrowRight />
                </Button>
            );
        }
    }
    return paginationArray;
}