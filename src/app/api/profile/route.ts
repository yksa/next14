import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  cookies().set("resultsPerPage", "20");
  const theme = request.cookies.get("theme");

  console.log("authorization header ", requestHeaders.get("authorization"));
  console.log("dkfj ", headerList.get("authorization"));
  console.log({ theme });
  console.log("cookie resultsPerPage ", cookies().get("resultsPerPage"));

  return new Response("<h1>Profile API data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
