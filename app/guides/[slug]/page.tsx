import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

const CONTENT_PATH = path.join(
  process.cwd(),
  "app/content/guides"
)

export default async function GuidePage({
  params,
}: {
  params: { slug: string }
}) {
  const filePath = path.join(
    CONTENT_PATH,
    `${params.slug}.mdx`
  )

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const source = fs.readFileSync(filePath, "utf8")

  return (
    <article className="prose prose-lg mx-auto py-12">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </article>
  )
}
