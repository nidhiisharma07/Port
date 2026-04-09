import { FolderGit2, Link2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="section-shell border-t border-zinc-200/70 py-9 dark:border-zinc-800">
      <div className="section-wrap flex w-full flex-col items-start justify-between gap-4 text-sm text-zinc-600 dark:text-zinc-300 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} Nidhi Sharma. Crafted with care.</p>
        <div className="flex items-center gap-3">
          <a href="mailto:sharmanidhi97083@gmail.com" className="rounded-lg p-2 transition duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-900">
            <Mail className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/nidhi-sharma-40247b272/" target="_blank" rel="noreferrer" className="rounded-lg p-2 transition duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-900">
            <Link2 className="h-4 w-4" />
          </a>
          <a href="https://github.com/nidhiisharma07" target="_blank" rel="noreferrer" className="rounded-lg p-2 transition duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-900">
            <FolderGit2 className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
