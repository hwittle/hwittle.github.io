import { useRouteError, isRouteErrorResponse, Link } from "react-router";

function getErrorDetails(error: unknown): { code: string; title: string; message: string } {
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return {
        code: "404",
        title: "Page Not Found",
        message: "The page you requested doesn't exist or may have been moved.",
      };
    }
    return {
      code: String(error.status),
      title: error.statusText || "Something went wrong",
      message: "An unexpected error occurred while loading this page.",
    };
  }

  if (error instanceof Error) {
    return {
      code: "ERR",
      title: "Unexpected Error",
      message: error.message || "An unexpected error occurred.",
    };
  }

  return {
    code: "404",
    title: "Page Not Found",
    message: "The page you requested doesn't exist or may have been moved.",
  };
}

export function NotFound() {
  const error = useRouteError();
  const { code, title, message } = getErrorDetails(error);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-24 text-center">
      {/* Ghost code stamp */}
      <p
        className="font-headline text-8xl md:text-[10rem] leading-none tracking-tight text-foreground/10 select-none mb-2"
        aria-hidden="true"
      >
        {code}
      </p>

      {/* Diamond rule */}
      <div className="flex items-center gap-3 mb-6 w-full max-w-xs">
        <span className="flex-1 border-t border-foreground/30" />
        <span className="text-foreground/40 text-xs">◆</span>
        <span className="flex-1 border-t border-foreground/30" />
      </div>

      {/* Title */}
      <h1 className="font-headline text-3xl md:text-4xl uppercase tracking-wide text-foreground mb-4">
        {title}
      </h1>

      {/* Message */}
      <p className="font-georgia text-base text-muted-foreground max-w-sm leading-relaxed mb-10">
        {message}
      </p>

      {/* Return home */}
      <Link
        to="/"
        className="text-sm uppercase tracking-widest underline-offset-4 hover:underline hover:decoration-foreground/80 focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        ← Return home
      </Link>
    </div>
  );
}
