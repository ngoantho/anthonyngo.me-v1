import { commonEasing } from "config";
import { glob as css } from "goober";

css`
  .fadeup {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms ${commonEasing}, transform 300ms ${commonEasing};
  }

  .fadeup.active {
    opacity: 1;
    transform: translateY(0px);
  }

  .fadedown {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms ${commonEasing}, transform 300ms ${commonEasing};
  }

  .fadedown.active {
    opacity: 1;
    transform: translateY(0px);
  }

  .fade {
    opacity: 0.01;
    transition: opacity 1000ms ${commonEasing};
  }

  .fade.active {
    opacity: 1;
  }
`;
