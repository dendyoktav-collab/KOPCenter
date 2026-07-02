import {
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";

import {
  NavigateNext,
} from "@mui/icons-material";

import {
  Link as RouterLink,
  useLocation,
} from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  const paths = location.pathname
    .split("/")
    .filter(Boolean);

  return (
    <Breadcrumbs
      separator={<NavigateNext fontSize="small" />}
      aria-label="breadcrumb"
    >
      <Link
        component={RouterLink}
        underline="hover"
        color="inherit"
        to="/dashboard"
      >
        Dashboard
      </Link>

      {paths.map((item, index) => {
        const url =
          "/" +
          paths
            .slice(0, index + 1)
            .join("/");

        const isLast =
          index === paths.length - 1;

        const title =
          item.charAt(0).toUpperCase() +
          item.slice(1);

        if (isLast) {
          return (
            <Typography
              key={url}
              color="text.primary"
            >
              {title}
            </Typography>
          );
        }

        return (
          <Link
            key={url}
            component={RouterLink}
            underline="hover"
            color="inherit"
            to={url}
          >
            {title}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}