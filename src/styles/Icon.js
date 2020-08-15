import { commonTransition } from "config";
import { css } from "goober";

const CommonIcon = css`
  filter: grayscale(100%);
  transition: ${commonTransition};

  &:hover,
  &:focus {
    filter: initial;
    transform: translateY(-3px);
  }
`;

export default function SIcon({
  src,
  format = "png",
  inline = false,
  ...props
}) {
  return (
    <picture>
      <source srcSet={require(`public/${src}?webp`)} type="image/webp" />
      <source srcSet={require(`public/${src}`)} type={`image/${format}`} />
      <img
        className={CommonIcon}
        src={require(`public/${src}${inline ? "?inline" : ""}`)}
        {...props}
      />
    </picture>
  );
}
