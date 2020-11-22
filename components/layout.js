export default function Layout({ children }) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          max-width: var(--global-box);
          margin: 0 auto;
          width: 100%;
        }
      `}</style>
    </div>
  )
}
