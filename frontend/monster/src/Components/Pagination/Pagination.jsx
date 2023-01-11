import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";

export const Pagination = ({ page, setPage, totalPage }) => {
    return (
        <Box>
            <Flex justifyContent="center" gap={3}>
                <Button color={"#6e00be"} variant={"outline"} colorScheme={"blue"} onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Prev
                </Button>
                <Button color={"#6e00be"} variant={"outline"} colorScheme={"blue"}>{page}</Button>
                <Button color={"#6e00be"} variant={"outline"} colorScheme={"blue"} onClick={() => setPage(page + 1)} disabled={page === totalPage}>
                    Next
                </Button>
            </Flex>
        </Box>
    );
};