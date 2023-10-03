import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/admin")) return token?.role === "admin";
      return !!token;
    },
  },
});
export const config = { matcher: ["/admin:path*", "/profile"] };
