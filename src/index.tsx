/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";

const onAutoFillStart = keyframes`
from{}
`;
const onAutoFillCancel = keyframes`
to{}
`;

const animation = css`
  &:-webkit-autofill {
    animation-name: ${onAutoFillStart};
  }
  &:not(:-webkit-autofill) {
    animation-name: ${onAutoFillCancel};
  }
`;
interface Props {
  onAutoFill: (filled: boolean) => void;
}

const AutofillInput: React.FC<Props & React.InputHTMLAttributes<HTMLInputElement>> = ({
  onAutoFill,
  onAnimationStart,
  ...props
}) => {
  return (
    <input
      css={animation}
      onAnimationStart={e => {
        // Allow users to still use the onAnimationStart callback
        onAnimationStart && onAnimationStart(e)

        if (e.animationName === onAutoFillStart.name) {
          onAutoFill(true);
        } else if (e.animationName === onAutoFillCancel.name) {
          onAutoFill(false);
        }
      }}
      {...props}
    />
  );
};

export default AutofillInput;
