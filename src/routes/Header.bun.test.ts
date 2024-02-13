import { render, screen } from "@testing-library/svelte";
import { expect, test } from "bun:test";
import "global-jsdom/register";
import Header from "./Header.svelte";

test("check bun support for component testing", () => {
    render(Header);
    expect(screen.getByText(/home/i)).toBeDefined();
});
