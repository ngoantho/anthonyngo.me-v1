import { styled } from "goober"

let Img = styled("img")`
  border-radius: 50%;
`

export default function Avatar() {
  return <Img src="/me.png" alt="Picture of me" />
}
