/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Settings from "../src/pages/Settings";
import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from "react-router-dom"; 
import { Provider } from "react-redux";
import store from "../src/redux/store";

describe("stuff on Settings page", () => {
    test("loads settings page", async () => {
        render(
            <Router>
                <Provider store={store}>
                    <Settings />
                </Provider>
            </Router>)
        await screen.getByTestId("title")

        expect(screen.getByTestId("title")).toHaveTextContent("Code Quiz")
        // expect(screen.getByTestId("settings-form").toBeInTheDocument())
    })

})
