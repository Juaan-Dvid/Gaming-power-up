
This is an exclusive Gaming Power Up NFT.

To interact with this DApp, visit https://gaming-power-up.vercel.app/
To see the erc721 contract, visit https://github.com/Juaan-Dvid/ERC721-Contract
To watch the video explaining how it works, visit: https://youtu.be/F_qAKJwDhCc

To see the contract deployed at arbitrum sepolia, visit: https://sepolia.arbiscan.io/address/0x4778F2f86172029A8d2Ae44B16664209459208AA
Contract address: 0x4778F2f86172029A8d2Ae44B16664209459208AA

-----------------------------------------------------------------------------------------------------------------------------------------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
