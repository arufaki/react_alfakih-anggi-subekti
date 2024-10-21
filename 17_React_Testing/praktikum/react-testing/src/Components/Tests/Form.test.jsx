import { test, expect, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Form from "../Fragments/Form";
import { store } from "../../redux/store";
import { Provider } from "react-redux";

describe("Form test", () => {
    test("render element name", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>,
        );

        const inputElement = screen.getByTestId("input-name");
        const displayElement = screen.getByTestId("product-display");

        fireEvent.change(inputElement, { target: { value: "Baju" } });
        expect(inputElement.value).toBe("Baju");
        expect(displayElement).toHaveTextContent("Product Name: Baju");
    });

    test("render element select optiom", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>,
        );

        const selectCategory = screen.getByTestId("select-category");
        fireEvent.change(selectCategory, { target: { value: "bag" } });

        expect(selectCategory.value).toBe("bag");
    });

    test("render element image", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>,
        );

        const dummyImg = new File(["dummy img"], "default.png", { type: "image/png" });
        const imageFile = screen.getByTestId("image-test");
        fireEvent.change(imageFile, { target: { files: [dummyImg] } });

        expect(imageFile.files[0]).toBe(dummyImg);
        expect(imageFile.files.length).toBe(1);
    });

    test("render description test", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>,
        );

        const descriptionEl = screen.getByTestId("description-test");
        fireEvent.change(descriptionEl, { target: { value: "Alamak" } });

        const errorLek = screen.getByRole("alert");
        expect(errorLek).toHaveTextContent("Description must be at least 10 characters");
    });

    test("render price", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>,
        );

        const priceEl = screen.getByTestId("price-test");
        fireEvent.change(priceEl, { target: { value: "0" } });

        const errorPrice = screen.getByTestId("alert");
        expect(errorPrice).toHaveTextContent("Price must be greater than 0");
    });

    test("product name tidak boleh mengandung karakter khusus", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>,
        );

        const inputElement = screen.getByTestId("input-name");

        fireEvent.change(inputElement, { target: { value: "!Test" } });

        expect(screen.getByRole("alert-name")).toHaveTextContent("Name contain alphabetic characters or must not exceed 25 characters !");
    });

    test("product name tidak lebih dari 25 karakter", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>,
        );

        const inputElement = screen.getByTestId("input-name");

        fireEvent.change(inputElement, { target: { value: "Alamak ini dah lebih dari 25 karakter he macam mana ni wak" } });

        expect(screen.getByRole("alert-name")).toHaveTextContent("Name contain alphabetic characters or must not exceed 25 characters !");
    });

    test("submit tanpa isi form", () => {
        render(
            <Provider store={store}>
                <Form />
            </Provider>,
        );

        const buttonEl = screen.getByTestId("submit-button");

        window.alert = vi.fn();

        fireEvent.click(buttonEl);
        expect(window.alert).not.toHaveBeenCalled();
    });
});
