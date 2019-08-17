# Material Instinct - DNA Frontend (2019)

- <del>Flow / Type Checking<del>
- <del>React<del>
- <del>Express (SSR)<del>
- <del>Redux (project specific data mgmt)<del>
- Pusher / API Integration
- <del>Styled Components<del>
- Moving Letters
- UI Sounds (proprietary: "nom install beeper")
- Maps
- File upload
- Form validation
- Animations / Transitions
- Gestures
- UI Alerts
- Uptime Monitoring
- Twilio
- Unit Testing
- Chat widget
- Chatbot
- Feature Detection
- Benchmarking
- Header tag injection (Helmet)
- Secrets management

**GETTING STARTED**

Prerequisites: YVM & NVM (for specific node/yarn versions)

1. Clone Repo
1. Choose correct Node / Yarn versions: `nvm use 10.16.2`
1. _install dependencies_ \$ yarn
1. _start dev server_ \$ yarn start:dev

**COMMITTING CODE**
The commit hook is setup to run a suite of linters to enforce code quality and style.
In order these are **Prettier** (Auto code cleanup/formatter), **Styelint** (styled component css linter), **Flow** (Static typing for annotated files _// @flow_, and **Es-Lint** (To catch lint errors not handled by the other linters such as unused variables, console logs, etc).
**Please** Fix these errors, add them to a new commit with a message such as Fix lint errors or something clever. **Do not use the** _--no-verify_ flag to bypass the linters.

This repo is designed to be universally rendered on the client device and the server and still allow code splitting. This is acheived with [**React-Universal-Component**](https://github.com/faceyspacey/react-universal-component) which allows us to dynamically import files with **import(\`/components/\${filename}`)**. This allows us to get te files we need to render the initial request on the server and then allow the client to take over rendering from there.

To take full advantage of this process we are using [**Redux-First-Router**](https://github.com/faceyspacey/redux-first-router) which bi-directionally links the browser URL to our redux state. URL's are parsed into actions and consumed internally by redux-first-router reducers (location, page, and title) to create our new state. We are able to pass URL parameters as well which will be parsed into action payloads. On the first request the server-side store parses the requested URL and updates the application state which is passed in the response and consumed as preloaded state by our client side store. This ensures that the server and client render are in sync

We use [**React-Helmet**](https://www.google.com/search?q=reacthelmet&oq=reacthelmet&aqs=chrome..69i57.1607j0j9&sourceid=chrome&ie=UTF-8) to populate the HTML document with header tags specific to each page. There are a couple approaches we can use here such as using another Universal-Component to **import(\`/headerComponents/\${filename}`)** and making sure that for each page file we have a corresponding headerComponent file, wrapping the helmet tags insed of the page component, or having those components return an array with the helmet component and the content component (both must have keys for this).

For styles we are using [**Styled-Components**](https://www.styled-components.com/docs).

example:

```
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ColoredContainer = styled(Container)`
    background-color: lime;
`

export default ({ children }) => <ColoredContainer>{children}</ColoredContainer>
```

There are text-editor packages for react, styled-components, flow, and ES-LINT that will make your life easier.

## Deployment

1. Make sure all dependencies & devDependencies are arranged properly
1. You may need to run `rm -Rf node_modules` locally to prevent Heroku from looking for the wrong pkgs
