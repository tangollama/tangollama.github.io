import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Prevent FA from auto-injecting CSS via document.head (breaks SSG/SSR)
// The CSS is imported statically in BaseHead.astro instead
config.autoAddCss = false;

library.add(fab, fas);