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
import userEvent from "@testing-library/user-event";
import SelectField from "../src/components/SelectField";
import TextFieldComp from "../src/components/TextFieldComp";

describe("Settings page rendering", () => {
    it("should render the settings page with the title", async() => {
        render(
            <Router>
                <Provider store={store}>
                    <Settings />
                </Provider>
            </Router>)
        await screen.getByTestId("title")

        expect(screen.getByTestId("title")).toHaveTextContent("Code Quiz")
    })

    it("should render the settings page with the settings form", async() => {
        render(
            <Router>
                <Provider store={store}>
                    <Settings />
                </Provider>
            </Router>)
        await screen.getByTestId("settings-form")

        expect(screen.getByTestId("settings-form")).toBeInTheDocument()
    })

})