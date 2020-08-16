Steps For Setup
1. npm init vite-app jesusavina.com --template react-ts
2. npm i -D autoprefixer
3. npm i tailwindcss
4. Create postcss.config.js
5. Create tailwind.config.js
6. Create .browserslistrc

Tips
1. Add env NODE_ENV=production before vite build in the Package.json build script. This helps with postcss not detecting the env.
2. Import tailwind css file in main/index.tsx and make sure index.html has <script type="module" src="/src/main.tsx"></script>.
3. Utilized Google web font helper for smaller local fonts and browser support.
4. Adding a prefatch link for my script increased my PageSpeed Insights score <link rel="prefetch" href="/src/main.tsx" as="script">. Because Vite automatically inlines any file smaller than 4kb, I have to manually add this after the prod build.
5. Adding a preload link for my css increased total blocking time even though it removed the render-blocking warning on PageSpeed Insights. I decided to not include the preload link for performance reasons. There may be a better way to solve this.

Production
1. Vite uses Rollup for a production build
2. Bundles all React code and purges unused code into 1 JS file under dist/_assets
3. Bundles all CSS code and purges unused code into 1 css file under dist/_assets
4. Adds an index.html file to dist with references to the js and css file which are under dist/_assets

Achievements
1. PageSpeed Insights score of 100.
2. To Do: Mozilla Observatory