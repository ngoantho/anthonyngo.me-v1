export default function Avatar() {
  return (
    <>
      <img src="/me.png" alt="Picture of me" />
      <style jsx>{`
        img {
          border-radius: 50%;
        }
      `}</style>
    </>
  )
}
