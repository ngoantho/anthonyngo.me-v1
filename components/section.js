export default function Section({ name }) {
  return (
    <div>
      <legend>{name}</legend>
      <hr />
      <style jsx>{`
        div {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 1rem;
        }
        legend {
          background: black;
          color: white;
          width: fit-content;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        hr {
          margin-left: 0.5rem;
          width: 25%;
          height: 1px;
          background: lightgray;
          border: 1px solid lightgray;
        }
      `}</style>
    </div>
  )
}
