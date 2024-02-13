# test create-svelte5

## bun support

Check whether component testing with `bun` works:

```shell
bun test
```

The component tests currently don't work, seems like a preprocessing step is needed...

## standard npm (vitest)

Check if component unit tests are possible with standard tools:

```shell
npx vitest run
```

✔️ basic `Counter.svelte` component test working: `src/routes/Counter.vitest.ts`
❌ similar test for `Header.svelte` component not working: `src/routes/Header.vitest.ts`