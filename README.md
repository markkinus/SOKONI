## Cross-Browser Compatibility Testing

The SOKONI website was tested using the live version of the project in multiple modern web browsers, including Google Chrome and Microsoft Edge.

The main website features were checked to ensure they displayed and behaved correctly across the tested browsers. These included the header and navigation, hero section, search bar, filter sidebar, sorting dropdown, product grid, product cards, hover effects, product detail modals, cart sidebar, buttons, and links.

All tested features worked as expected, and no major browser-specific compatibility issues were identified.

The website uses standard HTML5 and CSS3 features such as CSS Grid, Flexbox, CSS transitions, CSS animations, and the `:target` pseudo-class. These features displayed correctly in the tested browsers.

## Performance Optimization

The SOKONI website was optimized by keeping the HTML structure simple and organizing the CSS into reusable sections for the header, navigation, hero, filters, products, modals, and cart.

Product images use fixed dimensions and `object-fit: contain` to maintain consistent display without distortion.

CSS Grid and Flexbox are used for efficient layouts, while JavaScript was avoided because the filter, sorting, modal, and cart features are static UI requirements.

## CSS Architecture Documentation

The SOKONI website uses a simple component-based CSS structure to keep the styling organized and easy to maintain.

The `style.css` file is organized into sections covering:

* Global reset styles
* Header and search bar
* Navigation
* Hero section
* Main layout
* Filter sidebar and sorting
* Product grid and product cards
* Product detail modals
* Cart sidebar
* Hover effects and transitions
* Responsive styling

CSS Grid is used for the main layout and product grid, while Flexbox is used for elements such as the header, navigation, filters, and cart components.

Reusable class selectors such as `.product-card`, `.filter-group`, `.cart-button`, and `.product-details`, and `.footer-section` are used to avoid repeating the same styling.

The project keeps the HTML structure separate from the CSS styling, making the website easier to update and maintain.

## Lighthouse Performance Audit

A Lighthouse performance audit was performed on the live SOKONI website using Google Chrome.

The audit measured the website's loading performance and identified areas that could affect page speed and overall performance.

**Performance Score: 55/100**

The project was kept lightweight by using simple HTML and CSS, avoiding unnecessary JavaScript, using CSS Grid and Flexbox for layouts, and keeping the page structure straightforward.

The Lighthouse audit was used to identify possible performance improvements and verify the overall loading performance of the website.
