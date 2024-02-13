/// <reference lib="dom" />
import { render, screen } from "@testing-library/svelte";
import { expect, test } from "vitest";
import Header from "./Header.svelte";

test("check vitest support for component testing", () => {
    render(Header);
    expect(screen.getByText(/home/i)).toBeDefined();
});
