/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

interface Props {
  item: {
    id: number;
    name: string;
    url: string;
  };
}

export const MenuNavItem = ({ item: { name, url } }: Props) => (
  <li
    css={css`
      :first-of-type a {
        padding-left: 0;
      }
    `}
  >
    <Link
      css={css`
        display: block;
        padding: 10px 15px;
        color: #ffffff;
        text-decoration: none;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        :hover {
          text-decoration: underline;
        }
      `}
      to={url}
    >
      {name}
    </Link>
  </li>
);
