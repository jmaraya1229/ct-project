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

describe("Settings page rendering", () => {
    it("should render the settings page", () => {
        render(
            <Router>
                <Provider store={store}>
                    <Settings />
                </Provider>
            </Router>)

        expect(screen.getByTestId("title")).toHaveTextContent("Code Quiz")
        expect(screen.getByTestId("settings-form")).toBeInTheDocument()
        expect(screen.getByTestId("amount")).toBeInTheDocument()
        expect(screen.getByTestId("Difficulty")).toBeInTheDocument()
        expect(screen.getByTestId("Tag")).toBeInTheDocument()
    })

    it("should test for validity of each option", () => {
        render(
            <Router>
                <Provider store={store}>
                    <Settings />
                </Provider>
            </Router>)

        expect(screen.getByTestId("Difficulty")).toBeValid()
        expect(screen.getByTestId("Tag")).toBeValid()
        expect(screen.getByTestId("amount")).toBeValid()
    })

})