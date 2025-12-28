import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import { Header } from "@/components/header"  // your existing header
import { Footer } from "@/components/footer"  // your existing footer

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const guidesDir = path.join(process.cwd(), "content/guides")
  const files = fs.readdirSync(guidesDir)

  return files.map((file) => ({
    slug: file.replace(/\.mdx$/, ""),
  }))
}

export default function GuidePage({ params }: Props) {
  const guidesDir = path.join(process.cwd(), "content/guides")
  const filePath = path.join(guidesDir, `${params.slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return notFound()
  }

  const content = fs.readFileSync(filePath, "utf-8")

  const otherGuides = fs
    .readdirSync(guidesDir)
    .map((f) => f.replace(/\.mdx$/, ""))
    .filter((slug) => slug !== params.slug)

  return (
    <>
      <Header /> {/* your real header */}

      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">{params.slug.replace(/-/g, " ")}</h1>

        <article className="prose prose-slate">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>

        {otherGuides.length > 0 && (
          <aside className="mt-12 border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">Other Guides</h2>
            <ul className="list-disc list-inside space-y-2">
              {otherGuides.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/guides/${slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {slug.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>

      <Footer /> {/* your real footer */}
    </>
  )
}
