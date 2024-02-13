import { render, screen } from "@testing-library/svelte";
import { expect, test } from "vitest";
import Counter from "./Counter.svelte";

test("check vitest support for component testing", () => {
    render(Counter);
    expect(screen.getByText("0")).toBeDefined();
});
