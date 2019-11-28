import React from "react";
let links = [
  {
    label: "Home",
    link: "#home"
  },
  {
    label: "Services",
    link: "#services",
    submenu: ["for enterprise", "for student"]
  },
  {
    label: "Contact",
    link: "#Contact"
  }
];
// if(3>2) "3>2"else "2>3"
// (3>2)?"3>2":"2>3"
export default function Navbar() {
  return (
    <ul className="Nav">
      {links.map(el => (
        <a href="#">
          {" "}
          <li className={el.label}>
            {el.label}
            {el.submenu ? (
              <ul className="HiddenNav">
                {el.submenu.map(e => (
                  <li>{e}</li>
                ))}
              </ul>
            ) : null}
          </li>
        </a>
      ))}
    </ul>
  );
}
