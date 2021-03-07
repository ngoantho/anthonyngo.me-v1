import Link from "next/link"

let LinkHook = (props) => {
  let href = props.href
  let isInternal = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternal) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

let MDXComponents = {
  a: LinkHook,
}

export default MDXComponents
