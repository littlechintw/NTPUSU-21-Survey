npm run build
git add dist -f
git commit -m 'Update the gh_page'
git push origin :gh-pages
git subtree push --prefix dist origin gh-pages
