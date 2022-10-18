import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { App } from "../src/App";
import { BrowserRouter } from "react-router-dom";

test("app rendering and navigating", async () => {
    render(<App />, {wrapper: BrowserRouter})
    const user = userEvent.setup()

    expect(screen.getByText("Coding Quiz")).toBeInTheDocument()

    await user.click(screen.getByText("/questions"))
    expect(screen.getByText("Questions")).toBeInTheDocument()
})

