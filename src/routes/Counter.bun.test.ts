/// <reference lib="dom" />
import { render, screen } from "@testing-library/svelte";
import { expect, test } from "bun:test";
import "global-jsdom/register";
import Counter from "./Counter.svelte";

test("check bun support for component testing", () => {
    render(Counter);
    expect(screen.getByText("0")).toBeDefined();
});
