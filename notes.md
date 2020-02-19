## Why Vue.js

I chose to use Vue.js for the following reasons:

- Easy State Management
- Reactive Component Lifecycle
- Code organization
- Unit Testing Tools

## Notes

I've chosen not to use any third party plugins. It's easy to reach for tools such as vue-router and vuex, but for a project of this size I don't think they were needed. Adding plugins/libraries can lead to verbose boilerplate that can quickly increase a project's complexity. Less code = less bugs. These tools should only be implemented when the requirements dictate the need.

Styling is barebones and could be improved with a CSS framework or more time, but for the purposes of the assignment I don't think it was necessary. All layouts meet the bare minimum requirements for responsive design and follow mobile-first practices.

I've also omitted any headlines or text as I don't think those elements hold much weight to the nature of the assignment. If I'm wrong, please let me know and those can be added.

On the Address Form Page I've omitted the grayed out form fields in the supplied screenshot as I took that to represent they were disabled? If those are expected I can certainly make the necessary modifications.

## Possible Future Improvements

- More robust form validation
- Animations for better user experience
- Better styling - perhaps introduce a CSS Framework
- Better use of SASS functionality with mixins/variables/reusable media queries
- Abstract form field creation away from ProductListing.vue
  - create some individual field components (InputField, SelectField, etc).
  - this will allow for more dynamic creation of forms with a mix of different field types.
- Wait for images to load on a product listing page before displaying.

## Serving and building the project

- `yarn` - install dependencies
- `yarn serve` - run development server
- `yarn build` - compile project
