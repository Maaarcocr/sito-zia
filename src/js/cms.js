import CMS from "decap-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
// eslint-disable-next-line import/no-unresolved
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.scss";

import HomePreview from "./cms-preview-templates/home";
import PropertyPreview from "./cms-preview-templates/property";
import PropertiesPreview from "./cms-preview-templates/properties";
import ContactPreview from "./cms-preview-templates/contact";
import FooterPreview from "./cms-preview-templates/footer";

CMS.registerPreviewStyle(styles, {raw: true});
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("property", PropertyPreview);
CMS.registerPreviewTemplate("properties", PropertiesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.init();
