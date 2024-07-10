This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Private Folders

- For separating UI logic from routing logic
- For consistently organizing internal files across a project
- For sorting and grouping files in code editors
- And finally, for avoiding potential naming conflicts with future Next.js file conventions
- If you want to include an underscore in URL segments, you can prefix the folder with "%5F," which is the URL-encoded form of an underscore

## Route Groups

Allow us to logically group our routes and project files without affecting the URL path structure

## Layouts

- A page is UI that is unique to a route
- A layout is UI that is shared between multiple pages in the app

## How to create Layouts

- You can define a layout by default exporting a React component from a layout.js or layout.tsx file
- That component should accept a children prop that will be populated with a child page during rendering

## Routing Metada

- Ensuring proper search engine optimization (SEO) is crucial for increasing visibility and attracting users
- Next.js introduced the Metadata API which allows you to define metadata for each page
- Metadata ensures accurate and relevant information is displayed when your pages are shared or indexed

## Configuring Metadata

- Export a static metadata object
- Export a dynamic generateMetada function

Metadata rules

- Both layout.tsx and page.tsx files can export metadata. If defined in a layout, it applies to all pages in that layout, but if defined in a page, it applies only to that page
- Metadata is read in order, from the root level down to the final page level
- When there's metadata in multiple places for the same route, they get combined, but page metadata will replace layout metadata if they have the same properties

## Templates

- Templates are similar to layouts in that they wrap each child layout or page
- But, with templates, when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized
- A template can be defined by exporting a default React component from a template.js or template.tsx file
- Similar to layouts, templates should also accept a children prop which will render the nested segments in the route

## error.tsx

- Automatically wrap a route segment and its nested children in a React Error Boundary
- Create error UI tailored to specific segments using the file-system hierarchy to adjust granularity
- Isolate errors to affected segments while keeping the rest of the application functional
- Add functionality to attempt to recover from an error without a full page reload

## Component Hierarchy

```tsx
<Layout>
  <Template>
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <ErrorBoundary fallback={<NotFound />}>
          <Page />
        </ErrorBoundary>
      </Suspense>
    </ErrorBoundary>
  </Template>
</Layout>
```

## Intercepting Routes

- Intercepting routes allow you to intercept or stop the default routing behaviour to present an alternative view or component when navigating through the UI, while still preserving the intended route for scenarios like page reloads
- This can be useful if you want to show a route while keeping the context of the current page

## Intercepting Routes Conventions

- (.) to match segments on the same level
- (..) to match segments one level above
- (..)(..) to match segments two levels above
- (...) to match segments from the root app directory

## Route Handlers

- Unlike page routes, which respond with HTML content, route handlers allow you to create RESTful endpoints, giving you full control over the response
- There is no overhead of having to create and configure a separate server
- Route handlers are also great for making external API requests
- Route handlers run server-side, ensuring that sensitive information like private keys remains secure and never gets shipped to the browser
- Route handlers are the equivalent of API routes in Page router

## Caching in Route Handlers

- Route Handlers are cached by default when using the GET method with the Response object in Next.js

How to opt out of caching?

- dynamic mode in Segment Config Option
- using the Request object with the GET method
- employing dynamic functions like headers() and cookies()
- using any HTTP method other than GET

## Client-side Rendering

- This method of rendering, where the component code is transformed into a user interface directly within the browser (the client), is known as client-side rendering (CSR)
- CSR quickly became the standard for SPAs, with widespread adoption

## Drawbacks of CSR

- SEO - Generating HTML that mainly contains a single div tag is not optimal for SEO, as it provides little content for search engines to index
- Performance - Having the browser (the client) handle all the work, such as fetching data, computing the UI, and making the HTML interactive, can slow things down. Users might see a blank screen or loading spinner while the page loads
- Each new feature added to the application increases the size of the JavaScript bundle, prolonging the wait time for users to see the UI

## Server-side Solutions

- It significantly improves SEO because search engines can easily index the server-rendered content
- Users can immediately see the page HTML content, instead of a blank screen or loading spinner

1. Static Site Generation (SSG)
2. Server-Side Rendering (SSR)

- SSG occurs at build time, when the application is deployed on the server. This results in pages that are already rendered and ready to serve. It is ideal for content that doesn't change often, like blog posts
- SSR, on the otherhand, renders pages on-demand in response to user requests. It is suitable for personalized content like social media feeds, where the HTML depends on the logged-in user
- SErver-Side Rendering (SSR) was a significant improvement over Client-Side Rendering (CSR), providing faster initial page loads and better SEO

## Hydration

- During hydration, React takes control in the browser, reconstruing the component tree in memory based on the static HTML that was served
- It carefully plans the placement of interactive elements within the tree. Then, React proceeds to bind the necessary JavaScript logic to these elements
- This involves initializing the application state, attaching event handlers for actions such as clicks and mouseovers, and setting up any other dynamic functionalities required for a fully interactive user experience

## Drawbacks of SSR

1. You have to fetch everything before you can show anything

- Components cannot start rendering and then pause or "wait" while data is still being loaded
- If a component needs to fetch data from a database or another source (like an API), this fetching must be completed before the server can begin rendering the page
- This can delay the server's response time to the browser, as the server must finish collecting all necessary data before any part of the page can be sent to the client

2. You have to load everything before you can hydrate anything

- For successful hydration, where React adds interactivity to the server-rendered HTML, the component tree in the browser must exactly match the server-generated component tree
- This means that all the JavaScript for the components must be loaded on the client before you can start hydrating any of them

3. You have to hydrate everything before you can interact with anything

- React hydrates the component tree in a single pass, meaning once it starts hydrating, it won't stop until it's finished with the entire tree
- As a consequence, all components must be hydrated before you can interact with any of them

## The Evolution of React

CSR to SSR to Suspense for SSR

- Suspense for SSR brought us closer to a seamless rendering experience

Challenges

- Increased bundle sizes leading to excessive downloads for users
- Unnecessary hydration delaying interactivity
- Extensive client-side processing that could result in poor performance

## React Server Components (RSC)

- The architecture introduces a dual-component model => Client Components and Server Components
- This destination is not based on the functionality of the components but rather on where they execute and the specific environments they are designed to interact with

## Client Components

- They are typically rendered on the client-side (CSR) but, they can also be rendered to HTML on the server (SSR), allowing users to immediately see the page's HTML content rather than a blank screen
- Components that primarily run on the client but can (and should) also be executed once on the server as an optimization strategy
- Client Components have access to the client environment, such as the browser, allowing them to use state, effects, and event listeners to handle interactivity and also access browser-exclusive APIl like geolocation or localStorage, allowing you to build UI for specific use cases
- In fact, the term "Client Components" doesn't signify anything new; it simply helps differentiate these components from the newly introduced Server Components

## Server Components

- Server Components represent a new type of React Component specifically designed to operate exclusively on the server
- And unlike client components, their code stays on the server and is never downloaded to the client
- This design choice offers multiple benifits to React applications

## Benifits of Server Components

- Reduced Bundle Sizes

* Server components do not send code to the client, allowing large dependencies to remain server-side
* This benifits users with slower internet connections or less capable devices by eliminating the need to download, parse, and execute JavaScript for these components
* Additionally, it removed the hydration step, speeding up app loading and interaction

- Direct Access to Server-Side Resources

* By having direct access to server-side resources like databases or file systems. Server Components enable efficient data fetching and rendering without needing additional client-side processing
* Leveraging the server's computational power and proximity to data sources, they manage compute-intensive rendering tasks and send only interactive pieces of code to the client

- Enhanced Security

* Server Component's exclusive server-side execution enhances security by keeping sensitive data and logic, including tokens and API keys, away from the client-side

- Improved Data Fetching

* Server Components enhance data fetching efficiency
* Typically, when fetching data on the client-side using useEffect, a child component cannot begin loading its data until the parent component has finished loading its own
* This sequential fetching of data often leads to poor performance
* The main issue is not the round trips themselves, but that these round trips are made from the client to the server
* Server Components enable applications to shift these sequential round trips to the server side
* By moving this logic to the server, request latency is reduced, and overall performance is improved, eliminating client-server "waterfalls"

- Caching

* Rendering on the server enables caching of the results, which can be reused in subsequent requests and across different users
* This approach can significantly improve performance and reduce costs by minimizing the amount of rendering and data fetching required for each request

- Faster Initial Page Load and First Contentful Paint

* Initial Page Load and First Contentful Paint (FCP) are significantly improved with Server Components
* By generating HTML on the server, pages become immediately visible to users without the delay of downloading, parsing, and executing JavaScript

- Improved SEO

* Regarding Search Engine Optimization (SEO), the server-rendered HTML is fully accessible to search engine bots, enhancing the indexability of your pages

- Efficient Streaming

* Server Components allows the rendering process to be divided into manageable chunks, which are then streamed to the client as soon as they are ready
* This approach allows users to start seeing parts of the page earlier, eliminating the need to wait for the entire page to finish rendering on the server

- Server Components take charge of data fetching and static rendering, while Client Components are tasked with rendering the interactive elements of the application
- The bottom line is that the RSC architecture enables React applications to leverage the best aspects of both server and client rendering, all while using a single language, a single framewrok, and a cohesive set of APIs

## Static Rendering Summary

- Static rendering is a strategy where the HTML is generated at build time
- Along with the HTML, the RSC payload is created for each component, and JavaScript chunks are produced for client-side component hydration in the browser
- If you navigate directly to a page route, the corresponding HTML file is served
- If you navigate to the route from a different one, the route is created on the client side using the RSC payload and JavaScript chunks, without any additional requests to the server
- Static rendering is great for performance and use cases include blogs, documentation, marketing pages etc.

## Dynamic Rendering

- Dynamic rendering is a server rendering strategy where routes are rendered for each user at request time
- It us useful when a route has data that is personalized to the user or contains information that can only be known at request time, such as cookies or the URL's search parameters
- News websites, personalized e-commerce pages, and social media feeds are some examples where dynamic rendering is beneficial

## How to Dynamically Render

- During rendering, if a dynamic function is discovered, Next.js will switch to dynamically rendering the whole route
- In Next.js, these dynamic functions are: cookies(), headers(), and searchParms. Using any of these will opt the whole route into dynamic rendering at request time

## Streaming

- Streaming is a strategy that allows for progressive UI rendering from the server
- Work is divided into chunks and streamed to the client as soon as it's ready
- This enables users to see parts of the page immediately, before the entire content has finished rendering
- Streaming significantly improves both the initial page loading performance and the rendering of UI elements that rely on slower data fetches, which would otherwise block the rendering of the entire route
- Streaming is integrated into the Next.js App Router by default

## Third-party Packages

- Third-party packages in the ecosystem are gradually adapting, beginning to add the "use client" directive to components that rely on client-only features, marking a clear distinction in their execution environment
- Many components from npm packages, which traditionally leverage client-side features, haven't yet integrated this directive
- The absence of "use client" means that while these components will function correctly in Client Components, they may encounter issues or might not work at all within Server Components
- To address this, you can wrap third-party components that rely on client-only features in your own Clinet Components

## Context Providers

- Context providers are typically rendered near the root of an application to share global application state and logic
- Since React context is not supported in Server Component, attempting to create a context at the root of your application will result in an error
- To address this, you can create a context and render it's provider inside a separate Client Component
