import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"

export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Navbar.Brand as={Link} to="/">
      <svg style={{width:'60px', height: '60px'}} className={`brand-icon ${dark ? "empire" : "rebel"}`} version="1.0" xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 1428.000000 1428.000000" role="img">
<title>Home</title>
<g transform="translate(0.000000,1428.000000) scale(0.100000,-0.100000)"
stroke="none">

<path fill="currentColor" d="M6259 10821 c-117 -38 -219 -127 -269 -236 -45 -97 -50 -145 -50
-450 l0 -285 -1169 0 c-1281 0 -1250 1 -1433 -60 -359 -121 -639 -418 -747
-795 l-26 -90 -3 -2240 c-2 -2210 -2 -2240 18 -2332 102 -469 463 -814 943
-899 123 -21 7130 -21 7254 0 170 30 313 88 453 181 229 153 403 393 477 660
l28 100 0 2260 0 2260 -29 100 c-117 406 -414 701 -827 822 l-94 27 -1217 4
-1217 3 -3 327 -3 327 -37 76 c-48 98 -119 168 -217 217 l-75 37 -850 2 c-796
2 -855 1 -907 -16z m1685 -382 l26 -20 0 -285 0 -284 -818 0 c-450 0 -821 2
-823 4 -2 2 -2 133 1 290 5 270 6 286 25 300 17 13 119 15 791 16 765 0 772 0
798 -21z m-3974 -3805 l0 -2836 -197 5 c-214 5 -288 19 -396 74 -210 106 -348
272 -419 503 l-22 75 -4 2080 c-2 1278 1 2126 7 2200 11 144 43 251 102 349
110 182 267 303 461 355 103 28 105 28 296 30 l172 1 0 -2836z m5980 1 l0
-2835 -2800 0 -2800 0 0 2835 0 2835 2800 0 2800 0 0 -2835z m848 2806 c264
-77 468 -287 543 -556 12 -42 14 -403 14 -2255 l0 -2205 -23 -69 c-72 -214
-211 -379 -399 -475 -115 -58 -237 -80 -445 -81 l-158 0 0 2836 0 2836 198 -5
c162 -4 210 -8 270 -26z"/>
<path fill="currentColor" d="M6195 8730 c-560 -85 -1010 -512 -1132 -1072 -21 -100 -23 -370 -3
-488 76 -456 270 -905 554 -1285 243 -325 747 -812 1176 -1135 126 -95 345
-240 362 -240 5 0 53 28 106 62 289 185 627 467 995 828 263 259 422 450 571
689 297 472 469 1060 426 1450 -66 605 -524 1086 -1129 1186 -149 25 -388 17
-521 -18 -124 -32 -254 -85 -363 -148 l-87 -51 -78 46 c-135 79 -303 142 -456
171 -83 16 -330 19 -421 5z m412 -389 c163 -34 303 -103 456 -227 78 -63 100
-74 112 -54 10 17 136 114 198 154 70 44 195 97 292 122 54 15 106 19 230 19
138 0 173 -3 250 -24 225 -60 417 -191 552 -376 61 -84 126 -224 154 -330 103
-398 -139 -1109 -546 -1610 -102 -126 -372 -401 -555 -565 -58 -52 -107 -97
-110 -100 -9 -10 -184 -155 -255 -211 -121 -97 -221 -169 -234 -169 -20 0
-361 262 -437 335 -6 5 -39 35 -74 65 -189 163 -500 472 -623 619 -274 329
-471 729 -559 1136 -40 185 -43 363 -10 500 43 170 164 374 288 481 143 125
327 214 501 244 92 15 273 11 370 -9z"/>
</g>
</svg>

      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4 nav-links">
          <Nav.Link className="ml-2" as={Link} to="/about" title="About">
            About
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/blog" title="News">
            News
          </Nav.Link>
          <Nav.Link className="ml-2" as={Link} to="/talks" title="Talks">
            Talks
          </Nav.Link>
          <Form className="ml-3 my-auto">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              title="Toggle Theme"
              checked={dark}
              onChange={toggleDark}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
