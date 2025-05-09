import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "jsx", className }: CodeBlockProps) {
  return (
    <div className={cn("bg-gray-900 rounded-lg p-4 overflow-x-auto", className)}>
      <pre className="text-gray-100 font-mono text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}
