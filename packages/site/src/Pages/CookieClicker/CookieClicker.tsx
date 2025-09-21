import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Stack, PrimaryButton, DefaultButton } from "@fluentui/react";
import { RootState, increment, reset } from "@frontend/state";

export const CookieClickerPage: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.cookies.count);

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Cookie Clicker</h2>
      <Stack tokens={{ childrenGap: 15 }}>
        <div>
          <strong>Cookies:</strong> {count}
        </div>

        <PrimaryButton
          text="Bake Cookie 🍪"
          onClick={() => dispatch(increment())}
        />

        <DefaultButton
          text="Reset"
          onClick={() => dispatch(reset())}
        />
      </Stack>
    </div>
  );
};
