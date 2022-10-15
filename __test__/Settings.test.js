/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Settings from "../src/pages/Settings";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom"; 
import { Provider } from "react-redux";
import store from "../src/redux/store";

test('loads settings page', async () => {
    render(
        <Router>
            <Provider store={store}>
                <Settings />
            </Provider>
        </Router>)
    await screen.getByTestId("title")

    expect(screen.getByTestId("title")).toHaveTextContent("Code Quiz")
})