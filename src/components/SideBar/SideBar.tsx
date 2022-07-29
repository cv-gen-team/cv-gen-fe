import {
  StyledStack,
  StyledPaper,
  StyledNavLink,
  NavLinkTypography,
} from "./SideBar.styles";
import { ROUTE } from "../../constants/route";

import DnsIcon from "@mui/icons-material/Dns";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FolderIcon from "@mui/icons-material/Folder";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

export const SideBar = () => {
  return (
    <StyledPaper>
      <StyledStack>
        <StyledNavLink to={ROUTE.EMPLOYEES}>
          <EmojiPeopleIcon />
          <NavLinkTypography>Employees</NavLinkTypography>
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink to={ROUTE.PROJECTS}>
          <DnsIcon />
          <NavLinkTypography>Projects</NavLinkTypography>
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink to={ROUTE.CVS}>
          <AutoStoriesIcon />
          <NavLinkTypography>Cvs</NavLinkTypography>
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink to={ROUTE.ENTITIES}>
          <FolderIcon />
          <NavLinkTypography>Entities</NavLinkTypography>
        </StyledNavLink>
      </StyledStack>
    </StyledPaper>
  );
};
