import React from "react";
import Settings from "../src/pages/Settings";
import { render } from "@testing-library/react";

test("should show game settings form", () => {
    render(<Settings />)
    const input = screen.getByLabelText('')
})