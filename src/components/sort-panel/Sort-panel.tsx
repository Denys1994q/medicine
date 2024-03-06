import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SortPanel = ({sortOrder, setSortOrder }: any) => {
    return (
        <FormControl variant="standard" sx={{ minWidth: 130 }}>
            <InputLabel sx={{ fontSize: "14px" }} id='sortOrderLabel'>
                Sort by Price:
            </InputLabel>
            <Select
                labelId='sortOrderLabel'
                id='sortOrder'
                sx={{ fontSize: "14px" }}
                value={sortOrder}
                autoWidth
                onChange={e => setSortOrder(e.target.value as "asc" | "desc")}
            >
                <MenuItem sx={{ fontSize: "14px" }} value='asc'>
                    Low to High
                </MenuItem>
                <MenuItem sx={{ fontSize: "14px" }} value='desc'>
                    High to Low
                </MenuItem>
            </Select>
        </FormControl>
    );
};

export default SortPanel;
