import React, { Fragment } from "react";
import { useRouter } from "next/router";
import cls from "classnames";
import * as Icons from "../icons";

const routes = [
  {
    icon: "Bookmark",
    to: "/",
  },
  {
    icon: "Layers",
    to: "/1",
  },
  {
    icon: "Grid",
    to: "/2",
  },
  {
    icon: "Package",
    to: "/3",
  },
  {
    icon: "Percent",
    to: "/4",
  },
  {
    icon: "User",
    to: "/5",
  },
  {
    icon: "FileText",
    to: "/6",
  },
  {
    icon: "MoreHorizontal",
    to: "/6",
  },
];

const Aside = () => {
  const router = useRouter();

  return (
    <aside className="aside">
      <a className="nav-item border-bottom">
        <Icons.Menu className="icon dark" />
      </a>
      <nav className="nav">
        {routes.map((item, index) => {
          const Icon = Icons[item.icon];
          return (
            <Fragment key={index}>
              <a
                className={cls(
                  "nav-item",
                  item.to === router.pathname && "active"
                )}
              >
                <Icon className="icon" />
              </a>
              {index === 2 && <div className="divider"></div>}
            </Fragment>
          );
        })}
      </nav>
    </aside>
  );
};

export default Aside;
