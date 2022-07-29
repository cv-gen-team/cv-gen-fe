import { ExpandMore } from "@mui/icons-material";
import { TableHeadItem } from "../TableHeadItem";
import { StyledDiv, StyledGrid } from "./TableHead.styles";
import { TableHeadProps } from "./TableHead.types";

export function TableHead({
  columns,
  sortBy,
  onSortByChange,
  sortAsc,
}: TableHeadProps) {
  const accordionButtonXS = 0;
  const gridXS = (12 - accordionButtonXS) / columns.length;

  return (
    <StyledDiv>
      <StyledGrid container>
        {columns.map((col, i) => {
          const { columnKey, columnName } = col;

          return (
            <TableHeadItem
              isSortedBy={sortBy === columnKey}
              sortAsc={sortAsc}
              isSortable={col.isSortable}
              onClick={onSortByChange}
              name={columnName}
              itemName={columnKey}
              xs={gridXS}
              key={i}
            />
          );
        })}
      </StyledGrid>
      <ExpandMore sx={{ opacity: 0 }} />
    </StyledDiv>
  );
}