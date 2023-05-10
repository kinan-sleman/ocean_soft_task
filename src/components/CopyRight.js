import React from "react";
import { Box, Typography } from "@material-ui/core";
import '../styles/CopyRight.css';
function CopyRight({ isLoading }) {
    return (
        <>
            {!isLoading && (
                <Box>
                    <Typography variant="body1" align="center">
                        © 2023 | All Rights Reserved | Ocean Soft
                    </Typography>
                </Box>
            )}
        </>
    );
}

export default CopyRight;