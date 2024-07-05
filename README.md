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
