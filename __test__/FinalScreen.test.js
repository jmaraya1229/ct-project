/**
 * @jest-environment jsdom
 */

 import * as React from "react";
 import { render, screen } from "@testing-library/react";
 import "@testing-library/jest-dom";
 import { BrowserRouter as Router } from "react-router-dom"; 
 import { Provider } from "react-redux";
 import store from "../src/redux/store";
import FinalScreen from "../src/pages/FinalScreen";

 describe("Final Screen page", () => {
    it("should render page components", () => {
        render(
            <Router>
                <Provider store={store}>
                    <FinalScreen />
                </Provider>
            </Router>)

        expect(screen.getByTestId("score")).toBeInTheDocument()
        expect(screen.getByTestId("restart-button")).toBeInTheDocument()
        expect(screen.getByTestId("comments")).toBeInTheDocument()
    })

 })