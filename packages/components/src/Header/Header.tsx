import React from "react";
import { Stack, DefaultButton, IconButton, Text } from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@frontend/state";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const count = useSelector((state: RootState) => state.cookies.count);
  return (
    <Stack
      horizontal
      horizontalAlign="center"
      styles={{ root: { background: "#f3f2f1", padding: 10 } }}
    >
      <Stack horizontal tokens={{ childrenGap: 50 }}>
        <DefaultButton
          text="Test Formik"
          styles={{ root: { width: 200 } }}
          onClick={() => navigate("/testForm")}
        />
        <DefaultButton
          text="Cookie Clicker (Redux)"
          styles={{ root: { width: 200 } }}
          onClick={() => navigate("/cookieclicker")}
        />
        <Text variant="xLarge">{`Cookie${count == 1 ? '' : "s"}: ${count} x`}🍪</Text>
      </Stack>
    </Stack>
  );
};
