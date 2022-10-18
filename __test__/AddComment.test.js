/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddComment from "../src/pages/AddComment";
import "@testing-library/jest-dom";

describe("Add Comment functionality", () => {
    it("should render and require name input", () => {
        render (<AddComment />)

        const inputName = screen.getByTestId("comment_name")
        expect(inputName).toBeInTheDocument()
        expect(inputName).toBeValid()
        expect(inputName.value).toBe()
    })

    it("should render and require message input", () => {
        render (<AddComment />)

        const inputMessage = screen.getByTestId("comment_message")
        expect(inputMessage).toBeInTheDocument()
        expect(inputMessage).toBeValid()
        expect(inputMessage.value).toBe()
    })

    it("should render and require rating input", () => {
        render (<AddComment />)

        const inputRating = screen.getByTestId("comment_rating")
        expect(inputRating).toBeInTheDocument()
        expect(inputRating).toBeValid()
        expect(inputRating.value).toBe()
    })

})