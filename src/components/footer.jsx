import * as React from "react"
import Logo from "../icons/logo"
import {
  footerStyle,
  copyright,
  links,
  blurb,
  logos,
  footerNavList,
  footerNavListItem,
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={blurb}>
        <div className={logos}>
          <Logo />
        </div>
        Welcome to the<strong> Gatsby shopify demo store</strong> utilising
        shopify's new<strong> custom app</strong> and latest{" "}
        <strong>web-hook</strong>, providing the latest
        <strong> payment services</strong>, better <strong>security</strong>,
        and<strong> customer experience</strong>
        <br />
        <br />
        hosted on <strong>gatsby cloud</strong>.
      </div>
      <nav className={links} aria-label="footer">
        <ul className={footerNavList}>
          <li className={footerNavListItem}>
            <a href="https://www.adudev.co.uk">About Adu Dev</a>
          </li>
        </ul>
      </nav>
      <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · All rights reserved
      </div>
    </footer>
  )
}
